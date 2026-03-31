const quote =[
    "The only way to do great work is to love what you do. — Steve Jobs",
    "In the middle of every difficulty lies opportunity. — Albert Einstein",
    "It does not matter how slowly you go as long as you do not stop. — Confucius",
    "Everything you’ve ever wanted is on the other side of fear. — George Addair",
    "Life is what happens when you're busy making other plans. — John Lennon",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
    "Hardships often prepare ordinary people for an extraordinary destiny. — C.S. Lewis",
    "The best way to predict the future is to invent it. — Alan Kay",
    "Don't count the days, make the days count. — Muhammad Ali",
    "Whether you think you can or you think you can’t, you’re right. — Henry Ford",
    "The only true wisdom is in knowing you know nothing. — Socrates",
    "We suffer more often in imagination than in reality. — Seneca",
    "Happiness depends upon ourselves. — Aristotle",
    "The mind is everything. What you think you become. — Buddha",
    "To live is the rarest thing in the world. Most people exist, that is all. — Oscar Wilde",
    "Be yourself; everyone else is already taken. — Oscar Wilde",
    "Dream big and dare to fail. — Norman Vaughan",
    "Do what you can, with what you have, where you are. — Theodore Roosevelt",
    "Every moment is a fresh beginning. — T.S. Eliot",
    "Turn your wounds into wisdom. — Oprah Winfrey",

];

const button = document.querySelector('button');
const quotes = document.querySelector('h1');

button.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*quote.length);
    quotes.textContent = quote[index];
    quotes.style.ita
})