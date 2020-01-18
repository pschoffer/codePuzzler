from gpiozero import Motor
from time import sleep

motorLeft = Motor(4, 3)
motorRight = Motor(16, 20)

motorLeft.forward()
motorRight.forward()

sleep(1)

motorLeft.stop()
motorRight.stop()

sleep(99)
