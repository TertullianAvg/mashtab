<template>
    
    <HeaderBar/>
    <VpopupShow hidden/>
    <router-view/>
   
    <FooterBar/>

  

</template>
<script>

import HeaderBar from './components/HeaderBar.vue'
import FooterBar from './components/FooterBar.vue'
import VpopupShow from './views/VpopupShow.vue'







export default {
    
    components: { HeaderBar, FooterBar,VpopupShow}

}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
</style>
