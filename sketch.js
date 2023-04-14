let stringsArray = [
  "Hello",
  "World",
  "JavaScript",
  "Array",
  "String",
  "Code",
  "Programming",
  "Function",
  "Variable",
  "Loop",
  "Object",
  "Boolean",
  "Integer",
  "Float",
  "Null",
  "Undefined",
  "NaN",
  "Truthy",
  "Falsy",
  "Typeof",
  "Concatenate",
  "Slice",
  "Substring",
  "Replace",
  "Match",
  "Indexof",
  "Split",
  "Join",
  "Push",
  "Pop",
  "Shift",
  "Unshift",
  "Filter",
  "Map",
  "Reduce",
  "Sort",
  "Reverse",
  "ForEach",
  "Callback",
  "Arrow function",
  "Template literal",
  "Spread operator",
  "Destructuring assignment",
  "Rest parameter",
  "Promise",
  "Async",
  "Await",
  "Fetch",
  "Axios",
  "React",
  "Angular",
  "Vue",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "RESTful",
  "GraphQL",
  "Webpack",
  "Babel",
  "ES6",
  "ESLint",
  "Prettier",
  "Git",
  "GitHub",
  "Bitbucket",
  "Heroku",
  "Netlify",
  "Firebase",
  "AWS",
  "OAuth",
  "JSON",
  "XML",
  "API",
  "Webhook",
  "Responsive",
  "Mobile-first",
  "Accessibility",
  "SEO",
  "UI",
  "UX",
  "Wireframe",
  "Prototype",
  "Design system",
  "Atomic design",
  "Agile",
  "Scrum",
  "Kanban",
  "Waterfall",
  "Sprint",
  "User story",
  "Product backlog",
  "Sprint backlog",
  "Retrospective",
  "Stand-up",
  "Demo",
  "MVP",
  "ROI",
  "KPI",
];

let angle = 0
let size = 1
let growing = true;
let bg = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = 200;
  h = 200;
}

function draw() {  
    fill(random(0));
    noStroke()
    textSize(size+=growing ? 0.5 : -0.05);
    let word = stringsArray[round(random(0, stringsArray.length - 1))];
    let x = width / 2 + cos(angle) * angle * 10; // calculate x position based on angle
    let y = height / 2 + sin(angle) * angle * 10; // calculate y position based on angle
    push(); // save current canvas state
    translate(x, y); // move origin to x, y position
    rotate(angle); // rotate canvas
    text(word, 0, 0); // display word at origin
    let lineLength = 200;
    let startX = -lineLength / 2;
    let endX = lineLength / 2;
    let startY = 20;
    let endY = 20;
    stroke(random(256), random(256), random(256)); // generate a random color for the line
    line(startX, startY, endX, endY);
    pop(); // restore previous canvas state
    
    // modify angle and size based on background color
    if (bg === 255) {
      angle += 0.1; // increment angle for next word
      if (size < 50 && growing) {
        size += 0.05;
      } else {
        growing = false;
        size -= 0.05;
        if (size <= 1) {
          bg = 0; // switch background color to black
          angle = 0; // reset angle to 0
          size = 50; // set size to max value
          growing = true; // set growing to true
        }
      }
    } else {
      angle += 0.05; // increment angle for next word
      size -= 0.1; // decrement size for next word
      if (size <= 1) {
        noLoop(); // stop drawing when size is small enough
      }
    }
    
    stroke(bg);
}
