import HapticPlayer from './src/HapticPlayer';

// laptop websocket server address
const wsServer = 'ws://'; // insert your laptop websocket server address here

// connect to the haptic player
const tactJs = new HapticPlayer(wsServer);

// add event listener to tactjs
tactJs.addEventListener((event) => {
  console.log(event);
});

