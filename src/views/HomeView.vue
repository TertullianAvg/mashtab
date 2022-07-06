<template>

    <div class="carusel">
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/car1.png" height="900" width="100%" class="d-block w-300" alt="дубай">
    </div>
    <div class="carousel-item">
      <img src="../assets/car2.png" height="900" width="100%"  class="d-block w-300" alt="турция">
    </div>
    <div class="carousel-item">
      <img src="../assets/car3.png"  height="900" width="100%"  class="d-block w-300" alt="альпы">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>




<section class="section section-service">
  <div class="container">
    <div class="header__block">
    <h2 class="title">В нашей компании вы можете получить полный спектр услуг</h2>
    </div>
    <div class="frow">
    <div class="service__column">
      <div class="service__item item-service">
      <div class="item-service__icon">
        <img src="../assets/checkmark.svg" alt="checkmark">
      </div>
      <div class="item-service__body">
        <div class="item-service__text">Всесторонняя диагностика</div>
      </div>
    </div>
    <div class="service__item item-service">
      <div class="item-service__icon">
        <img src="../assets/checkmark.svg" alt="checkmark">
      </div>
      <div class="item-service__body">
        <div class="item-service__text">Ремонт и ТО</div>
      </div>
    </div>
    <div class="service__item item-service">
      <div class="item-service__icon">
        <img src="../assets/checkmark.svg" alt="checkmark">
      </div>
      <div class="item-service__body">
        <div class="item-service__text">Капитальный ремонт двигателя</div>
      </div>
    </div>
    <div class="service__item item-service">
      <div class="item-service__icon">
        <img src="../assets/checkmark.svg" alt="checkmark">
      </div>
      <div class="item-service__body">
        <div class="item-service__text">Ремонт коробки передач</div>
      </div>
    </div>
    <div class="service__item item-service">
      <div class="item-service__icon">
        <img src="../assets/checkmark.svg" alt="checkmark">
      </div>
      <div class="item-service__body">
        <div class="item-service__text">Бортировка шин</div>
      </div>
    </div>
    <div class="service__item item-service">
      <div class="item-service__icon">
        <img src="../assets/checkmark.svg" alt="checkmark">
      </div>
      <div class="item-service__body">
        <div class="item-service__text">Ремонт гидравлической системы</div>
      </div>
    </div>
    </div>
    <div class="service__column">
    <div class="service__item item-service">
      <div class="item-service__icon">
        <img src="../assets/checkmark.svg" alt="checkmark">
      </div>
      <div class="item-service__body">
        <div class="item-service__text">Восстановление работоспособности навесного оборудования</div>
      </div>
    </div>
    <div class="service__item item-service">
      <div class="item-service__icon">
        <img src="../assets/checkmark.svg" alt="checkmark">
      </div>
      <div class="item-service__body">
        <div class="item-service__text">Восстановление электрических систем</div>
      </div>
    </div>
    <div class="service__item item-service">
      <div class="item-service__icon">
        <img src="../assets/checkmark.svg" alt="checkmark">
      </div>
      <div class="item-service__body">
        <div class="item-service__text">Подбор Б/У техники на вторичном рынке</div>
      </div>
    </div>
    <div class="service__item item-service">
      <div class="item-service__icon">
        <img src="../assets/checkmark.svg" alt="checkmark">
      </div>
      <div class="item-service__body">
        <div class="item-service__text">Подбор покупателя для продажи вашей техники на вторичном рынке</div>
      </div>
    </div>
    </div>
    </div>
    <div class="section__button">
               <button  id="button" class="button" @click="showPopup">Подать заявку</button>
              </div>  
  </div>
