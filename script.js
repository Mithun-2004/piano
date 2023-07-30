var volume = 0.5;
$('#volumeSlide').on('input', function(e){
    volume = e.target.value;
})

var buttons = $('button');

buttons.click(function(){
    var classList = $(this).attr('class');
    var keyName = (classList.split(" "))[2];
     
    playSound(keyName);
    buttonAnimation($(this));
})

$(document).keydown(function(event){
    keyPress = event.key;
    
    for (var i=0; i<17; i++){
        if ($(buttons[i]).hasClass(keyPress)){
            var keyPressed = $(buttons[i]).attr('class').split(" ")[2];
            playSound(keyPressed);
            buttonAnimation(buttons[i]);
        }
    }
})

function playSound(keyName, volumeLevel){
    var audio = new Audio(`./sounds/${keyName}.mp3`);
    audio.volume = volume;
    audio.play();

}

function buttonAnimation(keyPressed){
    var keyType = (($(keyPressed).attr('class')).split(" "))[1];
    if (keyType == "white"){
        $(keyPressed).addClass('whitePressed');
        setTimeout(()=>{
            $(keyPressed).removeClass('whitePressed');
        }, 100);
    }else{
        $(keyPressed).addClass('blackPressed');
        setTimeout(()=>{
            $(keyPressed).removeClass('blackPressed');
        }, 100);
    }
}

function showHideKeys(){
    $('span').toggleClass('hideKeys');
}

$('#showKeys').on('click', showHideKeys);
