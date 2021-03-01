
messages = ["Happy Birthday Howard!","Congratulations on turning 22!","Wish you have a great birthday!","Here's your present!"]
counter = -1;

function loaded(){
    title = document.querySelector(".title")
    var typed = new Typed('.title', {
        strings: messages,
        typeSpeed: 60,
        backSpeed: 45,
        loop: false,
        showCursor: false,
    });
}

function done(){
    $(".row").css({'opacity':'1'})
}

function openBox(){
    $(".row").css({'display':'none'})
    textarea = document.querySelector(".reward")
    textarea.textContent = "20 ADA!!!!"
    
    button = document.querySelector(".next")
    button.textContent = "Continue"
    button.addEventListener('click',claimPresent)

}

function claimPresent(){
    textarea = document.querySelector(".reward")
    textarea.textContent = "I know you're rich already but message me on discord if you want the ADA xD"
}

function load(){
    button = document.querySelector(".next")
    button.addEventListener('click',done)
    
    box = document.querySelector(".box")
    box.addEventListener('click',openBox)

    setTimeout(function(){
        $('.next').css({'opacity':'1'})
    },17500)
}



load()
setTimeout(loaded(),1000)
