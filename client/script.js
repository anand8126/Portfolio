


// hero-section

document.addEventListener('DOMContentLoaded', function () {
    const textWrapper = document.getElementById('Typewriter-text');
    const words = ['Frontend Developer','Backend Developer','Full Stack Developer'];
    let wordIndex = 0;
    let letterIndex = 0;

    function type(){
        if ( letterIndex < words[wordIndex].length){
            textWrapper.innerHTML += words[wordIndex].charAt(letterIndex);
            letterIndex++;
            setTimeout(type, 100);
        }
        else {
            setTimeout(erase, 1500);
        }
    }

    function erase() {
        if(letterIndex > 0) {
            textWrapper.innerHTML = words[wordIndex].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(erase, 50);
        }
        else{
            wordIndex = (wordIndex +1) % words.length;

            setTimeout(type, 500);
        }
    }

    type();

})


// header-section
var subMenu = document.getElementById('subMenu');
var menuName = subMenu.getElementsByClassName('menuName');
for(var i=0; i<menuName.length; i++){
    menuName[i].addEventListener("click", function(){
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(" active", "");
        this.className+=" active";
    })
}