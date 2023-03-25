const connection = require('../config/connection');
const { User, Thought } = require('../models');
const {getRandomEmail, getRandomThought, getRandomName} = require('./data')


connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await User.deleteMany({});
  await Thought.deleteMany({});

  const users = [];
  const thoughts = getRandomThought(5);


  for (let i = 0; i < 5; i++) {
    const name = getRandomName();
    const mail = getRandomEmail();

    users.push({
      username: name,
      email: mail,
    });
  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);


  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete');
  process.exit(0);
});
