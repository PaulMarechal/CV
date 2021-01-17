let myButton = document.querySelector('button');
let myHeading = document.querySelector('.bienvenue');

function setUserName() {
    let myName = prompt('Veuillez entrer votre nom');
    localStorage.setItem('nom', myName);
    myHeading.textContent = "Bienvenue sur mon site, " + myName;
}

if (!localStorage.getItem('nom')){
    setUserName();
} else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = "Bienvenue sur mon site, " + storedName;
}

myButton.addEventListener('click', function(){
   setUserName();
});

// theme sombre 
var button = document.getElementsByClassName('button')[0];
        var head = document.querySelector('.container h3');

        var toggled = false; 
        button.addEventListener('click', ()=>{
            if(toggled){
                button.style.top = "0%";
                document.body.style.backgroundColor = "white";
                document.body.style.color = "black";
                head.innerText = "";
                toggled = false; 
                return ;
            }

            // modifier couleur de fond des containers et du texte 
            toggled = true; 
            button.style.top = "10%";
            document.body.style.backgroundColor = "black";
            head.innerText = "";
            document.body.style.color = "white";

        });
