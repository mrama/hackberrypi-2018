import picamera
from time import sleep

camera = picamera.PiCamera()

camera.start_preview()
for i in range(0, 120, 1):
    sleep(1);
    camera.capture("/home/pi/hackberrypi-2018/hackathon/pictures/image-" + str(i) + ".jpg");
camera.stop_preview()
