
var num=document.querySelectorAll(".drum").length;
for(var i=0;i<num;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var button=this.innerHTML;
        buttonAnimation(button);
        makeSound(button);
    });
}

document.addEventListener("keydown",event=>
{
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(seen)
{
    switch(seen)
        {
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                
                break;
            case "a":
                var audio1 = new Audio("sounds/tom-2.mp3");
                audio1.play();
                break;
            case "s":
                var audio2 = new Audio("sounds/tom-3.mp3");
                audio2.play();
                break;
            case "d":
                var audio3 = new Audio("sounds/tom-4.mp3");
                audio3.play();
                break;
            case "j":
                var audio4 = new Audio("sounds/crash.mp3");
                audio4.play();
                break;
            case "l":
                var audio5 = new Audio("sounds/kick-bass.mp3");
                audio5.play();
                break;
            case "k":
                var audio6 = new Audio("sounds/snare.mp3");
                audio6.play();
                break;
            default:
        }
    
}
function buttonAnimation(currentKey)
{
    var button=document.querySelector("." +currentKey);
    button.classList.add("pressed");
    setTimeout(
        ()=>{
            button.classList.remove("pressed");
        },100
            

        );
    

}


