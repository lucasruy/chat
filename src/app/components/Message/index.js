import MessageTemplate from '../../template/MessageTemplate';

class Message {
  constructor() {
    this.messageList = [];
    this.messageInput = document.querySelector('.field--send');
    this.event = new Event('MessageSended');
  }

  create() {
    const item = document.createElement('LI');

    item.setAttribute('class', 'messages__list__item');
    item.innerHTML = MessageTemplate(this.messageInput.value, new Date());

    return item;
  }

  submit() {
    const messageWrapper = document.querySelector('.messages__list');
    const messageForm = document.querySelector('.messages__input');

    messageForm.addEventListener('submit', (e) => {
      e.preventDefault();

      messageWrapper.appendChild(this.create());

      this.messageList.push(this.create());
      this.messageInput.value = '';

      messageForm.dispatchEvent(this.event);
    }, false);
  }

  // update() {
  //   const target = document.querySelector('.messages__list');

  //   const onChange = (mutations) => {
  //     mutations.forEach((mutation) => {
  //       console.log(mutation.type);
  //     });
  //   };

  //   const appObserver = new MutationObserver(onChange);
  //   appObserver.observe(target, { childList: true });
  // }

  update() {
    const messageWrapper = document.querySelector('.messages__list');
    this.messageInput.addEventListener('MessageSended', () => {
      console.log('MessageSended');
    });
  }

  init() {
    this.submit();
    this.update();
  }
};

export default Message;
