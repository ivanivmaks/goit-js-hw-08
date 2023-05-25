import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player(document.querySelector('iframe'));
player.on(
  'timeupdate',
  throttle(event => {
    const time = event.seconds;
    localStorage.setItem('videoplayer-current-time', time);
  }, 1000)
);

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime);
}
