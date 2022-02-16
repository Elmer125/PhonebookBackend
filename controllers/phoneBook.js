const phoneRouter = require("express").Router();
const PhoneBook = require("../models/phoneBook");

phoneRouter.get("/", (request, response) => {
  PhoneBook.find({}).then((list) => {
    response.json(list.map((phonebook) => phonebook.toJSON()));
  });
});

phoneRouter.get("/:id", (request, response, next) => {
  PhoneBook.findById(request.params.id)
    .then((phone) => {
      if (phone) {
        response.json(phone.toJSON());
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

phoneRouter.post("/", (request, response, next) => {
  const body = request.body;
  const person = new PhoneBook({
    name: body.name,
    number: body.number,
  });

  person
    .save()
    .then((savedPerson) => {
      response.json(savedPerson.toJSON());
    })
    .catch((error) => next(error));
});

phoneRouter.delete("/:id", (request, response, next) => {
  PhoneBook.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

phoneRouter.put("/:id", (request, response, next) => {
  const body = request.body;
  const id = request.params.id;
  const person = {
    name: body.name,
    number: body.number,
  };

  PhoneBook.findByIdAndUpdate(id, person, { new: true })
    .then((updatePhone) => {
      response.json(updatePhone.toJSON());
    })
    .catch((error) => next(error));
});

module.exports = phoneRouter;
