/* 
SOLO NODE 

const http = require("http");

let notes = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "0400-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6423122",
  },
];

const app = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(notes));
});

const PORT = 3001;
app.listen(PORT); */

/* CON NODE-EXPRESS-NODEMON */
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(cors())
app.use(express.json());
morgan.token("content", (req, res) => {
  return JSON.stringify(req.body);
});

app.use(morgan(":method :url :status :response-time ms :content"));
let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "0400-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6423122",
  },
];

/* initial api information*/
app.get("/", (request, response) => {
  response.send("<h1>Hello world!</h1>");
});

/* see all people in with json format */
app.get("/api/persons", (request, response) => {
  response.json(persons);
});

/* see time and number person */
app.get("/info", (request, response) => {
  let time = new Date();
  let numberPeople = persons.length;
  response.send(`<h1>PhoneBook has info for ${numberPeople} people</h1>
  <h1>${time}</h1>
  `);
});

/* see unique person  */
app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map((n) => n.id)) : 0;
  return maxId + 1;
};

/*enter new people*/
app.post("/api/persons", (request, response) => {
  const body = request.body;
  const repeatName = persons.find((person) => person.name === body.name);

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "Content missing",
    });
  }
  if (repeatName) {
    return response.status(400).json({
      error: "name must be unique",
    });
  }
  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };
  persons = persons.concat(person);
  response.json(person);
});

/* Delete unique person */
app.delete("/api/delete/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
