import os
import cv2
import zipfile
import ffmpeg
from flask import Flask, render_template, request, send_file
from flask import send_from_directory, current_app
import subprocess

app = Flask(__name__)

# Directory for uploaded files
UPLOAD_DIRECTORY = 'uploaded_files'
OUTPUT_DIRECTORY = 'output_files'

# Create the upload and output directories if they don't exist
os.makedirs(UPLOAD_DIRECTORY, exist_ok=True)
os.makedirs(OUTPUT_DIRECTORY, exist_ok=True)


# Home page
@app.route('/')
def home():
    return render_template('index.html')


# Video editing route
@app.route('/edit', methods=['POST'])
def edit_video():
    # Get the editing options from the form
    edit_option = request.form['edit_option']

    # Perform video editing operations
    edited_file = 'edited_video.mp4'
    edited_file_path = os.path.join(UPLOAD_DIRECTORY, edited_file)

    if edit_option == 'cut':
        start_time = request.form['start_time']
        end_time = request.form.get('end_time')
        uploaded_file = request.files['video']
        file_path = os.path.join(UPLOAD_DIRECTORY, uploaded_file.filename)
        uploaded_file.save(file_path)
        trim_video(file_path, edited_file, start_time, end_time)
        os.remove(file_path)

    elif edit_option == 'join':
        num_videos = int(request.form['num_videos'])
        uploaded_files = request.files.getlist('videos')
        video_paths = []

        # Save the uploaded videos and collect their paths
        for i in range(num_videos):
            file = uploaded_files[i]
            file_path = os.path.join(UPLOAD_DIRECTORY, file.filename)
            file.save(file_path)
            video_paths.append(file_path)

        # Join the videos
        joined_file = 'joined_video.mp4'
        joined_file_path = os.path.join(OUTPUT_DIRECTORY, joined_file)
        join_videos(video_paths, joined_file_path)

        # Remove the individual video files
        for file_path in video_paths:
            os.remove(file_path)

        return send_from_directory(OUTPUT_DIRECTORY, joined_file, as_attachment=True)

    elif edit_option == 'split':
        split_video = request.files['split_video']
        split_boundaries = request.form.getlist('split_boundary')
        uploaded_file_path = os.path.join(UPLOAD_DIRECTORY, split_video.filename)
        split_video.save(uploaded_file_path)
        split_video_files(uploaded_file_path, split_boundaries, edited_file)
        os.remove(uploaded_file_path)

        # Create a ZIP file containing all the split parts
        zip_file_path = os.path.join(OUTPUT_DIRECTORY, 'edited_videos.zip')
        with zipfile.ZipFile(zip_file_path, 'w') as zip_file:
            for filename in os.listdir(OUTPUT_DIRECTORY):
                if filename.startswith(edited_file):
                    file_path = os.path.join(OUTPUT_DIRECTORY, filename)
                    zip_file.write(file_path, os.path.basename(file_path))

        # Return the ZIP file for download
        return send_file(zip_file_path, as_attachment=True)

    elif edit_option == 'audio_mixing':
        audio_file = request.files['audio_file']
        uploaded_file = request.files['audio_mixing_file']
        video_path = os.path.join(UPLOAD_DIRECTORY, uploaded_file.filename)
        audio_path = os.path.join(UPLOAD_DIRECTORY, audio_file.filename)
        uploaded_file.save(video_path)
        audio_file.save(audio_path)
        mix_audio(video_path, audio_path, edited_file)
        os.remove(video_path)
        os.remove(audio_path)

    return send_file(edited_file, as_attachment=True)


# Trim video
def trim_video(input_file, output_file, start_time, end_time):
    ffmpeg.input(input_file, ss=start_time, to=end_time).output(output_file, c='copy').run()


# Join videos
def join_videos(video_paths, output_file_path):
    # Create a text file with input file paths
    with open('input.txt', 'w', encoding='utf-8') as f:
        for file_path in video_paths:
            f.write("file '{}'\n".format(file_path))

    # Run FFmpeg command to join the videos
    command = 'ffmpeg -f concat -safe 0 -i input.txt -c copy "{}"'.format(output_file_path)
    subprocess.run(command, shell=True)

    # Remove the temporary input file
    os.remove('input.txt')


def split_video_files(video_path, split_boundaries, output_filename):
    # Remove existing split files
    for filename in os.listdir(OUTPUT_DIRECTORY):
        if filename.startswith(output_filename):
            os.remove(os.path.join(OUTPUT_DIRECTORY, filename))

    if len(split_boundaries) == 0:
        # If there are no boundaries, simply copy the video to the output file
        subprocess.run(['ffmpeg', '-i', video_path, '-c', 'copy', os.path.join(OUTPUT_DIRECTORY, output_filename)])
    else:
        # Sort the boundaries in ascending order (just in case they are not sorted)
        split_boundaries.sort()

        # Initialize the start time of the clip
        start_time = '0'

        # Iterate through each boundary
        for i, boundary in enumerate(split_boundaries):
            # Create the output filename for the current clip
            clip_output_filename = f'{output_filename}_part{i + 1}.mp4'

            # Create the ffmpeg command for the current clip
            ffmpeg_command = [
                'ffmpeg', '-i', video_path, '-ss', start_time, '-to', str(boundary), '-c', 'copy',
                os.path.join(OUTPUT_DIRECTORY, clip_output_filename)
            ]
            subprocess.run(ffmpeg_command)

            # Update the start time for the next clip
            start_time = str(boundary)

        # Handle the last part of the video (from the last boundary to the end)
        last_clip_output_filename = f'{output_filename}_part{len(split_boundaries) + 1}.mp4'
        ffmpeg_command = [
            'ffmpeg', '-i', video_path, '-ss', start_time, '-c', 'copy',
            os.path.join(OUTPUT_DIRECTORY, last_clip_output_filename)
        ]
        subprocess.run(ffmpeg_command)


# Mix audio with video
def mix_audio(video_path, audio_path, output_path):
    command = f'ffmpeg -i {video_path} -i {audio_path} -c:v copy -c:a aac -strict experimental {output_path}'
    subprocess.call(command, shell=True)


def load_video(file_path):
    video = cv2.VideoCapture(file_path)
    return video


if __name__ == '__main__':
    app.run()
