import ChatTemplate from '../../template/ChatTemplate';
import Message from '../../components/Message';

class Chat {
  constructor(element) {
    this.selector = document.querySelector(element);
    this.messageItem = new Message();
  }

  send() {
    this.messageItem.init();
  }

  init() {
    this.selector.innerHTML = ChatTemplate();
    this.send();
  }
}

export default Chat;
