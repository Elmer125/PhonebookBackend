const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://mauricio10:${password}@cluster0.dpki5.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose.connect(url);

const phoneBookSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const PhoneBook = mongoose.model("PhoneBook", phoneBookSchema);

if (process.argv.length < 4) {
  PhoneBook.find({}).then((result) => {
    result.forEach((note) => {
      console.log(note);
    });

    mongoose.connection.close();
  });
} else {
  const phoneBook = new PhoneBook({
    name: process.argv[3],
    number: process.argv[4],
  });
  phoneBook.save().then((result) => {
    console.log(`added ${process.argv[3]} number ${process.argv[4]} to phonebook`);
    mongoose.connection.close();
  });
}
