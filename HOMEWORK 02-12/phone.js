var enter = document.getElementById("enter")

 
function search() {
    var listName = document.getElementById("list-names")
    var phoneName = document.getElementsByClassName("phone-name")

    input = enter.value.toUpperCase();

    if (!input) {
        listName.style.display = null;

    } else {
        for (var i = 0; i < phoneName.length; i++ ) {
            if (phoneName[i].innerHTML.toUpperCase().includes(input)) {
                listName.style.display = "block";
                phoneName[i].style.display = "block";
            } else {
                phoneName[i].style.display = "none";
            }
        }
    }
    

}

enter.addEventListener("keyup",search )