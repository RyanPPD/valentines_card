let rejectionWordList = ["Are you sure??", "Pookie Please!!", "Don't do this to me!!"]

let rejectionImgList = ["https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUyZnk3b2NxMmE5YjI5M2Nubmx3aW4yZzRrYTFxM3NmNG1rNzg3ZThoNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/R15WrVMPBakLK/200w.gif",
"https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyZnk3b2NxMmE5YjI5M2Nubmx3aW4yZzRrYTFxM3NmNG1rNzg3ZThoNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/uRROb0WYxnPoc/source.gif",
"https://media.tenor.com/UefVC2Bih6YAAAAM/pokemon-anime.gif", " https://media.tenor.com/d_OKdz8r3RUAAAAM/squirtle-pokemon.gif",
" https://gifdb.com/images/high/crying-pokemon-squirtle-sx7mddwz64lfp82s.gif"
]

let count = 0;

let width = 70;
let scale = 1;


function accept() {
    document.getElementById("gifs").src= "https://i.pinimg.com/originals/0e/f4/4f/0ef44fd8c959606b4369ec471cc0f862.gif";
    document.getElementById("mainText").innerHTML = "Thanks for being my valentine";
    document.getElementById("buttonCollection").style.display = "none";
    document.getElementById("gifs").style.height = "150%" ;
    
}

function reject(){
    document.getElementById("gifs").src = rejectionImgList[count%5];
    document.getElementById("noButton").innerHTML = rejectionWordList[count%3];
    count = count +1;
    scale += 0.3;
    document.getElementById("yesButton").style.transform = `scale(${scale})`;
    document.getElementById("buttonCollection").style.gap = (width*(scale)^0.5)+'px';
    
}