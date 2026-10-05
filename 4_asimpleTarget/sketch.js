const r = require("raylib");

const windowWidth = 1000;
const windowHeight = 1000; 

const target = {
        x: 200,
        y: 200,
};

const radius ={ 
    a: 30,
    b: 20,
    c: 10,
};
const colour1 = {
        r: 255,
        g: 0,
        b: 0,
        a: 255,
};

const colour2 = {
        r: 0,
        g: 255,
        b: 0,
        a: 100,
};

const colour3 = {
        r: 0,
        g: 0,
        b: 255,
        a: 255,
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
r.ClearBackground(r.BLACK);

r.DrawCircleV(target,radius.a,colour1);
r.DrawCircleV(target,radius.b,colour2);
r.DrawCircleV(target,radius.c,colour3);

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
}

