from time import sleep
import picamera
with picamera.PiCamera() as camera:
	camera.start_preview()
	sleep(1)
	camera.capture('/home/pi/Desktop/hackberrypi-2018/image1.jpg')
	camera.stop_preview
	
