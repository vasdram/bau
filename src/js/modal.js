class Modal {
  constructor() {}
  modal = ""
  _create() {
    this.modal = document.createElement("div")
    this.modal.classList.add = 'modal'
    this.modal.insertAdjacentHTML("afterbegin", 
      `
      <div class="modal__overlay"></div>
        <div class="modal__body">
            <div class="modal__close"></div>
            <h1>it,s modal!</h1>
        </div>
      `
    )
    document.body.appendChild(this.modal)
  }
  open() {}
  close() {}
  destroy() {}
}