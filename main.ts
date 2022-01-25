namespace SpriteKind {
    export const goal = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.goal, function (sprite, otherSprite) {
    if (!(complete)) {
        complete = true
        music.beamUp.play()
        animation.runImageAnimation(
        otherSprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 3 3 3 3 3 2 . . . . 
            . . . . 3 1 1 1 1 1 1 1 3 . . . 
            . . . . 1 1 1 1 1 1 1 1 1 . . . 
            . . . 2 1 1 1 1 1 1 1 1 1 2 . . 
            . . . 2 3 1 1 1 1 1 1 3 3 2 . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 4 4 4 4 4 . . . . . . 
            . . . 4 4 4 5 5 5 d 4 4 4 4 . . 
            . . 4 d 5 d 5 5 5 d d d 4 4 . . 
            . . 4 5 5 1 1 1 d d 5 5 5 4 . . 
            . 4 5 5 5 1 1 1 5 1 1 5 5 4 4 . 
            . 4 d d 1 1 5 5 5 1 1 5 5 d 4 . 
            . 4 5 5 1 1 5 1 1 5 5 d d d 4 . 
            . 2 5 5 5 d 1 1 1 5 1 1 5 5 2 . 
            . 2 d 5 5 d 1 1 1 5 1 1 5 5 2 . 
            . . 2 4 d d 5 5 5 5 d d 5 4 . . 
            . . . 2 2 4 d 5 5 d d 4 4 . . . 
            . . 2 2 2 2 2 4 4 4 2 2 2 . . . 
            . . . 2 2 4 4 4 4 4 4 2 2 . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            `,img`
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 4 4 4 5 5 4 4 4 2 2 2 . 
            . 2 2 5 5 d 4 5 5 5 4 4 4 4 2 . 
            . 2 4 5 5 5 5 d 5 5 5 4 5 4 2 2 
            . 2 4 d d 5 5 5 5 5 5 d 4 4 4 2 
            2 4 5 5 d 5 5 5 d d d 5 5 5 4 4 
            2 4 5 5 4 4 4 d 5 5 d 5 5 5 4 4 
            4 4 4 4 . . 2 4 5 5 . . 4 4 4 4 
            . . b b b b 2 4 4 2 b b b b . . 
            . b d d d d 2 4 4 2 d d d d b . 
            b d d b b b 2 4 4 2 b b b d d b 
            b d d b b b b b b b b b b d d b 
            b b d 1 1 3 1 1 d 1 d 1 1 d b b 
            . . b b d d 1 1 3 d d 1 b b . . 
            . . 2 2 4 4 4 4 4 4 4 4 2 2 . . 
            . . . 2 2 4 4 4 4 4 2 2 2 . . . 
            `,img`
            . . . . . . . . b b . . . . . . 
            . . . . . . . . b b . . . . . . 
            . . . b b b . . . . . . . . . . 
            . . b d d b . . . . . . . b b . 
            . b d d d b . . . . . . b d d b 
            . b d d b . . . . b b . b d d b 
            . b b b . . . . . b b . . b b . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . b b b d d d d d d b b b . . 
            . b d c c c b b b b c c d d b . 
            b d d c b . . . . . b c c d d b 
            c d d b b . . . . . . b c d d c 
            c b d d d b b . . . . b d d c c 
            . c c b d d d d b . c c c c c c 
            . . . c c c c c c . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        false
        )
    }
    pause(2000)
    game.over(true)
})
let complete = false
complete = false
let hero = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(hero)
controller.moveSprite(hero)
tiles.setTilemap(tilemap`level1`)
let orb = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.goal)
orb.setPosition(466, 76)
animation.runImageAnimation(
orb,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 8 6 7 7 7 6 . . . . 
    . . . 6 8 8 7 7 7 7 7 7 7 . . . 
    . . 6 8 8 7 7 7 7 7 7 7 7 6 . . 
    . . 6 8 7 7 8 8 8 7 7 7 7 6 . . 
    . 6 8 8 8 8 8 8 8 8 7 7 7 6 6 . 
    . 6 8 8 8 6 6 6 8 8 8 8 6 5 6 . 
    . 6 8 8 6 6 6 6 6 8 8 8 6 5 6 . 
    . 6 8 8 6 6 6 6 6 8 8 8 6 6 6 . 
    . . 6 8 6 6 6 6 6 8 1 1 6 6 . . 
    . . 6 8 8 6 6 6 6 5 1 1 6 6 . . 
    . . . 6 6 8 6 6 5 5 5 6 6 . . . 
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . 6 6 8 6 6 6 8 8 7 8 8 6 . . 
    . . 6 8 6 6 6 6 6 8 7 7 8 6 . . 
    . 6 6 6 6 6 6 6 6 8 8 7 7 8 6 . 
    . 6 6 6 6 6 6 6 6 8 8 7 7 6 6 . 
    . 6 6 5 6 6 6 6 8 8 8 7 7 7 6 . 
    . 6 6 5 5 8 8 8 8 8 7 7 7 7 6 . 
    . . 6 5 1 1 8 8 8 7 7 7 7 7 . . 
    . . 6 6 1 1 8 8 8 7 7 7 7 6 . . 
    . . . 6 6 6 6 6 6 7 7 7 7 . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . . 6 6 5 5 5 6 6 8 6 6 . . . 
    . . 6 6 1 1 5 6 6 6 6 8 8 6 . . 
    . . 6 6 1 1 8 6 6 6 6 6 8 6 . . 
    . 6 6 6 8 8 8 6 6 6 6 6 8 8 6 . 
    . 6 5 6 8 8 8 6 6 6 6 6 8 8 6 . 
    . 6 5 6 8 8 8 8 6 6 6 8 8 8 6 . 
    . 6 6 7 7 7 8 8 8 8 8 8 8 8 6 . 
    . . 6 7 7 7 7 8 8 8 7 7 8 6 . . 
    . . 6 7 7 7 7 7 7 7 7 8 8 6 . . 
    . . . 7 7 7 7 7 7 7 8 8 6 . . . 
    . . . . 6 7 7 7 6 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
100,
true
)
game.onUpdate(function () {
    if (controller.right.isPressed()) {
        hero.setImage(img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            f f . c d b e e d d c d d d d c 
            f e f . c f e e d d d c c c c c 
            f e f . . f f e e d d d d d f . 
            f e f . f e e e e f f f f f . . 
            f e f f e e e e e e e f . . . . 
            . f f e e e e f e f f e f . . . 
            . . f e e e e f e f f e f . . . 
            . . . f e f f b d f b d f . . . 
            . . . f d b b d d c d d f . . . 
            . . . f f f f f f f f f . . . . 
            `)
    } else if (controller.left.isPressed()) {
        hero.setImage(img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . f f 
            c c c c c d d d e e f c . f e f 
            . f d d d d d e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f e f 
            . . . f e f f e f e e e e f f . 
            . . . f e f f e f e e e e f . . 
            . . . f d b f d b f f e f . . . 
            . . . f d d c d d b b d f . . . 
            . . . . f f f f f f f f f . . . 
            `)
    }
})
