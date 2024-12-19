const mongoose = require('mongoose');

require('dotenv').config();


// Vérifie que le mot de passe est fourni
if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>');
  process.exit(1);
}

// Récupère les arguments de la ligne de commande
const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

// URI pour se connecter à MongoDB (remplace `<password>` par ton mot de passe)
const url = process.env.MONGO_URI;


// Connexion à MongoDB
mongoose.connect(url);

// Définir le schéma et le modèle
const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model('Person', personSchema);

// **1. Ajouter une entrée**
if (name && number) {
  const person = new Person({
    name: name,
    number: number,
  });

  person.save().then(() => {
    console.log(`Added ${name} number ${number} to phonebook`);
    mongoose.connection.close();
  });

// **2. Lister les entrées**
} else {
  Person.find({}).then(result => {
    console.log('Phonebook:');
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`);
    });
    mongoose.connection.close();
  });
}
