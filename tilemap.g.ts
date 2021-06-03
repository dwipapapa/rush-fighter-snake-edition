// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101040101040401010101010101010101040404040404010101010101010101010404040404010101010101010101010104040401010101010101010101010101010401010101010101010101010202020202010101010101010101010102020202020202010101010101010101020202020202020201040101010101030202020202020202040404040303030302020202020202040404040403030303040402020202020204040403030303030404040202020202030403030303030304040402020202020303030303030303`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 . . 2 2 . . . . . . . 
. . . 2 2 2 2 2 2 . . . . . . . 
. . . 2 2 2 2 2 . . . . . . . . 
. . . 2 2 2 . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . 2 . . . . . . 
. . . . . . . . 2 2 2 2 . . . . 
. . . . . . . 2 2 2 2 2 . . . . 
2 2 . . . . . . 2 2 2 . . . . . 
2 2 2 . . . . . . 2 . . . . . . 
2 2 2 . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
