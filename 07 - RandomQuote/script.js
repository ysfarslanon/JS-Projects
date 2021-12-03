const btnQuote = document.getElementById("btnGenerateQuote");
const quote = document.getElementById("quote");
const owner = document.getElementById("owner");

const quotes = [
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    owner: "Albert Einstein",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    owner: "Oscar Wilde",
  },
  {
    quote: "A room without books is like a body without a soul.",
    owner: "Marcus Tullius Cicero",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    owner: "Mae West",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    owner: "Mahatma Gandhi",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    owner: "Mark Twain",
  },
  {
    quote: "A friend is someone who knows all about you and still loves you.",
    owner: "Elbert Hubbard",
  },
  {
    quote: "Without music, life would be a mistake.",
    owner: "Friedrich Nietzsche",
  },
  {
    quote:
      "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    owner: "William Shakespeare",
  },
  {
    quote: "Life is what happens to us while we are making other plans",
    owner: "Allen Saunders",
  },
  {
    quote:
      "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    owner: "Bill Keane",
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    owner: "Thomas A. Edison",
  },
  {
    quote:
      "A woman is like a tea bag; you never know how strong it is until it's in hot water.",
    owner: "Eleanor Roosevelt",
  },
  {
    quote: "A day without sunshine is like, you know, night.",
    owner: "Steve Martin",
  },
  {
    quote: "That which does not kill us makes us stronger.",
    owner: "Friedrich Nietzsche",
  },
];

function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit);
}

function generateQuote() {
  let randomNumber = getRandomNumber(quotes.length);
  quote.innerHTML = quotes[randomNumber].quote;
  owner.innerHTML = quotes[randomNumber].owner;
}

generateQuote();
btnQuote.addEventListener("click", generateQuote);
