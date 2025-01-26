const alternatives = [
    {text:"", images:"images/cat_dance.gif"},
    {text:"Bro fr?", images:"images/cat_annoyed.jpg"},
    {text:"Come on, I'll give you like a gorbillion kisses", images:"images/cat_stare.gif"},
    {text:"What about unlimited hershey's milk chocolate?", images:"images/cat_laying.gif"},
    {text:"Think about all the flowers you'd be missing out on", images:"images/cat_cry.gif"}
];
const ohyes = {text:"I knew you would accept :D :D :D", images:"images/cat_kiss.gif"};
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;
function updateDisplay(item) {
    console.log(item);
    cat.src = item.images;
    text.innerHTML = item.text;
}

errorButton.addEventListener('click', () => {
    count = 0;
    updateDisplay(alternatives[count]);
    buttons.forEach(btn => btn.style.display = 'inline-block');
    errorButton.style.display = 'none';
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent === 'Yes'){
            updateDisplay(ohyes);
            buttons.forEach(btn => btn.style.display = 'none');
        }
        if (button.textContent === 'No'){
            count++;
            if(count < alternatives.length){
                updateDisplay(alternatives[count]);
            } else {
                buttons.forEach(btn => btn.style.display = 'none');
                errorButton.style.display = 'inline-block';
            }
        }
    });
});