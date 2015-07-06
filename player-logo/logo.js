(function(window, videojs) {
  videojs.plugin('playerLogo', function(settings) {
    var player = this;
    var big_play_button = player.el().querySelector('.vjs-big-play-button');
    var logo = document.createElement('div');
    logo.style.backgroundImage = 'url(' + settings.img + ')';
    if (!settings.hideWhenInactive) {
      logo.className='vjs-logo';
    }
    else {
      logo.className='vjs-logo hide-inactive';
    }
    if (settings.link) {
      logo.addEventListener('click', function() {
        window.location = settings.link;
      });
      logo.className+=' clickable';
    }
    player.el().insertBefore(logo, big_play_button);
  });
})(window, window.videojs);
