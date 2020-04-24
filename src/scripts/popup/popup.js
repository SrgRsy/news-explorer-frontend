export default class Popup {
  constructor(container, button, button2) {

      this.container = container;
      this.button = button;
      this.button2 = button2;


      this.open = this.open.bind(this);
      this.close = this.close.bind(this);



      this.button2
          .addEventListener('click', this.open);


      this.button
          .addEventListener('click', this.close);
  }

  open() {
      this.container.classList.add('popup_is-opened');

  }
  close() {
      this.container.classList.remove('popup_is-opened');
  }
}