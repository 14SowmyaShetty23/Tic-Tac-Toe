let boxes=document.querySelectorAll(".box");
//above is command to select the boxes
let resetBtn=document.querySelector("#reset-btn");

let newGameBtn=document.querySelector("#new-btn");

let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector('#msg');

//to determine the player turn
let turn0=true;

const winPattern=
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
const resetGame=()=>{
    turn0=true;
    enabledboxes();
    msgContainer.classList.add("hide");
};

//event list for each box
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0) //player0
        {
            box.innerText="O";
            turn0=false;
        }
        else{//playerX
            box.innerText="X";
            turn0=true;
        }

        //stop double click on chnage click one box at one time only
        box.disabled=true;
        checkwinner();

    });

});


//if theutton will be  winner is displayed then no new be clicked instead we have to click new game button or reset button
const disabledboxes=()=>
{
    for(let box of boxes){
        box.disabled=true;
    }
};
//after reset we will rest the buutons
const enabledboxes=()=>
{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

};
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");

      //above command will un hide the hidden winner container

disabledboxes();
    };



const checkwinner=()=>{
    for(let pattern of winPattern)
    {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;


        //check the winner box is not empty
        if(pos1val!="" && pos2val!="" && pos3val!="")
        {
            if(pos1val==pos2val && pos2val==pos3val)
            {
                showWinner(pos1val);
            }
        }
    }
}



newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);