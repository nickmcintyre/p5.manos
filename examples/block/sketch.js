let Engine;
let World;
let Bodies;
let Mouse;
let MouseConstraint;
let engine;
let block;

function setup() {
  let c = createCanvas(640, 360);
  let m = createMatter();
  rectMode(CENTER);
  Engine = m.Engine;
  Render = m.Render;
  World = m.World;
  Bodies = m.Bodies;
  Mouse = m.Mouse;
  MouseConstraint = m.MouseConstraint;

  engine = Engine.create();
  engine.world.gravity.y = 0;

  // add bodies
  block = Bodies.rectangle(width/2, height/2, 80, 80, { frictionAir: 1 });
  World.add(engine.world,[
    block,
    // walls
    Bodies.rectangle(width/2, 1, width, 1, { isStatic: true }),
    Bodies.rectangle(width-1, height/2, 1, height, { isStatic: true }),
    Bodies.rectangle(width/2, height-1, width, 1, { isStatic: true }),
    Bodies.rectangle(1, height/2, 1, height, { isStatic: true }),
  ]);

  // add mouse control
  let mouse = Mouse.create(c.elt);
  let mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });
  mouseConstraint.mouse.pixelRatio = pixelDensity();
  World.add(engine.world, mouseConstraint);

  Engine.run(engine);
}

function draw() {
  background(220);
  noStroke();

  let vertices = block.vertices;
  beginShape();
  fill(255);
  for (let i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape();
}
