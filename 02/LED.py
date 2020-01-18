from gpiozero import LED
from time import sleep

statusLed = LED(24)

statusLed.on()
sleep(2)
statusLed.off()
sleep(2)

statusLed.blink(0.1, 0.1)
sleep(2)
