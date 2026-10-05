const r = require("raylib")

const windowWidth = 1000;
const windowHeight = 1000;

const rectangle = { 
    x: 20 ,
    y: 40,
    width: 100,
    height: 100,
    colour : {
        r: 255,
        b: 255,
        g: 123,
        a: 255,
    }
}

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWidth, windowHeight, "vectors");
    r.SetTargetFPS(60);
    
}

function update() {

}

function draw() {
    a = r.GetFrameTime()
    r.BeginDrawing();
    r.ClearBackground(r.BLACK)

    r.DrawRectangleRec(rectangle,rectangle.colour);
    r.DrawRectangleLines(
        rectangle.x,
        rectangle.y,
        rectangle.width,
        rectangle.height,
        r.WHITE);
    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};