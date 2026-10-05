const r = require("raylib");

const windowWidth = 1000;
const windowHeight = 1000;

const roundness = 1;
const segment = 100;

const button = {
        x: 100,
        y: 200,
        width: 400,
        height: 400,
        colour: {
        r: 255,
        g: 0,
        b: 0,
        a: 255,
    },
};

function running() {
    return !r.WindowShouldClose();
}

function setup() {
r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWidth, windowHeight, "vectors");
    r.SetTargetFPS(60);
}

function update() {
    // change the state
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK)
    r.DrawRectangleRounded(button,roundness,segment,button.colour);
    r.DrawRectangleRoundedLines(button,roundness,segment,30,r.WHITE);
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