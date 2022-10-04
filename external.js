let grid = document.querySelector(".container");
let h1 = document.querySelector('h1');
const buttons = document.querySelectorAll('.btn');
let gridLength= 16;
let gridSize = 0;
let userChoice = '';
let colorChoice = 1;
let grayAmount = 0;
let color='red';

function createGrid(gridLength=16){
    for (i=0;i<(gridLength**2);i++){
        const gridSquares = document.createElement('div');
        gridSquares.className = "squares";
        gridSquares.id = 'square' + i;
        //console.log(gridSquares);
        grid.appendChild(gridSquares);
        grid.style.gridTemplateColumns = `repeat(${gridLength}, 1fr)`
        grid.style.gridTemplateRows = `repeat(${gridLength}, 1fr)`
        
}}

function mouseOver(){
    const gridSquares = document.querySelectorAll(".container > div");
    gridSquares.forEach((square) => {
    square.addEventListener('mouseover', (e)=> {
        if(colorChoice==1){
            e.target.style.backgroundColor ='black';
        }
        if(colorChoice==2){
            percentGray();
            e.target.style.backgroundColor = `${color}`;
        }
        if(colorChoice==3){
            randomChoice();
            e.target.style.backgroundColor = `${color}`;
        }
    })
});
}

buttons.forEach(button => {button.addEventListener('click',(e)=>{
    userChoice = button.id;
    if(userChoice === 'reset'){
        while (gridSize>100 || gridSize<1){
            gridSize = parseInt(prompt("How many columns would you like to have? 1-50?"));
            if (gridSize > 50 || gridSize < 1){
                alert('ERROR! Try Again!');
            }
            else gridLength = gridSize;
        }
        deleteGrid();
        createGrid(gridLength);
        mouseOver();
        gridSize=0;
    }
    else if(userChoice === 'grayScale'){
        colorChoice=2;
    }
    else if(userChoice === 'rainbow'){
        colorChoice=3;
    }
})
});

function deleteGrid(){
    grid.innerHTML='';
}

function percentGray(){
    if(grayAmount==0) color='#8A8A8A';
    if(grayAmount==1) color='#737373';
    if(grayAmount==2) color='#5C5C5C';
    if(grayAmount==3) color='#454545';
    if(grayAmount==4) color='#2E2E2E';
    if(grayAmount==5) color='#171717';
    if(grayAmount==6){
        color='#000000';
        grayAmount=0;}
    else{
        grayAmount++;
    }

}

function randomChoice() {
    let random = Math.floor(Math.random()*6);
    if (random==0) color='red';
    if (random==1) color='orange';
    if (random==2) color='yellow';
    if (random==3) color='green';
    if (random==4) color='blue';
    if (random==5) color='purple';
    
}

createGrid();
mouseOver();

