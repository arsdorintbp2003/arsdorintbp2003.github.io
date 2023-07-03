import os
import ffmpeg
from flask import Flask, render_template, request, send_file

app = Flask(__name__)

# Directory for uploaded files
UPLOAD_DIRECTORY = 'uploaded_files'

# Create the upload directory if it doesn't exist
if not os.path.exists(UPLOAD_DIRECTORY):
    os.makedirs(UPLOAD_DIRECTORY, exist_ok=True)


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

    if edit_option == 'cut':
        start_time = request.form['start_time']
        end_time = request.form.get('end_time')
        uploaded_file = request.files['video']
        file_path = os.path.join(UPLOAD_DIRECTORY, uploaded_file.filename)
        uploaded_file.save(file_path)
        trim_video(file_path, edited_file, start_time, end_time)
        os.remove(file_path)

    elif edit_option == 'join':
        join_files = request.files.getlist('join_files')
        join_video_files(join_files, edited_file)

    elif edit_option == 'split':
        split_start_times = request.form.getlist('split_start_time[]')
        split_end_times = request.form.getlist('split_end_time[]')
        uploaded_file = request.files['video']
        file_path = os.path.join(UPLOAD_DIRECTORY, uploaded_file.filename)
        uploaded_file.save(file_path)
        split_video_files(file_path, split_start_times, split_end_times, edited_file)
        os.remove(file_path)

    elif edit_option == 'audio_mixing':
        audio_file = request.files['audio_file']
        uploaded_file = request.files['audio_mixing_file']
        video_path = os.path.join(UPLOAD_DIRECTORY, uploaded_file.filename)
        audio_path = os.path.join(UPLOAD_DIRECTORY, audio_file.filename)
        uploaded_file.save(video_path)
        mix_audio(video_path, audio_path, edited_file)
        os.remove(video_path)
        os.remove(audio_path)

    # Return the processed video for download
    return send_file(edited_file, as_attachment=True)


# Trim video
def trim_video(input_file, output_file, start_time, end_time):
    ffmpeg.input(input_file, ss=start_time, to=end_time).output(output_file, c='copy').run()


# Join videos
def join_video_files(input_files, output_file):
    file_paths = []

    # Save file paths
    for file in input_files:
        file_path = os.path.join(UPLOAD_DIRECTORY, file.filename)
        file.save(file_path)
        file_paths.append(file_path)

    # Concatenate videos
    input_streams = []
    for file_path in file_paths:
        input_streams.append(ffmpeg.input(file_path))

    joined = ffmpeg.concat(*input_streams, v=1, a=1).node

    # Merge audio and video streams
    output_args = ffmpeg.output(joined[0], joined[1], output_file)
    output_args.run()

    # Clean up temporary files
    for file_path in file_paths:
        os.remove(file_path)


# Split video
def split_video_files(input_file, start_times, end_times, output_file):
    input_args = ffmpeg.input(input_file)
    for i in range(len(start_times)):
        start_time = start_times[i]
        end_time = end_times[i]
        output_filename = f'split_video{i+1}.mp4'
        ffmpeg.output(input_args, output_filename, ss=start_time, t=end_time, c='copy').run()
    ffmpeg.input(f'split_video*.mp4', pattern_type='glob', f='concat').output(output_file, c='copy').run()
    # Clean up split video files
    for i in range(len(start_times)):
        os.remove(f'split_video{i+1}.mp4')


# Mix audio with video
def mix_audio(video_file, audio_file, output_file):
    video_input = ffmpeg.input(video_file)
    audio_input = ffmpeg.input(audio_file)

    output_args = ffmpeg.output(video_input, audio_input, output_file, c='copy', map=['0:v', '1:a'])
    try:
        output_args.run(overwrite_output=True, capture_stderr=True)
    except ffmpeg.Error as e:
        print(e.stderr)
        raise e


'''
# Join videos
def join_video_files(input_files, output_file):
    file_paths = []
    for file in input_files:
        file_path = os.path.join(UPLOAD_DIRECTORY, file.filename)
        file.save(file_path)
        file_paths.append(file_path)

    inputs = []
    for file_path in file_paths:
        inputs.append(ffmpeg.input(file_path))

    joined = ffmpeg.concat(*inputs, v=1, a=1).node
    output_args = ffmpeg.output(joined['v'], joined['a'], output_file)
    output_args.run()

    # Clean up temporary files
    for file_path in file_paths:
        os.remove(file_path)
'''

if __name__ == '__main__':
    app.run()
