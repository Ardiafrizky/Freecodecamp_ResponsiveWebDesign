let randsAll = [];
var txt = document.querySelector('p');
var key = document.querySelector('#key');
var header = document.querySelector('header');
var reset = document.querySelector('#reset');
var boxes = document.getElementsByClassName('color-box');

startGame();

for (var i = 0; i < 9; i++) {
    boxes[i].addEventListener('click', function(){
        if (key.innerHTML == this.style.backgroundColor) {
            for(var k = 0; k < 9; k++){
                boxes[k].style.backgroundColor = this.style.backgroundColor;
            }
            reset.innerHTML = 'Again';
            header.style.backgroundColor = this.style.backgroundColor;
            txt.innerHTML = 'CORRECT!'
            
        } else {
            this.style.backgroundColor = '#fff';
        }
    });
};

reset.addEventListener('click', function(){
    this.innerHTML = 'Reset';
    startGame();
});

function startGame(){
    randsAll = [];
    txt.innerHTML = 'Now Guess the Color Mentioned Above'
    for(var k = 0; k < 9; k++){
        let rands = [];
        for(var i = 0;i < 3;i++){
            rands.push(Math.floor(Math.random()*256));
        }
        boxes[k].style.backgroundColor = 'RGB('+rands[0]+','+rands[1]+','+rands[2]+')';
        randsAll.push(boxes[k].style.backgroundColor);
    };
    key.innerHTML = randsAll[Math.floor(Math.random() * 9)];
}
