function luz () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    for (let index = 0; index < 10; index++) {
        luces += -25
        led.setBrightness(luces)
        basic.pause(40)
    }
    basic.clearScreen()
    luces = 255
    led.setBrightness(luces)
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("luz")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "luz") {
        basic.pause(randint(50, 350))
        luz()
        if (randint(0, 9) == 0) {
            basic.pause(500)
            radio.sendString("luz")
        }
    }
})
let luces = 0
radio.setGroup(17)
luces = 255
