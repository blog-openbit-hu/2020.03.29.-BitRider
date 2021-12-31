let p = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [3, 4], [2, 4], [1, 4], [0, 4], [0, 3], [0, 2], [0, 1]]
let b = [0, 64, 128, 255, 128, 64]
let i = 0

basic.forever(function () {
    for (let j = 0; j < b.length; j++) {
        led.plotBrightness(p[(i + j) % p.length][0], p[(i + j) % p.length][1], b[j])
    }
    basic.pause(1000 / p.length)
    i++
})

let cp = 0
basic.forever(function () {
    basic.pause(500)
    led.plotBrightness(2, 2, cp ^= 255)
})

