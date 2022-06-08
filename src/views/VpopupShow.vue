<template>
    <div class="popup_wrapper" ref="popup_wrapper">
        <div class="v-popup">
            <div class="v-popup_header">Заказать звонок</div>
            <div class="v-popup_content">
                <div class="container">
                    <label>Имя*</label><br />
                    <input v-model="Name" type="name" placeholder="Имя"/><br />

                    <label>Телефон*</label><br />
                    <input v-model="phone" name="phone" type="tel" placeholder="+7(___)___-__-__"
                        pattern="\(\d{3}\) \d{3}-\d{2}-\d{2}" required>
                       <br />

                    <label>Email*</label><br />
                    <input v-model="email" type="email" placeholder="example@gmail.com" /><br />
                </div>
            </div>
            <div class="v-popup_footer">
                <button type="submit" class="post">Отправить</button>
            </div>
        </div>
    </div>
</template>

<script>


export default {
   
 name: 'VpopupShow',
  props: {
    msg: String
  },
  path: 'popup',
   
  // data () {
    // Name = '',
     //phone = '',
    // email = '',
   //  popup [ Name, phone, email]
        
   // },


}
    

</script>

<style scoped>
.v-popup {
    position: absolute;
    background-color: #fff;
    width: 793px;
    height: 216px;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 8px;
    box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
        0px 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.v-popup_header {
    background: #fff;
    margin: 24px;

    font-family: "Inter", sans-serif;
    font-size: 24px;
    line-height: 100%;
    color: #111827;
}

.v-popup_content {
    display: block;
    flex-direction: row;
    background: #fff;
}

.v-popup_footer {
    display: flex;
    justify-content: end;
    margin-top: 18px;
    margin-right: 27px;
    margin-bottom: 27px;
    background: #fff;
}

.popup_wrapper {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(107, 114, 128, 0.75);
}

.main_container {
    display: flex;
}

.post {
    width: 170px;
    height: 38px;
    background: #16a34a;
    /* shadow/sm */

    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    color: #fff;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
}
.post:hover{
    background: #fff;
    color:#16a34a;
}

label {
    background-color: #fff;
}

input {
    background-color: #fff;
}
</style>
