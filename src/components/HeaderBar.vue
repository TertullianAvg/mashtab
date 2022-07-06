<template>
   <header class="header">
                <a href="/" class="header__logo">
                    <img src="../assets/logo.png" alt="logo">
                </a>
                <nav class="header__menu">
                    <a href="/about">О компании</a>
                    <a href="/service">Сервис</a>
                    <a href="/contacts">Контакты</a>
                    <a href="/techical">Техника</a>
                </nav>
                <div class="header__button">
                    <button class="button" @click="showPopup">Заказать звонок</button>
                </div>   
            </header>
<VpopupShow v-if="isVisible"/>
</template>

<script>

import VpopupShow from '../views/VpopupShow.vue'
export default {
  name: 'HeaderBar',
  props: {
    msg: String
  },
  components: {VpopupShow},
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
    max-width: 1530px;
    padding: 24px 15px;
    margin:0 auto;
    display: flex;
    align-items: center; 
    box-sizing: border-box;
}
@media(max-width:1087.98px){
    .header{
        max-width: 970px;
    }
    .header__logo {
    margin-right: 40px;
}
.header__logo img{
    height:90px;
    width: 180px;
}

.header__menu a {
    
    font-size: 16px;
   
}
.header__menu{
    max-width: 350px;
    width: 100%;
}
.button {
    width: 180px;
    padding: 20px 0;
    font-size: 18px;
}
}

.header__logo {
    margin-right: auto; 
  
}
.header__logo img{
    height:200px ;
}
.header__menu {
    display: flex;
    max-width: 500px;
    width: 100%;
    justify-content: space-between;
}
.header__menu a {
    font-weight: 400;
    font-size: 24px;
    color:rgb(191, 41, 41);
    
}
a {
    text-decoration: none;
}
.header__menu a:hover {
    color:rgb(157, 18, 18);
    text-decoration: underline;
}
.header__button {
    margin-left: auto;
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
}
</style>
