const quotes = [
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" }
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    const quote = getRandomQuote();
    document.getElementById('text').innerText = `"${quote.text}"`;
    document.getElementById('author').innerText = `- ${quote.author}`;
    
    const tweetQuote = document.getElementById('tweet-quote');
    tweetQuote.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`;
}

document.getElementById('new-quote').addEventListener('click', displayQuote);

// Initial display
displayQuote();
