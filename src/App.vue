<template>
    
    <HeaderBar/>
    <VpopupShow v-if="isVisible"/>
    <router-view/>
   
    <FooterBar/>

  

</template>
<script>

import HeaderBar from './components/HeaderBar.vue'
import FooterBar from './components/FooterBar.vue'
import VpopupShow from './views/VpopupShow.vue'







export default {
    
    components: { HeaderBar, FooterBar,VpopupShow},
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

<style>
*{
    margin: 0;
    padding: 0;
    
}
</style>