</section>
<section class="section section-whyweare">
        <div class="container">
            <div class="whyweare__header header-block">
                <h2 class="header-block__title">Почему нас любят и нам доверяют?</h2>
                <div class="header-block__sub-title">Ответом на этот вопрос служит множество преимуществ сотрудничества с нами</div>
            </div>
            <div class="whyweare__items">
                <div class="whyweare__item item-whyweare">
                    <div class="item-whyweare__number">01</div>
                     <div class="item-whyweare__title">Экономим ваше время</div>
                     <div class="item-whyweare__text">
                    Осуществление быстрого и качественного ремонта за счет высококвалифицированных специалистов.
                    </div>
                </div>
                <div class="whyweare__item item-whyweare">
                    <div class="item-whyweare__number">02</div>
                     <div class="item-whyweare__title">Гарантия надежности</div>
                     <div class="item-whyweare__text">
                      Гарантия на наши работы состовляет до полугода.
                    </div>
                </div>
                <div class="whyweare__item item-whyweare">
                    <div class="item-whyweare__number">03</div>
                     <div class="item-whyweare__title">Доступность</div>
                     <div class="item-whyweare__text">
                     Мы предоставляем вариативность в выборе.Качество запчестей и ценовая категоря согласовываются с заказчиком.
                    </div>
                </div>
                <div class="whyweare__item item-whyweare">
                    <div class="item-whyweare__number">04</div>
                     <div class="item-whyweare__title">Помощь в продажи и покупки Б\У техники</div>
                     <div class="item-whyweare__text">
                      Наши специалисты подберут покупателя для вашей техники. А также подберут для вас Б/У технику на вторичном рынке и сделают предпродажную подготовку.
                    </div>
                </div>
                <div class="whyweare__item item-whyweare">
                    <div class="item-whyweare__number">05</div>
                     <div class="item-whyweare__title">Выгода в масштабе</div>
                     <div class="item-whyweare__text">
                      Крупным партнерам мы предоставляем специальные условия сотрудничества.
                    </div>
                </div>
                <div class="whyweare__item item-whyweare">
                    <div class="item-whyweare__number">06</div>
                     <div class="item-whyweare__title">Удобство оплаты</div>
                     <div class="item-whyweare__text">
                        Наличными, картой при получении, в рассрочку, по счету для юрлиц
                    </div>
                </div>
                <div class="whyweare__item item-whyweare">
                    <div class="item-whyweare__number">07</div>
                     <div class="item-whyweare__title">Сотрудничаем с JAC</div>
                     <div class="item-whyweare__text">
                      Мы являемся официальным дилером JAC. Предоставляем гарантийное и пост-гарантийное сопровождение данного предприятия.
                    </div>
                </div>
                <div class="whyweare__item item-whyweare">
                    <div class="item-whyweare__number">08</div>
                     <div class="item-whyweare__title">Личная консультация</div>
                     <div class="item-whyweare__text">
                      Наши менеджеры всегда помогут определиться с лучшим выбором услуг.
                    </div>
                </div>
            </div>
        </div>
            <div class="section__button">
               <button  id="button" class="button" @click="showPopup">Заказать звонок</button>
              </div>   
      </section>
      <section class="section section-request">
        <div class="container">
            <h2 class="header-block__title">Оставить заявку на обслуживание</h2>
            <div class="request__row">
                <div class="request__left">
                    <form action="../components/mail/send.php" class="request__form" method="POST">
                        <input name="name" type="text" class="input-text input-text_request" placeholder="Имя">
                        <input name="phone" type="text" class="input-text input-text_request" placeholder="Телефон">
                        <input name="email" type="text" class="input-text input-text_request" placeholder="email">
                        <textarea name="text"  class="textarea" placeholder="Напишите, что вас интересует?"></textarea>
                        <p class="input-text_request input-text_request_text">Нажимая на кнопку, я подтверждаю свое согласие на обработку введенных персональных данных</p>
                        <div class="request__button">
                           <button class="button">Заказать звонок</button>
                        </div>
                    </form>
                </div>
                <div class="request__right">
                    <p class="text">Наши менеджеры свяжутся с вами в ближайшее время</p>
                    <p class="text">Также вы можете связаться с нами по тел.  <a href="tel:89600001234" class="phone"> 8 960 000 12 34</a></p>
                </div>
            </div>
        </div>
      </section>
      <VpopupShow v-if="isVisible"/>
</template>

<script>
import VpopupShow from '../views/VpopupShow.vue'

export default {
  name: 'HomeView',
  props: {
    msg: String
  },
  components: { VpopupShow},
     data() {
       return {
           isVisible: false
       };
   },
   
    methods: {
        showPopup() {
            this.isVisible = true;
        },
        closePopup() {
            this.isVisible = false;
        }
    }

   
   
  }
   
  

</script>
<style scoped>


.section {
  margin-bottom: 120px;
  font-family: 'Montserrat', sans-serif;
}
.container {
  max-width: 1430px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  box-sizing: border-box;
}
.frow {
  display: flex;
  align-items: top;
  justify-content: center;

}
.header__block {
  text-align: center;
}
.header-block__title {
  margin-bottom: 30px;
}
.header-block__sub-title {
  font-size: 20px;
  margin-bottom: 60px;
  color:#6c6c6c;
}
.title {
  font-size: 48px;
  font-weight: 500;
  margin: 80px auto;
  max-width: 780px;
  width: 100%;
}
.service__column {
  max-width: 560px;
  width: 100%;
  
}
.service__item {
  margin-bottom: 16px;
  
}
.item-service {
  display: flex;
}
.item-service__icon {
  flex: 0 0 30px;
  vertical-align: middle;
}
.item-service__body {
  flex: 1 1 auto;
  padding-left: 20px;
}

.item-service__text {
  font-size: 24px;
  font-weight: 500;
  color: #6c6c6c;

}
/-------WHYWEARE------/
.section-whyweare {
    text-align: left;
   
}
.whyweare__items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 190px;
    grid-gap: 120px 50px;
    text-align: left;
    margin-bottom: 120px;
 }
.item-whyweare__number {
    text-stroke: 1px rgb(157, 18, 18);
    -webkit-text-stroke: 1px rgb(157, 18, 18);
    color: transparent;
    font-weight: 400;
    font-size: 48px;
    line-height: 100%;
    margin-bottom: 16px;
    font-family: 'Rubik', sans-serif;
}
.item-whyweare__title {
    max-width: 277px;
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    margin-bottom:20px;
    
}
.item-whyweare__text {
    line-height: 140%;
    font-size: 16px;
    font-weight: 400;
    max-width: 262px;
    width: 100%;
    margin-bottom: 20px;
}
.section__button {
  text-align: center;
  margin: 60px;
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
.section__button .button {
    max-width: 300px;
    width: 100%;
    
}
.section__button .btn:hover {
    box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
}
/--------REQUEST----------/

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
#carusel {


}


</style>