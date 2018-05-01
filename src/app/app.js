// Chat stylesheet
import style from "../static/stylesheet/application.styl";

// Chat script
import Chat from "./views/Chat";

// Instance app
let App = new Chat('#app');

// Call app
document.addEventListener('DOMContentLoaded', function(){
  App.init();
});
