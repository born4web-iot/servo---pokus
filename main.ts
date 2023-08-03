input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(45)
})
function Uhel_0_cstupnu () {
    basic.showString("0")
    servos.P0.setAngle(0)
    basic.pause(1000)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(135)
})
function uhel_90_stupnu () {
    basic.showString("1")
    servos.P0.setAngle(90)
    basic.pause(1000)
    basic.clearScreen()
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    servos.P0.setAngle(90)
})
basic.showIcon(IconNames.Happy)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
	
})
