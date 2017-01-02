/*
 * file             : codenicely.js
 * description      : js part of codenicely project. codenicely intents to play ambient background music for programmers to get better concentration while doing their works
 * dependencies     : jquery3
 * author           : mobihack (mobihack@github), vinay (feat7@github)
 * license          : check license.txt
 * */


//list of audio tracks
var audioList=['piano','rain','birds','fire','bells','people','cricket'];

function soundCheck(id) {

    /*
    * name      : soundCheck()
    * function  : Change volume of specific audio tracks.
    * input     : id - id of audio track whose sound is being changed
    * */

    $('#'+id+'Audio')[0].volume = $('#'+id+'AudioVolume')[0].value/100;
}

function toggleMainAudio() {

    /*
     * name      : toggleMainAudio()
     * function  : Turn ON or OFF all the audio tracks aka. Main Toggle.
     * input     : none
     * */


        var mainIcon=$('#defaultPlay');

        mainIcon.animateCss('fadeIn');

        var flag; //to make sure that all audio are paused/played correctly

        if(mainIcon.hasClass('fa-pause')){

            mainIcon.addClass('fa-play').removeClass('fa-pause');
            flag='paused';

        }
        else{

            flag='play';
            mainIcon.removeClass('fa-play').addClass('fa-pause');

        }


        audioList.forEach(function (id) {

            if (flag=='play')
                if($('#' + id + 'Audio')[0].paused) {
                    toggleSubAudio(id);
                }
            if (flag=='paused')
                if(!$('#' + id + 'Audio')[0].paused) {
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


    var audio = document.getElementById(id+'Audio');

    /* Animations */
    $('#'+id+'Play').animateCss('fadeIn');
    $('#'+id+'AudioPlay').animateCss('fadeIn');

    if(audio.paused) {
        $('#'+id+'AudioPlay').html('Playing Now');
        $('#'+id+'Play').addClass('fa-pause').removeClass('fa-play-circle');
        $('#'+id+'AudioVolume').removeClass('hidden');
        $('#'+id+'AudioVolume').animateCss('slideInDown');
        audio.play();
        audio.loop = true;
    } else {
        $('#'+id+'AudioPlay').html('Paused');
        $('#'+id+'Play').addClass('fa-play-circle').removeClass('fa-pause');
        $('#'+id+'AudioVolume').addClass('hidden');
        $('#'+id+'AudioVolume').animateCss('fadeOut');
        audio.pause();
    }
}

function toggleDarkMode() {

    /*
     * name      : toggleDarkMode()
     * function  : Turn ON or OFF dark mode of site.
     * input     : none
     * */

    var mainSection=$('#mainSection');
    var button=$('#dark-mode-button');
    var icon=$('#icon-dark-mode');
    var optionSection=$('#options');
    var footerSection=$('#footer');

    mainSection.animateCss('tada');

    if(mainSection.hasClass('is-info')){
        mainSection.addClass('is-dark').removeClass('is-info');
        optionSection.addClass('dark-mode');
        footerSection.addClass('dark-mode').removeClass('is-primary');
        button.addClass('is-active');
        icon.addClass('fa-toggle-on').removeClass('fa-toggle-off');

    }
    else{
        mainSection.removeClass('is-dark').addClass('is-info');
        footerSection.removeClass('dark-mode').addClass('is-primary');
        optionSection.removeClass('dark-mode');
        button.removeClass('is-active');
        icon.removeClass('fa-toggle-on').addClass('fa-toggle-off');
    }
}

function toggleModal(name) {

    /*
     * name      : toggleModal()
     * function  : Simple function to toggle a modal box
     * input     : name - name of modal box
     * */

    var modal=$('#modal-'+name);
    if(modal.hasClass('is-active')) {
        modal.removeClass('is-active');
    }
    else{
        modal.addClass('is-active');
    }
}

$('.codenicely-bookmark-me').click(function(e) {

    /*
     * function  : Bookmark
     * input     : name - name of modal box
     * credits   : http://stackoverflow.com/questions/37026847/add-bookmark-this-page-button-2016
     * */

    e.preventDefault();
    var bookmarkURL = window.location.href;
    var bookmarkTitle = document.title;

    if ('addToHomescreen' in window && window.addToHomescreen.isCompatible) {
        // Mobile browsers
        addToHomescreen({ autostart: false, startDelay: 0 }).show(true);
    } else if (window.sidebar && window.sidebar.addPanel) {
        // Firefox version < 23
        window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
    } else if ((window.sidebar && /Firefox/i.test(navigator.userAgent)) || (window.opera && window.print)) {
        // Firefox version >= 23 and Opera Hotlist
        $(this).attr({
            href: bookmarkURL,
            title: bookmarkTitle,
            rel: 'sidebar'
        }).off(e);
        return true;
    } else if (window.external && ('AddFavorite' in window.external)) {
        // IE Favorite
        window.external.AddFavorite(bookmarkURL, bookmarkTitle);
    } else {
        // Other browsers (mainly WebKit - Chrome/Safari)
        alert('Pease press ' + (/Mac/i.test(navigator.userAgent) ? 'CMD' : 'Strg') + ' + D to add this page to your favorites.');
    }

    return false;
});

$(function() {
    
    /*
     * function     : smooth scroll when clicking id href links
     * credits      : https://css-tricks.com/snippets/jquery/smooth-scrolling/
     * */
    
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$.fn.extend(

    /*
     * function     : animateCSS - Extended Function -
     * input        : name - name of modal box
     * credits      : https://daneden.github.io/animate.css/
     * */

    { animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd,
            function() { $(this).removeClass('animated ' + animationName); });
    }
    });
