// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
//Add properties to the quotes
var quotes = [{
        quote: "Remember no one can make you feel inferior without your consent.",
        source: "-Elenor Roosevelt"
    },
    {
        quote: "Believe you can and you’re halfway there.",
        source: "-Theodore Roosevelt",
        year: 1890
    },
    {
        quote: "Too many of us are not living our dreams because we are living our fears.",
        source: "-Les Brown"
    },
    {
        quote: "Whatever the mind of man can conceive and believe, it can achieve.",
        source: "-Napoleon Hill",
        citation: "Think And Grow Rich",
        year: 1937
    },
    {
        quote: "I am not a product of my circumstances. I am a product of my decisions.",
        source: "-Stephen Covey"
    },
    {
        quote: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
        source: "-Henry Ford"
    },
    {
        quote: "Be mindful. Be grateful. Be positive. Be true. Be kind",
        source: "-Roy T.Bennet",
        citation: "The Light In The Heart",
        year: 2012
    },
    {
        quote: "I have learned over the years that when one’s mind is made up, this diminishes fear.",
        source: "-Rosa Parks",
        year: 1970
    },
    {
        quote: "A person who never made a mistake never tried anything new.",
        source: "-Albet Einstein"
    },
    {
        quote: "It is better to be hated for what you are than to be loved for what you are not.",
        source: "-Andre Gide",
        citation: "Autumn Leaves"
    }
];


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(array) {
    var randomNumber = Math.floor(Math.random() * 11);
    return array[randomNumber];
}

// Create the printQuote funtion and name it printQuote
function printQuote() {
    var randomQuote = getRandomQuote(quotes);

    //assign the random quote to the variable 'quoteMessage'
    var quoteMessage = "";
    quoteMessage += "<p class='quote'>" + randomQuote.quote + "</p>";

    //check to see if both Citation and Year properties exist on the quote and add them on the 'quoteMessage' to be printed    
    if (randomQuote.citation && randomQuote.year) {
        quoteMessage += "<p class='source'>" + randomQuote.source + "<span class='citation'>" + randomQuote.citation + "</span>" + "<span class='year'>" + randomQuote.year + "</span>" + "</p>";

        //check if only Citation property exists 
    } else if (randomQuote.citation) {
        quoteMessage += "<p class='source'>" + randomQuote.source + "<span class='citation'>" + randomQuote.citation + "</span>" + "</p>";

        //check if Year property exists
    } else if (randomQuote.year) {
        quoteMessage += "<p class='source'>" + randomQuote.source + "<span class='year'>" + randomQuote.year + "</span>" + "</p>";

        //otherwise just print the source
    } else {
        quoteMessage += "<p class= 'source'>" + randomQuote.source + "</p>";
    }

    //print the quoteMessage with the available properties
    document.getElementById('quote-box').innerHTML = quoteMessage;

}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);