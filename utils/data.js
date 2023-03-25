const names = [
  'Federico',
  'Henry',
  'Linder',
  'Andre',
  'Chaim',
  'Blaise',
  'Jacquelyn',
  'Whalen',
  'Mancuso',
  'Ruth',
  'Barry',
  'Whitson',
  'Draper',
  'Vance',
  'Kaitlin',
  'Swanson',
  'Tillman',
  'Leland',
  'Heidi',
  'Nowak',
  'Frederick',
  'Annika',
  'Villasenor',
  'Marguerite',
  'Moser',
  'Dillon'
];

const emails =[
  'coolguy@email.com',
  'awesome@email.com',
  'crazy@email.com',
  'bananamaster@email.com',
  'orange@email.com',
  'flamingfire@email.com',
  'angrysalad@email.com',
  'brazen@email.com',
  'fearless@email.com',
  'supersoap@email.com',
  'candlelighter@email.com',
  'computermaster@email.com',
  'emailhaver@email.com'
];

const genericThoughts = [
  'Just started reading a new book!',
  'Just joined this site, hello everyone!',
  'How do i work my dang computer?',
  'I\'m thinking about having a burrito for dinner',
  'I need a recipe for paella, FAST! HELP!',
  'The new superhero movie is AMAZING! GO WATCH IT!',
  'My keyboard is so cool! Look at me type!',
  'My computer is on fire, is this normal?'
];

const genericResponse = [
  'Woah! So cool!',
  'Omg! I feel so sorry for you',
  'HAHA lol!',
  'Same',
  'This is so fake and staged.',
  'I actually didnt know this, thank you!',
  'FIRST!',
  'Can you elaborate please?',
  'Oh wow!'
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () =>
  `${getRandomArrItem(names)}`;

  const getRandomEmail = () =>
  `${getRandomArrItem(emails)}`;

const getRandomThought = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(genericThoughts),
      username: getRandomName(),
      reactions: [...getThoughtReactions(3)],
    });
  }
  return results;
};

const getThoughtReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(genericResponse);
  }
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(genericResponse),
      username: '@'+getRandomName(),
    });
  }
  return results;
};

module.exports = { getRandomName, getRandomEmail, getRandomThought };
