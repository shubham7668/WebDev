for (var i = 0; i < 7; i++)
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var str = this.innerHTML;
        console.log(str);
        makeSound(str);
        addAnimation(str);
    });

    document.addEventListener("keydown",function (event){
        makeSound(event.key);
        addAnimation(event.key);
    })
    function makeSound(str){
        var audio;
        switch (str) 
        {
            case "w":
                audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            case "a":
                audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case "s":
                audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
            case "d":
                audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
            case "j":
                audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case "k":
                audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case "l":
                audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
        }
    }

function addAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100);

}