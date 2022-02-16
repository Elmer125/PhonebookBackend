// Organizado por modulos

const app = require("./app");
const http = require("http");
const config = require("./utils/config");
const logger = require("./utils/logger");

const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`server running on port ${config.PORT}`);
});

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
/* require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser"); */
/* const morgan = require("morgan");*/
/* const cors = require("cors");
const phoneBook = require("./models/phoneBook");
const { request, response } = require("express");
const app = express();

app.use(cors());
const logger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
}; */

/* app.use(express.static("build"));
app.use(bodyParser.json());
app.use(logger); */
/* morgan.token("content", (req, res) => {
  return JSON.stringify(req.body);
});

app.use(morgan(":method :url :status :response-time ms :content")); */
/* let persons = [
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
]; */

/* see all people in with json format */
/* app.get("/api/persons", (request, response) => {
  phoneBook.find({}).then((phonebooks) => {
    response.json(phonebooks.map((phoneBook) => phoneBook.toJSON()));
  });
  response.json(persons);
}); */

/* see unique person  */
/* app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id;

  const person = persons.find((person) => person.id === id);
  phoneBook
    .findById(id)
    .then((phonebook) => {
      if (phonebook) {
        response.json(phonebook.toJSON());
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => {
      next(error);
    });
   if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
}); */

/*enter new people*/
/* app.post("/api/persons", (request, response) => {
  const body = request.body;
  const repeatName = persons.find((person) => person.name === body.name); 
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "Content missing",
    });
  } 

  const person = new phoneBook({
    name: body.name,
    number: body.number,
  });

  person
    .save()
    .then((savedPhone) => {
      response.json(savedPhone.toJSON());
    })
    .catch((error) =>
      response.status(400).json({
        error: error.message,
      })
    );
  person.save().then((savedNote) => {
    response.json(savedNote);
  });
}); */

/* initial api information*/
/* app.get("/", (request, response) => {
  response.send("<h1>Hello world!</h1>");
}); */

/* see time and number person */
/* app.get("/info", (request, response) => {
  let time = new Date();
  let numberPeople = persons.length;
  response.send(`<h1>PhoneBook has info for ${numberPeople} people</h1>
  <h1>${time}</h1>
  `);
}); */

/* Delete unique person */
/* app.delete("/api/persons/:id", (request, response, next) => {
  const id = request.params.id;
  phoneBook
    .findByIdAndRemove(id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => {
      next(error);
    });

   persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
}); */

/* app.put("api/persons/:id", (request, response, next) => {
  const body = request.body;
  const id = request.params.id;

  const person = {
    name: body.name,
    number: body.number,
  };
  phoneBook
    .findByIdAndUpdate(id, person, { new: true })
    .then((updatedPhone) => {
      response.json(updatedPhone.toJSON());
    })
    .catch((error) => next(error));
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};
app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError" && error.kind == "ObjectId") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); */
