const r = require("raylib");

const windowWidth = 1000;
const windowHeight = 1000;

const radius = 20

const leftPoint = {
  x: 400,
  y: 400,
};

const rightPoint = {
  x: 500,
  y: 500,
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
}

function draw() {
r.BeginDrawing();

r.ClearBackground(r.BLACK)
r.DrawCircleV(leftPoint,radius,r.RED);
r.DrawCircleV(rightPoint,radius,r.RED);
r.DrawLineV(leftPoint,rightPoint,r.WHITE);

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