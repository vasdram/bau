class Modal {
  
  constructor(options) {
    this.timeout = options.timeout || 200
    this.content = options.content || ""
    this.header = options.header || ""
    this.isLarge = options.isLarge || false
    this._create()
  }

  modal = ""
  
  
  _create() {
    this.modal = document.createElement("div")
    this.modal.classList.add('modal') 
    this.modal.insertAdjacentHTML("afterbegin", 
      `
      <div class="modal__overlay" data-close="true"></div>
        <div class="modal__body ${this.isLarge ? "modal__body_large" : ""}">
            <div class="modal__close" data-close="true"></div>
            <div class="modal__header">${this.header}</div> 
            ${this.content}
        </div>
      `
    )
    document.body.appendChild(this.modal)
    this.modal.addEventListener('click', (e) => {
      if(!e.target.dataset.close) return 
      this.close()
    })
  }

  open() {
     this.modal.classList.add('open')
    this.modal.classList.add('animate__fadeIn', 'animate__animated')
    setTimeout(() => {
      this.modal.classList.remove('animate__fadeIn', 'animate__animated')
    }, this.timeout)
  }

  close() {
    this.modal.classList.remove('open')
    this.modal.classList.add('animate__fadeOut', 'animate__animated')
    setTimeout(() => {
      this.modal.classList.remove('animate__fadeOut', 'animate__animated')
      this.isClose = true
    }, this.timeout)
  }

}

const sertContent = `<div class="sert__modal">
                    <img src="../assets/images/sert.jpg" alt="">
                </div>`;
const orderCallFormContent = `<form class="form" action="">
<div class="form__line">
    <div class="input__line">
          <input type="text" class="input-txt" placeholder="Имя" required />
    </div>
    <div class="input__line">
          <input type="text" class="input-txt" placeholder="Фамилия" required />
    </div>
</div>
<div class="form__line">
    <div class="input__line">
          <input type="text" class="input-txt" placeholder="Компания"  />
    </div>
</div>
<div class="form__line">
    <div class="input__line">
          <input type="text" class="input-txt input-phone"  placeholder="+7 (___) ___ __ __"   required />
    </div>
</div>


<div class="form__btn-line">
    <button class="btn btn_green">Отправить</button>
</div> 
</form>`;
const feedbackFormContent = `<form class="form" action="">
<div class="form__line">
    <div class="input__line">
          <input type="text" class="input-txt" placeholder="Имя" required />
    </div>
    <div class="input__line">
          <input type="text" class="input-txt" placeholder="Фамилия" required />
    </div>
</div>
<div class="form__line">
    <div class="input__line">
          <input type="text" class="input-txt" placeholder="Компания"  />
    </div>
</div>
<div class="form__line">
    <div class="input__line">
          <input type="text" class="input-txt input-phone" placeholder="+7 (___) ___ __ __" required />
    </div>
</div>
<div class="form__line">
    <div class="input__line">
        <textarea name="" class="input-txt" placeholder="Сообщение" required id="" cols="30" rows="10"></textarea>
    </div>
</div>
<div class="form__line">
    <div class="input__line">    
        <label class="checkbox">
            <input type="checkbox" class="checkbox__input" name="" id="">
            <div class="checkbox__img"></div>
            <div class="checkbox__text">Отправить копию на почту</div>
        </label>
    </div>
</div>
<div class="form__line">
    <div class="input__line">    
        <label class="checkbox">
            <input type="checkbox" class="checkbox__input" name="" id="">
            <div class="checkbox__img"></div>
            <div class="checkbox__text">Cогласие на обработку персональных данных</div>
        </label>
    </div>
</div>

<div class="form__btn-line">
      <button class="btn btn_green">Отправить</button>
  </div>
</form>`


export const feedbackForm = new Modal({
  content: feedbackFormContent,
  header: "Свяжитесь с нами"
})

export const orderCallForm = new Modal({
  content: orderCallFormContent,
  header: "Мы свяжемся с вами"
})

export const sertModal = new Modal({
  content: sertContent,
  header: "Сертификат",
  isLarge: true
})


jQuery(document).ready(function(){
	$('.input-phone').mask('+0 (000) 000 00 00');
});