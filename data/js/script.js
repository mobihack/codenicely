/*
 * file             : codenicely.js
 * description      : js part of codenicely project. codenicely intents to play ambient background music for programmers to get better concentration while doing their works
 * author           : mobihack (mobihack@github), vinay (feat7@github)
 * license          : check license.txt
 * */


//list of audio tracks
var audioList = ['piano', 'rain', 'birds', 'fire', 'bells', 'people', 'cricket'];

function soundCheck(id) {

    /*
    * name      : soundCheck()
    * function  : Change volume of specific audio tracks.
    * input     : id - id of audio track whose sound is being changed
    * */
    document.getElementById(id + 'Audio').volume = document.getElementById(id + 'AudioVolume').value / 100;
}

function toggleMainAudio() {

    /*
     * name      : toggleMainAudio()
     * function  : Turn ON or OFF all the audio tracks aka. Main Toggle.
     * input     : none
     * */


    var mainIcon = document.getElementById('defaultPlay');

    //mainIcon.animateCss('fadeIn');

    var flag; //to make sure that all audio are paused/played correctly
    
    if (mainIcon.classList.contains('fa-pause')) {

        mainIcon.classList.add('fa-play')
        mainIcon.classList.remove('fa-pause');
        flag = 'paused';

    }
    else {

        flag = 'play';
        mainIcon.classList.remove('fa-play')
        mainIcon.classList.add('fa-pause');

    }


    audioList.forEach(function (id) {

        if (flag == 'play')
            if (document.getElementById(id+'Audio').paused) {
                toggleSubAudio(id);
            }
        if (flag == 'paused')
            if (!document.getElementById(id+'Audio').paused) {
                toggleSubAudio(id);
            }

    });
}

function toggleSubAudio(id) {

    /*
     * name      : toggleSubAudio()
     * function  : Turn ON or OFF specific audio tracks.
     * input     : id - id of audio track which is being toggled
     * */


    var audio = document.getElementById(id + 'Audio');

    /* Animations */
    //$(d+'Play').animateCss('fadeIn');
    //$(AudioPlay').animateCss('fadeIn');

    if (audio.paused) {
        document.getElementById(id+'AudioPlay').innerHTML='Playing Now';
        document.getElementById(id+'Play').classList.add('fa-pause')
        document.getElementById(id+'Play').classList.remove('fa-play-circle');
        document.getElementById(id+'AudioVolume').classList.remove('hidden');
        //$(id+'AudioVolume').animateCss('slideInDown');
        audio.play();
        audio.loop = true;
    } else {
        document.getElementById(id+'AudioPlay').innerHTML='Paused';
        document.getElementById(id+'Play').classList.add('fa-play-circle')
        document.getElementById(id+'Play').classList.remove('fa-pause');
        document.getElementById(id+'AudioVolume').classList.add('hidden');
        //$(id+'AudioVolume').animateCss('fadeOut');
        audio.pause();
    }
}

function toggleDarkMode() {

    /*
     * name      : toggleDarkMode()
     * function  : Turn ON or OFF dark mode of site.
     * input     : none
     * */

    var mainSection = document.getElementById('mainSection'),
        button = document.getElementById('dark-mode-button'),
        icon = document.getElementById('icon-dark-mode');

    //mainSection.animateCss('tada');
    if (!document.body.classList.contains('is-darkmode')) {
        document.body.classList.add('is-darkmode');
        
        mainSection.classList.add('is-black')
        mainSection.classList.remove('is-primary');

        button.classList.add('is-active');
        icon.classList.add('fa-toggle-on')
        icon.classList.remove('fa-toggle-off');

    }
    else {
        document.body.classList.remove('is-darkmode');

        mainSection.classList.remove('is-black')
        mainSection.classList.add('is-primary');

        button.classList.remove('is-active');
        icon.classList.remove('fa-toggle-on')
        icon.classList.add('fa-toggle-off');
    }
}

function toggleModal(name) {

    /*
     * name      : toggleModal()
     * function  : Simple function to toggle a modal box
     * input     : name - name of modal box
     * */

    var modal = document.getElementById('modal-' + name);
    if (modal.classList.contains('is-active')) {
        modal.classList.remove('is-active');
    }
    else {
        modal.classList.add('is-active');
    }
}

/* bulma navbar toggle */
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });