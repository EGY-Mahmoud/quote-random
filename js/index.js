// Array of quotes
const quotes = [
  "You've gotta dance like there's nobody watchingLove like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
  "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  "A friend is someone who knows all about you and still loves you.",
  "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
  "We accept the love we think we deserve.",
  "t is better to be hated for what you are than to be loved for what you are not.",
  "As he read, I fell in love the way you fall asleep: slowly, and then all at once.",
  "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
  "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
  "Love is that condition in which the happiness of another person is essential to your own."
];
var actors = [
  "― Marilyn Monroe",
  "― William W. Purkey",
  "― Dr. Seuss",
  "― Elbert Hubbard",
  "― Stephen Chbosky",
  "― Andre Gide",
  "― John Green",
  "― Friedrich Nietzsche",
  "― Lao Tzu",
  "― Robert A. Heinlein"


];

function getRandomQuote() {
  // Math Object 
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomIndex];
  document.getElementById("randomQuote").innerHTML = randomQuote;

  var randomQuoteActor = actors[randomIndex];
  document.getElementById("randomQuoteActor").innerHTML = randomQuoteActor;
}


