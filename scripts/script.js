
//TO DO LATER
//=================================
// FIX BLOCKS DISAPPEARING 
//BE ABLE TO CHANGE BLOCKS 
//MAKE A FANCIER "YOU WIN" ANNOUNCEMENT 
//MAKE CODE MORE CONCISE 
//MAKE BLOCKS INTO CUBES
//BE ABLE TO PLAY MULTIPLE ROUNDS 
//SWAP IMAGES OUT FOR ONES ALL IN THE SAME FORMAT 
//MORE RESPONSIVE


const itemCardArea = document.querySelector('.itemCardArea');
const bigCubes = document.querySelectorAll('.bigCube');
const doneButton = document.querySelector('#doneButton');
const individualCubes =document.querySelectorAll(".bigCubeFont");
const playAgainButton =document.querySelector("#playAgain");
let prizes=[

//IMAGE INFORMATION 
//====================================== 
{Name: "Top of the line bike",
Price: 10900,
Image: "./Assets/bike.jpg",
},

{Name: "A moderately priced car!",
Price: 15999,
Image: "./Assets/car.jpg",
},

{Name: "The newest cell phone",
Price: 1999,
Image: "./Assets/cellphone.jpg",
},

{Name: "A lifetime supply of champagne",
Price: 12999,
Image: "./Assets/champagne.jpg",
},

{Name: "A cruise to Alaska",
Price: 13500,
Image: "./Assets/cruise.jpg",
 },

{Name: "A flight to France",
Price: 15500,
Image: "./Assets/flight.jpg",
},

{Name: "A jazuzzi with installation",
Price: 18700,
Image: "./Assets/jacuzzi.jpg",
},        
        
{Name: "A jetski",
Price: 9299,
 Image: "./Assets/jetski.jpg",
},

{Name: "A Laptop",
Price: 3999,
Image: "./Assets/laptop.jpg",
},

{Name: "A motorcycle",
Price: 22899,
Image: "./Assets/motorcycle.jpg",
},

{Name: "An RV",
Price: 25799,
Image: "./Assets/rv.jpg",
},

{Name: "A Flat Screen TV",
Price: 4599,
Image: "./Assets/tv.jpg",
},

{Name: "5 day resort in Cancun",
Price: 18599,
Image: "./Assets/vacation.jpg",
        },
]


//Random Selector Function
//===================================
function randomSelectItem(){
let randomIndex = Math.floor(Math.random()*prizes.length);
let randomPrize = prizes[randomIndex];
prizes.splice(randomIndex, 1);
return randomPrize;
}

function insertRandom(){
let randomSelection = randomSelectItem();

//PRIZE CARDS 
//==============================
let itemCardDiv = document.createElement('div');
itemCardArea.append(itemCardDiv);
itemCardDiv.className = "itemCard";
let itemContainer = document.createElement('div');
itemCardDiv.append(itemContainer);
itemContainer.className = "itemContainer";
let itemImage = document.createElement('img');
itemContainer.append(itemImage);
itemImage.className = "itemImage";
itemImage.src = "";
itemImage.style = "width: 200px";
let itemName = document.createElement("p");
itemContainer.append(itemName);
itemName.className= "itemName";
itemName.innerText=""
let costOfItem = document.createElement("p");
itemContainer.append(costOfItem);
costOfItem.className = "costOfItem";
costOfItem.innerText = ""
let spaceForCube = document.createElement('div');
itemContainer.append(spaceForCube);
spaceForCube.className="spaceForCube";

itemImage.src = randomSelection.Image;
costOfItem.innerText = randomSelection.Price;
itemName.innerText = randomSelection.Name;  
return randomSelection.Price;
}

//GETTING ANSWER ARRAY
//=============================
let item1 = insertRandom();
let item2 = insertRandom();
let item3 = insertRandom();

let answerArray = [item1, item2, item3];
answerArray.sort(function(a, b){return a-b});
let numberArray=[];

numberArray.push(answerArray.indexOf(item1)+1);
numberArray.push(answerArray.indexOf(item2)+1);
numberArray.push(answerArray.indexOf(item3)+1);
console.log(numberArray);



//DRAG AND DROP
//=============================
const dropSpots = document.querySelectorAll('.spaceForCube');

for(let bigCube of bigCubes){
        bigCube.addEventListener('dragstart', dragStart);
}

function dragStart(e){
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
        e.target.classList.add('hide');
        }, 0);
}

for(let dropSpot of dropSpots){
        dropSpot.addEventListener('dragenter', dragEnter);
        dropSpot.addEventListener('dragover', dragOver);
        dropSpot.addEventListener('dragleave', dragLeave);
        dropSpot.addEventListener('drop', drop);
}

function dragEnter(e){
        e.preventDefault();
        e.target.classList.add('drag-over');
}
function dragOver(e){
        e.preventDefault();
        e.target.classList.add('drag-over');
}
function dragLeave(e){
        e.preventDefault();
        e.target.classList.remove('drag-over');
}
function drop(e){
        e.preventDefault();
        e.target.classList.remove('drag-over');
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);
        e.target.appendChild(draggable);
        draggable.classList.remove('hide');
}


//DONE BUTTON/ REVEALING WINNER 
//====================================
function changeColor(){
        price = document.querySelectorAll(".costOfItem");
        // price[0].style.color = "black";
        // price[1].style.color = "black";
        // price[2].style.color = "black";

        for(let i=0; i<= 2; i++){
        price[i].style.color="black";
        }
}

//REFRESH BUTTON
//======================================
function refresh(){
        window.location.reload("Refresh")
      }


doneButton.addEventListener('click', function(event){
        // console.log(userArray);
        changeColor();
        let userAnswer=[];
        userAnswer.push(dropSpots[0].children[0].innerText);
        userAnswer.push(dropSpots[1].children[0].innerText);
        userAnswer.push(dropSpots[2].children[0].innerText);
        

        if(userAnswer[0]==numberArray[0] && userAnswer[1]==numberArray[1] && userAnswer[1]==numberArray[1]){
                alert("YOU WIN A BRAND NEW CAR!!!!!!!!!!");
        }
        else{
                alert("You win some you lose some, sorry buddy.");
        }

        // let outcome=false;
        // for(let i=0; i<3; i++){
        //         if(numberArray[i] == userAnswer[i]){
        //                 outcome=true;
        //         }
        //         console.log(outcome);
        // }

})

playAgainButton.addEventListener('click', function(event){
        refresh();
})
