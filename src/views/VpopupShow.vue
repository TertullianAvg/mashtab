<template>
  <div class="wrapper" ref="wrapper">
    <div class="container">
            
            <div class="request__row">
                <div class="request__left">
                 
                  <h2 class="header-block__title">Оставить заявку на обслуживание</h2>
                  
                  
                    <form action="../components/mail/send.php" class="request__form" method="POST">
                        <input name="name" type="text" class="input-text input-text_request" placeholder="Имя">
                        <input name="phone" type="text" class="input-text input-text_request" placeholder="Телефон">
                        <input name="email" type="text" class="input-text input-text_request" placeholder="email">
                        <textarea name="text"  class="textarea" placeholder="Напишите, что вас интересует?"></textarea>
                        <p class="input-text_request input-text_request_text">Нажимая на кнопку, я подтверждаю свое согласие на обработку введенных персональных данных</p>
                        <div class="request__button">
                           <button class="button" @click="closePopup">Отправить</button>
                        </div>
                    </form>
                </div>
                <div class="request__right">
                    <p class="text">Наши менеджеры свяжутся с вами в ближайшее время</p>
                    <p class="text">Также вы можете связаться с нами по тел.  <a href="tel:89600001234" class="phone"> 8 960 000 12 34</a></p>
                </div>
            </div>
        </div>
 
  </div>
</template>

<script>
export default {
methods:{
 closePopup() {
            this.isVisible = false;
}
}
}

</script>

<style scoped>

.wrapper {
  position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(23, 23, 24, 0.897);
    z-index: 1  ;
    height: 100%;
    width: 100%;
  
}
.header-block__title {
  margin-bottom: 40px;
}
.form {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.input-text {
    border: 1px solid rgb(157, 18, 18);
    border-radius: 6px; 
    color: #453B47;
    font-size: 16px;
    line-height: 100%;
    font-weight: 300;
    padding: 18px;
    box-sizing: border-box;
}
.form .input-text {
    width: 100%;
    margin-right:  24px;
    box-sizing: border-box;
    max-width: 270px;
}
.request__row {
    display: flex;
    background: rgb(255, 253, 253);
    padding: 20px;
    border-radius: 6px;
}
.request__form {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.input-text_request:not(:last-child) {
    margin-bottom: 24px;
}
.input-text_request_text {
    max-width: 492px;
    width: 100%;
    font-size: 14px;
    line-height: 120%;
}
.request__right {
  width: 50%;
  margin-left: 40px;
  
    
}
.text {
    font-size: 32px;
    font-weight: 400;
    max-width: 590px;
    width: 100%;
    color: #6c6c6c;
    line-height: 140%;
    margin-top: 40px;
}
.phone {
    color: #343434;
    font-weight: 500;
} 
.input-text_request_ta {
    min-height: 160px;
    height: 100%;
}
.textarea {
    border: 1px solid rgb(157, 18, 18);
    border-radius: 6px; 
    color: #453B47;
    font-size: 16px;
    line-height: 100%;
    padding: 20px;
    height: 162px;
    box-sizing: border-box;
    font-family: inherit;
    resize: none; 
    margin-bottom: 24px;
}
.textarea::placeholder {
    font-size: 16px;
    
}
.button {
    display: inline-block;
    width: 225px;
    background-color: rgb(191, 41, 41);
    text-align: center;
    padding: 20px 0;
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    color: #fff;
    border-radius: 8px;
}
.button:hover {
    background-color:rgb(157, 18, 18);
    box-shadow: 0 5px 30px 0 rgba(0,0,0,0.2);
}
.request__button .button {
    max-width: 300px;
    width: 100%;
    
}
.request__button .btn:hover {
    box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
}
.cl-btn-6 {
    position: relative;
    margin: 20px auto;
    width: 70px;
    cursor: pointer;
}
.cl-btn-6-in {
    width: inherit;
    text-align: center;
}
.cl-btn-6-txt { 
    font-size: 13px; 
    line-height: 40px;
    font-weight: bold;
    text-transform: uppercase;
    color: #337AB7;
    transition: all .3s ease-in;
    opacity: 0;
    cursor: pointer;
    font-family: Verdana;
}
.cl-btn-6-in:before, .cl-btn-6-in:after {
    position: absolute;
    content: '';
    height: 4px;
    width: inherit;
    background: #337AB7;
    left: 0;
    transition: all .3s ease-in;
}
.cl-btn-6-in:before {
    top: calc(50% - 4px); 
    transform: rotate(45deg);  
}
.cl-btn-6-in:after {  
    bottom: 50%;
    transform: rotate(-45deg);  
}
.cl-btn-6:hover .cl-btn-6-txt {
    opacity: 1;
}
.cl-btn-6:hover .cl-btn-6-in:before,
.cl-btn-6:hover .cl-btn-6-in:after {
    transform: rotate(0);
}
.cl-btn-6:hover .cl-btn-6-in:before {
    top: 0;
}
.cl-btn-6:hover .cl-btn-6-in:after {
    bottom: 0;
}
.head_container {
  display: flex;
}
</style>