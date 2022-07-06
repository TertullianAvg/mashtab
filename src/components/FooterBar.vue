<template>
   
  <div id="container" class="w-100">
    
    <div class="footer-top">
      <div class="footer-top__body">
        <div class="footer-top__column">
          <div class="footer-top__text">Приглашаем оценить наши возможности</div> 
        </div>  
        <div class="footer__column">
        <div class="footer__contacts contact-footer">
          <a href="telto:89600001234" class="contact-footer_item contact-footer_number">8(960)0001234</a>
          <a href="mailto:ss@msb-r.ru" class="contact-footer_item contact-footer_mail">ss@msb-r.ru</a>
        </div>
      </div>
    </div>
    </div>
    <div class="footer-bottom">
        <div class="footer-bottom__title">Mashtab-R</div>
        <div class="footer-bottom__map">
          <a href="/contacts" class="footer__map">140073,М.О.,Люберецкий район,пгт.Томилино,Рязанское шоссе,4</a>
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
   padding: 0 15px;
   box-sizing: border-box;
 }

.footer-top__body {
  display:flex;
  justify-content: space-between;
  align-items: top;
  margin:0 15px 0 15px;
  padding: 30px 0;
}
.footer-top__text {
  color: white;
  font-size: 20px;
  font-weight: bold;
}
.footer__contacts {
  display:flex;
  flex-direction: column;
}
.contact-footer_item {
  color: white;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  text-decoration: none;
  margin-bottom: 40px;
}
.contact-footer_item:hover {
  text-decoration: underline;
}
.footer-bottom {
  text-align: center;
  background-color:rgb(174, 18, 18);
  padding:20px 0;
  color: white;
  line-height: 100%;
}
.footer-bottom__title {
  font-size: 16px;
  line-height: 100%;
  font-weight: 500;
  margin-bottom: 12px;
}
.footer__map {
  color: white;
  font-size: 16px;
  line-height: 100%;
  text-decoration: none;
  font-weight: 400;
}
.footer__map:hover {
  text-decoration: underline;
}
</style>