const r = require("raylib");

const windowWidth = 1000;
const windowHeight = 1000;

const car = {
    x: 300,
    y: 400,
    width: 300,
    height: 100,
    colour: {
        r:255,
        g:0,
        b:0,
        a:255
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
}

function draw() {
r.BeginDrawing();
r.ClearBackground(r.WHITE)

r.DrawRectangleRounded(car,0.5,8,car.colour);
r.DrawRectangle(car.x + 60,car.y - 60,180,60,car.colour);
r.DrawRectangle(car.x + 150,car.y - 50,75,40,r.SKYBLUE);
r.DrawRectangle(car.x + 75,car.y - 50,65,40,r.SKYBLUE);
r.DrawCircle(car.x + 25,car.y - 20, 5,r.RED);
r.DrawRectangle(car.x + 20,car.y - 20,10,21,r.SKYBLUE);
r.DrawCircle(car.x + 70,car.y + car.height,30,r.BLACK);
r.DrawCircle(car.x + 230,car.y + car.height,30,r.BLACK);

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


