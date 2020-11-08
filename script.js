let quotes = [
["George Washington", "It is better to offer no excuse than a bad one"],
["John Adams", "The longer I live, the more I read, the more patiently I think, and the more anxiously I inquire, the less I seem to know. . . . Do justly. Love mercy. Walk humbly. This is enough."],
["Thomas Jefferson","Honesty is the first chaper of the book of wisdom"],
["James Madison", "The advancement and diffusion of knowledge is the only guardian of true liberty"],
["James Monroe", "The best form of goverment is that which is most likely to prevent the greatest sum of evil"],
["John Quincy Adams", "Try and fail, don't fail to try"],
["Andrew Jackson","Any many worth his salt will stick up for what he believes right, but it takes a slightly better man to acknowledge instantly without reservation that he is in error"],
["Martin Van Buren", "It is easier to do a job right than to explain why you didn't."],
["William Henry  Harrison","There is nothing more corruption, nothing more destructive of the noblest and finest feelings of our nature than the exercise of unlimited power"],
["John Tyler", "I contend that the strongest of all governments is that which is most free."],
["James K. Polk", "No president who performs his duties faithfully and conscientiously can have any leisure."],
["Zachary Taylor", "I have always done my duty. I am ready to die. My only regret is for the friends I leave behind me."],
["Millard Fillmore", "It is not strange...to mistake change for progress"],
["Franklin Pierce", "If your past is limited, your future is boundless"]
];
let colours = ['rgb(155, 89, 182)', 'rgb(115, 168, 87)', 'rgb(231, 76, 60)', 'rgb(189, 187, 153)', 'rgb(22, 160, 130)', 'rgb(44, 62, 80)', 'rgb(52, 34, 36)', 'rgb(243, 156, 18)'];




let newQuoteBtn = document.getElementById('new-quote');
let bodyEl = document.body;
let socialButtons = document.querySelectorAll('.social');

let textBox = document.getElementById("text");
let authorBox = document.getElementById("author");
//Default
textBox.innerHTML = quotes[0][1];
authorBox.innerHTML = quotes[0][0];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
  }

  newQuoteBtn.addEventListener('click', ()=>{
    let randNumQuote = getRandomIntInclusive(0, 13);
    textBox.innerHTML = quotes[randNumQuote][1];
    authorBox.innerHTML = quotes[randNumQuote][0];
    let randColour = getRandomIntInclusive(0, 7);
    bodyEl.style.background = colours[randColour];
    newQuoteBtn.style.background = colours[randColour];
    socialButtons.forEach(element => {
    element.style.color = colours[randColour];
});

  });