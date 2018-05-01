import ChatTemplate from "../../template/ChatTemplate";
import Message from "../../components/Message";

class Chat {
  constructor(element) {
    this.selector = document.querySelector(element);
  }

  send() {
    const messageItem = new Message();
    messageItem.init();
  }

  init() {
    this.selector.innerHTML = ChatTemplate();
    this.send();
  }
}

export default Chat;
