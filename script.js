document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            text: "Life is what happens when you're busy making other plans.",
            author: "John Lennon"
        },
        {
            text: "Get busy living or get busy dying.",
            author: "Stephen King"
        },
        {
            text: "The purpose of our lives is to be happy.",
            author: "Dalai Lama"
        }
    ];

    

    const textElement = document.getElementById('text');
    const authorElement = document.getElementById('author');
    const newQuoteButton = document.getElementById('new-quote');
    const tweetQuoteButton = document.getElementById('tweet-quote');

    function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function getRandomColor() {
        return getRandomElement(colors);
    }

    function getRandomQuote() {
        return getRandomElement(quotes);
    }

    function updateQuote() {
        const { text, author } = getRandomQuote();
        textElement.textContent = `"${text}"`;
        authorElement.textContent = `- ${author}`;
        document.body.style.backgroundColor = getRandomColor();
        document.getElementById('quote-box').style.backgroundColor = getRandomColor();
    }

    newQuoteButton.addEventListener('click', updateQuote);

    tweetQuoteButton.addEventListener('click', () => {
        const quote = textElement.textContent;
        const author = authorElement.textContent;
        const tweetContent = `${quote} ${author}`;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetContent)}`;
        window.open(twitterUrl, '_blank');
    });

    // Initialize with a random quote and background color
    updateQuote();
});
