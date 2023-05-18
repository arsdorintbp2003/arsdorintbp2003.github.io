from flask import Flask, render_template, request, send_file
import os
import subprocess

app = Flask(__name__)

# Home page
@app.route('/')
def home():
    return render_template('index.html')

# Video editing route
@app.route('/edit', methods=['POST'])
def edit_video():
    # Get uploaded file
    uploaded_file = request.files['video']

    # Save uploaded file to a temporary location
    uploaded_file.save('uploaded_video.mp4')

    # Perform video editing operations (e.g., trimming)
    trimmed_file = 'trimmed_video.mp4'
    trim_video('uploaded_video.mp4', trimmed_file, '00:00:10', '00:01:30')

    # Remove uploaded file
    os.remove('uploaded_video.mp4')

    # Return the processed video for download
    return send_file(trimmed_file, as_attachment=True)

# Trim video
def trim_video(input_file, output_file, start_time, end_time):
    cmd = ['ffmpeg', '-i', input_file, '-ss', start_time, '-to', end_time, '-c', 'copy', output_file]
    subprocess.run(cmd)

if __name__ == '__main__':
    app.run()
