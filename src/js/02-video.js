import Vimeo from '@vimeo/player';

const playerIframe = document.querySelector('#vimeo-player');

const player = new Vimeo(playerIframe);

player.on('timeupdate', function (data) {
  const currentTime = data.seconds;

  localStorage.setItem('videoplayer-current-time', currentTime);
});

if (localStorage.getItem('videoplayer-current-time')) {
  const currentTime = localStorage.getItem('videoplayer-current-time');

  player.setCurrentTime(currentTime);
}
