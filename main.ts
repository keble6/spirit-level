let reading = 0
basic.forever(function () {
    reading = input.acceleration(Dimension.X)
    if (reading > 20) {
        basic.showString("R")
    } else if (reading < -20) {
        basic.showString("L")
    } else {
        basic.showString("-")
    }
})
