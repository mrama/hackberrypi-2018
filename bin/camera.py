from time import sleep
import picamera

def range(start, end, step):
	while start <= end:
		yield start
		start += step

with picamera.PiCamera() as camera:
	camera.start_recording('video.mp4')
	for x in range(1, 60, 0.5):
		sleep(5)
	camera.stop_recording()
	
