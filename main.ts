input.onButtonPressed(Button.A, function () {
    Number2 += -1
})
input.onButtonPressed(Button.B, function () {
    Number2 += 1
})
let Number2 = 1
basic.forever(function () {
    if (Number2 < 1) {
        Number2 = 20
    }
})
basic.forever(function () {
    if (Number2 == 10) {
        basic.showLeds(`
            . # . # .
            # # # . #
            . # # . #
            . # # . #
            . # . # .
            `)
    } else if (Number2 == 11) {
        basic.showLeds(`
            . # . # .
            # # # # .
            . # . # .
            . # . # .
            . # . # .
            `)
    } else if (Number2 == 12) {
        basic.showLeds(`
            . # . # .
            # # # . #
            . # . # .
            . # # . .
            . # # # #
            `)
    } else if (Number2 == 13) {
        basic.showLeds(`
            . # # # .
            # # . . #
            . # . # #
            . # . . #
            . # # # .
            `)
    } else if (Number2 == 14) {
        basic.showLeds(`
            . # # . .
            # # # # .
            . # # # #
            . # . # .
            . # . # .
            `)
    } else if (Number2 == 15) {
        basic.showLeds(`
            . # # # #
            # # # . .
            . # # # .
            . # . . #
            . # # # .
            `)
    } else if (Number2 == 16) {
        basic.showLeds(`
            . # . # #
            # # # . .
            . # # # .
            . # # . #
            . # . # .
            `)
    } else if (Number2 == 17) {
        basic.showLeds(`
            . # # # #
            # # . . #
            . # . # .
            . # . # .
            . # . # .
            `)
    } else if (Number2 == 18) {
        basic.showLeds(`
            . # . # .
            # # # . #
            . # . # .
            . # # . #
            . # . # .
            `)
    } else if (Number2 == 19) {
        basic.showLeds(`
            . # . # .
            # # # . #
            . # . # #
            . # . . #
            . # . # .
            `)
    } else if (Number2 == 20) {
        basic.showLeds(`
            . # . # .
            # . # . #
            . # # . #
            # . # . #
            # # # # .
            `)
    } else if (Number2 >= 21) {
        Number2 = 1
    }
})
basic.forever(function () {
    if (Number2 == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else if (Number2 == 2) {
        basic.showLeds(`
            # # # # .
            . . . . #
            . # # # .
            # . . . .
            # # # # #
            `)
    } else if (Number2 == 3) {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . # # .
            # . . . #
            . # # # .
            `)
    } else if (Number2 == 4) {
        basic.showLeds(`
            . . # # .
            . # . # .
            # . . # .
            # # # # #
            . . . # .
            `)
    } else if (Number2 == 5) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # .
            . . . . #
            # # # # .
            `)
    } else if (Number2 == 6) {
        basic.showLeds(`
            . # # # .
            # . . . .
            # # # # .
            # . . . #
            . # # # .
            `)
    } else if (Number2 == 7) {
        basic.showLeds(`
            # # # # #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
    } else if (Number2 == 8) {
        basic.showLeds(`
            . # # # .
            # . . . #
            . # # # .
            # . . . #
            . # # # .
            `)
    } else if (Number2 == 9) {
        basic.showLeds(`
            . # # # .
            # . . . #
            . # # # #
            . . . . #
            . # # # .
            `)
    }
})
