// Chat stylesheet
/* eslint-disable */
import style from '../static/stylesheet/application.styl';
/* eslint-enable */

// Chat script
import Chat from './views/Chat';

// Instance app
const App = new Chat('#app');

// Call app
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
