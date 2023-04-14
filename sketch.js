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

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = 200;
  h = 200;
}

function draw() {
  fill(random(256));
  textSize(size+=0.15);
  let word = stringsArray[round(random(0, stringsArray.length - 1))];
  let x = width / 2 + cos(angle) * angle * 10; // calculate x position based on angle
  let y = height / 2 + sin(angle) * angle * 10; // calculate y position based on angle
  push(); // save current canvas state
  translate(x, y); // move origin to x, y position
  rotate(angle); // rotate canvas
  text(word, 0, 0); // display word at origin
  pop(); // restore previous canvas state
  angle += 0.1; // increment angle for next word

//   text(
//     stringsArray[round(random(0, stringsArray.length - 1))],
//     round(random(0, width)),
//     round(random(0, height))
//   );
//   rotate(QUARTER_PI);
}
