for (let índex = 0; índex <= 4; índex++) {
    led.plot(0, índex)
    led.toggle(4, índex)
    led.plot(índex, 0)
    led.plot(índex, 4)
    basic.pause(500)
}
