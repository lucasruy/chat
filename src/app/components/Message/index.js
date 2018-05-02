import MessageTemplate from '../../template/MessageTemplate';

class Message {
  constructor() {
    this.messageList = [];
    this.messageForm = document.querySelector('.messages__input');
    this.messageInput = document.querySelector('.messages__input .field--send');
    this.event = new Event('MessageSended');
  }

  create() {
    const item = document.createElement('LI');

    item.setAttribute('class', 'messages__list__item');
    item.innerHTML = MessageTemplate(this.messageInput.value);

    return item;
  }

  submit() {
    const messageWrapper = document.querySelector('.messages__list');

    this.messageForm.addEventListener('submit', (e) => {
      e.preventDefault();

      messageWrapper.appendChild(this.create());

      this.messageList.push(this.create());

      this.messageInput.value = '';
      this.messageInput.focus();

      this.messageForm.dispatchEvent(this.event);
    }, false);
  }

  update() {
    this.messageForm.addEventListener('MessageSended', () => {
      // Capture new messages dispatched
    });
  }

  init() {
    this.submit();
    this.update();
  }
}

export default Message;
