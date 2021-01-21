function Tilemap () {
    scene.setTile(7, img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        f f f f f f f f f f f f f f f f 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 e 7 7 7 7 7 e e 7 7 7 7 7 e 7 
        7 e 7 7 7 7 e e e 7 7 7 e e e 7 
        7 e e 7 7 e e b e 7 7 7 e e d 7 
        7 b e e e e e e e e e 7 e e e 7 
        7 e e e d e e d e e e e e e e 7 
        7 d e e d e e e e e e e b e e 7 
        7 e e e e e b e e d e e e d e 7 
        7 e e b e e e e e e e e e e e 7 
        7 e e e e e e b e e e e e e e 7 
        7 d e b e d e e e e e e e e e 7 
        7 e e e e e e e e e e d e e b 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `, true)
    scene.placeOnRandomTile(mySprite, 5)
    scene.setTile(14, img`
        e e e e e e e b e e e e e e e b 
        e e b e e e e e e e b e e b e e 
        c e e e e c e e e e e e e e e b 
        e e d e e e e e c e e e d e e c 
        e e e e e e e e e e e e e e e e 
        b e e c e e d e e e d e e e e e 
        e e e e e e e b e e e e e e d e 
        e b e c e e e e e e e e c e e b 
        e e e e d e e d e e d e e e e e 
        e d e e d e e e e e e e b e e e 
        e e e e e e b e e d e e e d e c 
        d e e b e e e e e e e e d e e e 
        e e e e e e e b e e e e e e e e 
        e d e b e d e e e e c e e e e e 
        e e e e e e e e e e e d e e b e 
        c e e e e e e d e e e e e e e c 
        `, true)
    scene.setTile(9, img`
        c c c c c c c c c c c c c c c c 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 6 6 6 8 8 8 6 6 6 6 8 8 8 
        6 6 8 8 8 6 6 6 6 6 6 8 8 8 8 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        9 9 6 6 6 6 6 9 9 9 9 6 6 6 9 9 
        6 6 6 6 9 9 9 6 6 6 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, true)
    scene.setTile(4, img`
        . 7 7 7 7 7 7 7 b . . . . . . . 
        . 7 6 6 7 8 8 7 b . . . . . . . 
        . 7 6 7 8 8 7 9 b . . . . . . . 
        . 7 7 8 8 8 7 9 b . . . . . . . 
        . 7 8 8 8 7 7 7 b . . . . . . . 
        . . 7 7 7 . . . b . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . d d d d d d d d d d d d d d . 
        . d d d d d d d d d d d d d d . 
        . d d d d d d d d d d d d d d . 
        `, true)
    scene.setTile(5, img`
        6 6 6 6 f f f f f f f f f 6 6 6 
        6 6 6 f c c c c c c c c c f 6 6 
        6 6 f c c c c c c c c c c c f 6 
        6 6 f c c c c c c c c c c c f 6 
        6 6 f c c c c c c c c c c c f 6 
        6 6 f c c c c c c c c c c c f 6 
        6 6 f c c c c c c c c c c c f 6 
        6 f c c c c c c c c c c c c c f 
        6 f c c c c c c c c c c c c c f 
        6 f c b b c c c c c c c c c c f 
        6 f c b b c c c c c c c c c c f 
        6 f f c c c c c c c c c c f f 6 
        6 f c c c c c c c c c c c c f 6 
        6 f c c c c c c c c c c c c f 6 
        6 f c c c c c c c c c c c c f 6 
        6 f c c c c c c c c c c c f 6 6 
        `, false)
    scene.setTile(1, img`
        e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 
        e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
        e e e e e e e e e e e e e e e e 
        e 4 e 4 4 4 4 4 4 4 4 4 4 e 4 e 
        e 4 e e e e e e e e e e e e 4 e 
        e 4 e 3 3 3 3 3 3 3 3 3 3 e 4 e 
        e 4 e 4 4 4 4 4 4 4 4 4 4 e 4 e 
        e 4 e e e e e e e e e e e e 4 e 
        e 4 e 3 3 3 3 3 3 3 3 3 3 e 4 e 
        e 4 e 4 4 4 4 4 4 4 4 4 4 e 4 e 
        e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 
        e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
        e e e e e e e e e e e e e e e e 
        e e c c c c c c c c c c c c e e 
        e e c c c c c c c c c c c c e e 
        e e e e e e e e e e e e e e e e 
        `, true)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ay = -70
    music.jumpUp.playUntilDone()
    mySprite.ay = 100
    music.jumpDown.playUntilDone()
})
function Start () {
    game.setDialogCursor(img`
        f f f f f f f f f f f f f 
        d d d d d d f f f f f f f 
        d f f f f d f f f f f f f 
        d f f f f d f f f f f f f 
        d f f f f d f f f f f f f 
        d f f f f d f f f f f f f 
        d d d d d d f d f f f f f 
        f f f f f f f d f f f f f 
        f f f f f f f d f f f f f 
        f f f f f f f d f f d d d 
        f f f f f f f d d d d f f 
        f f f f f f f d f f f d f 
        f f f f f f f d f f f f d 
        `)
    game.splash("platFORM")
    mySprite = sprites.create(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.Player)
    scene.cameraFollowSprite(mySprite)
    mySprite.setVelocity(0, 10)
    mySprite.ay = 300
    info.setScore(0)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(-70, 0)
    mySprite.setImage(img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(0, 0)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(0, 0)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(70, 0)
    mySprite.setImage(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `)
})
scene.onHitTile(SpriteKind.Player, 9, function (sprite) {
    game.over(false, effects.dissolve)
})
scene.onHitTile(SpriteKind.Player, 4, function (sprite) {
    jump += 1
    scene.placeOnRandomTile(mySprite, 5)
    if (jump == 0) {
        game.splash("first level")
    }
    if (jump == 1) {
        game.splash("Second level")
    }
    if (jump == 2) {
        game.splash("THIRD LEVEL")
    }
    if (jump == 3) {
        game.splash("FOURTH LEVEL")
    }
    if (jump == 4) {
        game.splash("Prepare to have a bad time.....")
    }
    if (jump == 5) {
        game.splash("YOU WON!")
        pause(1000)
        game.over(true, effects.confetti)
    }
})
let mySprite: Sprite = null
let jump = 0
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999991199999919999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999991119999919999999999991999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999911111999911999999999911199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999111111199911999999999911199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999191111999111999999999111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999911111999111199999999111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999111111199911999999999911119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999911119119911199999991111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999111111999111999999999111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999991191111199111199999991111191199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999911111111111199999911111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999111111eeeeeeeeeeeee99111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999991999999999911111ee777777777777779911111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999991999999999999999999
    9999999999991119999999999911e777777777777777777e1999999999999999999999999999999999999999999999999999999999999999999999999999999999999991999911999999999999999999
    999999999999119999999999ddee77777777777777777777ed99999999999999999999999999999999991999999999999999999999999999999999999999999999999991199911999999999999999999
    99999999999111999999999dde77777777777777777777777ed9999999999999999999999999999999991199999999999999999999999999999999999999999999999991199111999999999999999999
    99999999991111199999911ee7777777777777777777777777ed999999999999999999999999999999991199999999999999999999999999999999999999999999199911119111119999999999999999
    9999999999911199999111e7777777777777777777777777777ed99999999999999999999999999999911119999999999999999999999999999999999999999991119911119911999999999999999999
    99999999999911199911ee777777777777777777777777777777ee9999999999999999999999999999911119999199999999999999999999999999999999999991119991199111111999999999999999
    9999999999111199111e7777777777777777777777777777777777e999999999999999999999119999991199999199999999999999999999999999999999999911119111111111999999999199999999
    99999999999111111ee777777777777777777777777777777777777e99999999999999999991119999111111999119999999999999999999999999999999999999111911119991199999999199999999
    9999999999991111e777777777777777777777777777777777777777e9999999999999999911119999911119999119999999999999999999999999999999999991119911111991999999991111999999
    99999999999911ee77777777777777777777777777777777777777777e999999999999999999111999911111991119999999999999199999999999999999999111111111111191999999999199999999
    9999999999911e77777777777777777777777777777777777777777777e99999999999999911111191111111191111999999999991199999999999999999999911111111111111111999911119999999
    9999999999dee7777777777777777777777777777777777777777777777e999999999999911111191111111111911999999999999111999999999999919999911111e9eeeeeee1111119991119999999
    99999999dde7777777777777777777777777777777777777777777777777e999999999999991111119911119999111999999999911111999999999999199991111ee777777777eeeeee7e91111199999
    9999999dee777777777777777777777777777777777777777777777777777e9999999999991111119911111199111999999999911111119999999999911999991e7777777777777777777ee111999999
    999999de777777777777777777777777777777777777777777777777777777e9999999999111111111111111111111119999999191111999999999999119999de7777777777777777777777e19999999
    99999ee77777777777777777777777777777777777777777777777777777777e999999999999111eeeeeeeeeeeeeeeeeeee999991111199999999999111999ee777777777777777777777777e9999999
    999de77777777777777777777777777777777777777777777777777777777777ee999999999111e7777777777777777777eed991111111999999999991999e777777777777777777777777777ee99999
    99ee77777777777777777777777777777777777777777777777777777777777779e999999111ee7777777777777777777777eed911119199999999991111e977777777777777777777777777777e9999
    9e77777777777777777777777777777777777777777777777777777777777777777e999911ee77777777777777777777777777ee111119999999999991ee97777777777777777777777777777777ed99
    77777777777777777777777777777777777777777777777777777777777777777777e9911e777777777777777777777777777777ee1111999999999dde77777777777777777777777777777777777eed
    777777777777777777777777777777777777777777777777777777777777777777777edee777777777777777777777777777777777ee119999999999e77777777777777777777777777777777777777e
    7777777777777777777777777777777777777777777777777777777777777777777777e7777777777777777777777777777777777777eed9999999ee9777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ee99eeee977777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ee99e9777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
let maps = [img`
    ..................................................
    ..................................................
    ................................d.................
    ..................................................
    .5................................................
    7777777777777..7777....7777.....................4.
    eeeeeeeeeeee....ee......ee...777777...777777777777
    999999999999999999999999999999999999999eeeeeeeeeee
    `, img`
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ...................................77777777777....
    .5..................................eeeeeeeee.....
    777777777777777777.....eeee..........eeeeeee......
    eeeeeeeeeeeeeeee9999999eeee99999999999eeeee.......
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.......
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.......
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...............
    eeeeeeeeeeeeeeeeeeeee.............................
    eeeeeee...........................................
    ..................................................
    ..................................................
    ......................................e...........
    .4................................................
    eee...............................................
    eeeeeeeeeeeeeeeeee................................
    eeeeeeeeeeeeeeeeeeee999999999eee99999999999eee9999
    `, img`
    777777777777777777777777777777eeeeeeeeeeeeeeeeeeee
    eeeeeeeee7777777eeee777777eeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeee.eee...eeeeeeeee.eeee..
    eee...........eeeeeee........ee......eeee.........
    e.....................................ee..........
    ..................................................
    .5..............................e.................
    eeeee...eee.e.e.eeee...eeee..e..e.ee.e..........4.
    999999999999999999999999999999999999999999eeeeeeee
    `, img`
    ..................................................
    ..................................................
    ..................................................
    .....1...11....11...111...........................
    ....11...11....11...111...........................
    5..111...11....11...111.........................4.
    777777...77....77...777.111111.....111...1...11111
    eeeeee999ee9999ee999eee999999999999999999999999999
    `, img`
    ....999999999.....999999999999991111111111........
    ..................................................
    ..............................................9...
    .................77777777..........7777777..9191.4
    .5.1111.........777777777..........7777777779.9.77
    77799999999977777777777779999777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeee77eeeeeeeeeeeeeeeeeeeeee
    11111111111111111111111111111111111111111111111111
    `]
Start()
Tilemap()
if (jump == 0) {
    game.splash("first level")
}
game.onUpdate(function () {
    scene.setTileMap(maps[jump])
})
