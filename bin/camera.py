from time import sleep
import picamera

destination = '/bin/videos'

def get_file_name():
	reutnr datetime.datetime.now().strftime("%m-%d_%H.%M.%S.mp4")

def range(start, end, step):
	while start <= end:
		yield start
		start += step

with picamera.PiCamera() as camera:
	camera.start_preview()
	camera.start_recording("%s%s" % destination, get_file_name())
	for x in range(1, 120, 0.5):
		sleep(5)
	camera.stop_recording()
	camera.stop_preview()
	
