<template>
   <div class="main_container"> 
  <div id="container" class="w-100">
    
    <div class="footer__body">
      <div class="footer__column">
        <div class="text1">Приглашаем оценить наши возможности</div>    
        <div class="footer__phone">
          <a href="" class="namber">8(960)0001234</a>
        </div>
        <div class="footer__map">
          <a href="" class="map">140073,М.О.,Люберецкий район,пгтюТомилино,Рязанское шоссе,4</a>
        </div>
      </div>
      <div class="footer__column">
        <div class="text1">
        <a href="" class="mail">ss@msb-r.ru</a>
        </div>
        <div class="footer__map">
        <a href="" class="mail2">www.mashtab-r.ru</a>
        </div>
      </div>
    </div>
    
  
  
  </div>
   </div>
</template>

<script>
export default {
name: 'FooterBar',
  props: {
    msg: String
  },
}
</script>

<style scoped>
 #container {
   background-color:firebrick;
 }
 
 /* background-color: firebrick;
  height: 200px;
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
  flex-direction: row;
  display:flex;
  justify-content: space-between;
  padding: 10px;
  color: white;*/
  
  /* Высота footer по умолчанию */


.main_container {
    display:flex;

}
.footer__body {
  display:flex;
  justify-content: space-between;
  margin:0 10px 0 10px;
  padding: 30px 0;
}
.text1 {
  color: white;
  font-size: 18px;
  font-weight: bold;
}

</style>