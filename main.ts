input.onButtonPressed(Button.A, function () {
    music.setTempo(125)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
    100,
    0
    )
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2820, quest_Time_Units_Enum.Milliseconds)
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
    0,
    100
    )
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2820, quest_Time_Units_Enum.Milliseconds)
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
    0,
    0
    )
    basic.showString("Happy Birthday!")
    basic.pause(0)
})
input.onGesture(Gesture.FreeFall, function () {
    music.setVolume(31)
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.LogoUp, function () {
    for (let index = 0; index < 4; index++) {
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
        100,
        100
        )
        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(1, quest_Time_Units_Enum.Seconds)
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
        0,
        0
        )
        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(1, quest_Time_Units_Enum.Seconds)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.No)
    music.stopMelody(MelodyStopOptions.All)
    music.setVolume(127)
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
    0,
    0,
    quest_Turn_Duration_Enum.msec_20,
    quest_Debug_Show_Enum.Off
    )
    basic.clearScreen()
})
quest_Note_1.quest_Show_String_For_Note_Small_Func(
"2-Sequence Animation Validates New-Start"
)
basic.showIcon(IconNames.Heart)
quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
basic.showIcon(IconNames.Happy)
quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
quest_Note_1.quest_Show_String_For_Note_Big_Func(
"Below, Setup Code for Teacher:"
)
quest_Note_1.quest_Show_String_For_Note_Small_Func(
"micro:bit's LED Display is upside-down on bot"
)
display.rotateTo(display.Direction.UpsideDown)
input.calibrateCompass()
quest_Note_1.quest_Show_String_For_Note_Big_Func(
"Below, Setup Code for Student:"
)
basic.forever(function () {
    while (input.isGesture(Gesture.ScreenDown)) {
        music.setTempo(60)
        basic.showIcon(IconNames.Heart)
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.clearScreen()
    }
    while (input.buttonIsPressed(Button.B)) {
        display.rotateTo(display.Direction.UpsideDown)
        if (input.compassHeading() <= 20) {
            basic.showArrow(ArrowNames.North)
        } else if (input.compassHeading() <= 60) {
            basic.showArrow(ArrowNames.NorthEast)
        } else if (input.compassHeading() <= 120) {
            basic.showArrow(ArrowNames.East)
        } else if (input.compassHeading() <= 160) {
            basic.showArrow(ArrowNames.SouthEast)
        } else if (input.compassHeading() <= 200) {
            basic.showArrow(ArrowNames.South)
        } else if (input.compassHeading() <= 220) {
            basic.showArrow(ArrowNames.SouthWest)
        } else if (input.compassHeading() <= 260) {
            basic.showArrow(ArrowNames.West)
        } else if (input.compassHeading() <= 300) {
            basic.showArrow(ArrowNames.NorthWest)
        } else {
            basic.showArrow(ArrowNames.North)
        }
        basic.clearScreen()
    }
})
basic.forever(function () {
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "Ver 0.1.2: 25-0401-1930"
    )
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "©️ 2025 Quest Institute. All rights reserved."
    )
})
