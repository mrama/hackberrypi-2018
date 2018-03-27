from time import sleep
import picamera

destination = '/bin/videos'

def get_file_name(i):
    return ("video-" + str(i) + ".mp4")

def range(start, end, step):
    while start <= end:
        yield start
        start += step

with picamera.PiCamera() as camera:
    camera.start_preview()
    while True:
        for x in range(1, 120, 0.5):
            camera.start_recording("%s%s" % destination, get_file_name(x))
            sleep(x)
            camera.stop_recording()
    camera.stop_preview()
