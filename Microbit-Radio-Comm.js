input.onButtonPressed(Button.A, () => {
    radio.sendString("A A A")
})

input.onButtonPressed(Button.B, () => {
    radio.sendString("B B B")
})

radio.onDataPacketReceived(
    ({ receivedString }) => {
        basic.showString(receivedString)
    }
)

for (let i = 0; i < 5; i++) {
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(100)
    basic.showIcon(IconNames.Diamond)
    basic.pause(100)
    basic.showIcon(IconNames.Target)
    basic.pause(100)
}

basic.pause(500)
radio.setGroup(43)
basic.showIcon(IconNames.Heart)
basic.forever(() => {})