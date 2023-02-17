<div>
<h1>Eazy Az 123</h2>
</div>

Eazy AZ 123 is an online version of the live Price is Right Game. The user is asked to rank the items from least to most expensive. If they get the order right, they win a prize.

## Screenshots 
![alt GIF of functioning site](https://res.cloudinary.com/dqfviar71/image/upload/v1676591812/EZ123Gif_copy_ehixus.gif)

***

## Technical Framework and Language Usage:
- JavaScript
- HTML
- CSS


## Build Status
Deployed@**[Eazy Az 123](https://spontaneous-baklava-35cd65.netlify.app/)**

***

## Future Goals
- [ ] Tighten up drag and drop function.
- [ ] Allow user to switch blocks around. 


## Challenges
-  One challenge I faced was checking the user's answer against the correct answer, and extracting the correct information from the drag and dropped blocks. Below is a code snippet where I worked through this challenge.

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
        //GETTING USER ANSWER ARRAY
        //=============================
        doneButton.addEventListener('click', function(event){
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


## Triumphs
- With a lot of interaction in just one small page, I learned a lot about JavaScript and am excited about my new skills. Games have proven to be a great way to practice what I know and add new tools to my toolkit.
- Incorporating the drag and drop feature. 

***
