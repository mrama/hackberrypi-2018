import picamera
from time import sleep

camera = picamera.PiCamera()

camera.start_preview()
while True:
	for i in range(5):
    		sleep(1);
    		camera.capture("/home/pi/hackberrypi-2018/hackathon/pictures/image-" + str(i) + ".jpg");

camera.stop_preview()
