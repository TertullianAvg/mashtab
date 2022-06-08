<template>
   <header class="header">
                <a href="/" class="header__logo">
                    <img src="../assets/logo.png" alt="logo">
                </a>
                <nav class="header__menu">
                    <a href="/about">О компании</a>
                    <a href="/techical">Техника</a>
                    <a href="/service">Сервис</a>
                    <a href="/parts">Запчасти</a>
                    <a href="/contacts">Контакты</a>
                </nav>
                <div class="header__button">
                    <button class="button" @click="showPopup">Заказать звонок</button>
                </div>   
            </header>
</template>

<script>


export default {
  name: 'HeaderBar',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
    margin: 0 170px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    padding: 24px 0;
}

.header__logo {
    margin-right: 140px;
}
.header__menu {
    display: flex;
    max-width: 700px;
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
.btn:hover {
    background-color:rgb(157, 18, 18);
}
</style>
