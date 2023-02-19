import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerIframe = document.querySelector('#vimeo-player');

const player = new Vimeo(playerIframe);

const updateCurrentTime = throttle(currentTime => {
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);

player.on('timeupdate', function (data) {
  const currentTime = data.seconds;

  updateCurrentTime(currentTime);
});

if (localStorage.getItem('videoplayer-current-time')) {
  const currentTime = localStorage.getItem('videoplayer-current-time');

  player.setCurrentTime(currentTime);
}
