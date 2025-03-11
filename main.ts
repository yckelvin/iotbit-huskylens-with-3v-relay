let id2 = 0
basic.showNumber(0)
huskylens.initI2c()
basic.showNumber(1)
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.showNumber(2)
OLED.init(128, 64)
basic.showNumber(3)
let name = [
"Anson Lo",
"Lokman",
"Edan Lui",
"Anson Kong"
]
basic.showIcon(IconNames.Yes)
OLED.writeStringNewLine("Ready!")
basic.forever(function () {
    huskylens.request()
    id2 = huskylens.readBox_s(Content3.ID)
    if (id2 > 2) {
        OLED.clear()
        OLED.writeStringNewLine("" + id2 + ": " + name[id2 - 1])
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
