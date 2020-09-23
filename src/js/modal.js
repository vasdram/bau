class Modal {

  constructor(options) {
    this.timeout = options.timeout || 200
    // this.content = options.content || ""
    this.header = options.header || ""
    this.target = options.target || ""
    // this.isLarge = options.isLarge || false
    // this._create()
    this._closeHandler()

  }

  // _create() {
  //   this.modal = document.createElement("div")
  //   this.modal.classList.add('modal')
  //   this.modal.insertAdjacentHTML("afterbegin",
  //     `
  //     <div class="modal__overlay" data-close="true"></div>
  //       <div class="modal__body ${this.isLarge ? "modal__body_large" : ""}">
  //           <div class="modal__close" data-close="true"></div>
  //           <div class="modal__header">${this.header}</div>
  //           ${this.content}
  //       </div>
  //     `
  //   )
  //   document.body.appendChild(this.modal)
  //   this.modal.addEventListener('click', (e) => {
  //     if(!e.target.dataset.close) return
  //     this.close()
  //   })
  // }

  _closeHandler() {
    if(!document.querySelector(`.${this.target}`) ) return;

      document.querySelector(`.${this.target}`).addEventListener('click', (e) => {
        if(!e.target.dataset.close) return
        this.close()
      })

  }

  open() {
     document.querySelector(`.${this.target}`).classList.add('open')
     document.querySelector(`.${this.target}`).classList.add('animate__fadeIn', 'animate__animated')
    setTimeout(() => {
      document.querySelector(`.${this.target}`).classList.remove('animate__fadeIn', 'animate__animated')
    }, this.timeout)
  }

  close() {
    document.querySelector(`.${this.target}`).classList.remove('open')
    document.querySelector(`.${this.target}`).classList.add('animate__fadeOut', 'animate__animated')
    setTimeout(() => {
      document.querySelector(`.${this.target}`).classList.remove('animate__fadeOut', 'animate__animated')
      this.isClose = true
    }, this.timeout)
  }

}

// const sertContent = `<div class="sert__modal">
//                     <img src="../assets/images/sert.jpg" alt="">
//                 </div>`;
// const orderCallFormContent = `<form class="form" action="">
// <div class="form__line">
//     <div class="input__line">
//           <input type="text" class="input-txt" placeholder="Имя" required />
//     </div>
//     <div class="input__line">
//           <input type="text" class="input-txt" placeholder="Фамилия" required />
//     </div>
// </div>
// <div class="form__line">
//     <div class="input__line">
//           <input type="text" class="input-txt" placeholder="Компания"  />
//     </div>
// </div>
// <div class="form__line">
//     <div class="input__line">
//           <input type="text" class="input-txt input-phone"  placeholder="+7 (___) ___ __ __"   required />
//     </div>
// </div>


// <div class="form__btn-line">
//     <button class="btn btn_green">Отправить</button>
// </div>
// </form>`;
// const feedbackFormContent = `<form class="form" action="">
// <div class="form__line">
//     <div class="input__line">
//           <input type="text" class="input-txt" placeholder="Имя" required />
//     </div>
//     <div class="input__line">
//           <input type="text" class="input-txt" placeholder="Фамилия" required />
//     </div>
// </div>
// <div class="form__line">
//     <div class="input__line">
//           <input type="text" class="input-txt" placeholder="Компания"  />
//     </div>
// </div>
// <div class="form__line">
//     <div class="input__line">
//           <input type="text" class="input-txt input-phone" placeholder="+7 (___) ___ __ __" required />
//     </div>
// </div>
// <div class="form__line">
//     <div class="input__line">
//         <textarea name="" class="input-txt" placeholder="Сообщение" required id="" cols="30" rows="10"></textarea>
//     </div>
// </div>

// <div class="form__line">
//     <div class="input__line">
//         <label class="checkbox">
//             <input type="checkbox" class="checkbox__input" name="" id="">
//             <div class="checkbox__img"></div>
//             <a href="snopd.html" class="checkbox__text">Cогласие на обработку персональных данных</a>
//         </label>
//     </div>
// </div>

// <div class="form__btn-line">
//       <button class="btn btn_green">Отправить</button>
//   </div>
// </form>`


export const feedbackForm = new Modal({
  header: "Свяжитесь с нами",
  target: "feedbackForm"
})

// export const orderCallForm = new Modal({
//   header: "Мы свяжемся с вами",
//   target: "orderCallForm"
// })

export const sertModal = new Modal({
  header: "Сертификат",
  target: "sertModal"
})


jQuery(document).ready(function(){
	$('.input-phone').mask('+0 (000) 000 00 00');
});
