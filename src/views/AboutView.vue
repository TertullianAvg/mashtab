<template>
 <div class="container">
 <p> Данный раздел находится в разработке.</p>
 <p>В скором времени мы представим его для вас!</p>

 </div> 
 <img src="../assets/logo2.png" class="alt_logo">
</template>
<script>


export default {
 name: 'AboutView',
  props: {
    msg: String
  },
  path: 'about'
}
</script>
<style scoped>
.alt_logo {
  left:50%
}
</style>