var score= prompt("Enter your score: ")
if (score > 0){
    if (score < 70){
        alert("Medium");}
    else if (score < 80){
        alert("Fair");
    }else if (score < 90){
        alert("Good");
    }else if (score <=100){
        alert("Very good");
    }
    else{
        alert("Invalid")
    }
}
else{
    alert("Something went wrong")
}