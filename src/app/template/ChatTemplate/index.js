const ChatTemplate = () => {
  return `
    <ul class="messages__list"></ul>

    <form class="messages__input">
      <input type="text" class="field field--send" placeholder="Mensagem" />
      <button type="submit" class="btn btn--send">Enviar</button>
    </form>
  `
};

export default ChatTemplate;
