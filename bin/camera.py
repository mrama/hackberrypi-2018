from time import sleep
import picamera

with picamera.PiCamera() as camera:
    camera.start_preview()
    while True:
        for x in range(30):
            camera.start_recording("/home/pi/hackberrypi-2018/bin/vids/vid-" + str(i) + ".mp4");
            sleep(5);
            camera.stop_recording()
    camera.stop_preview()
