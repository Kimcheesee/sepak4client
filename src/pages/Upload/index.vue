<template>
  <main>
    <MainNavBar />
    <section id="merchant-upload-section">
      <MerchantUpload
        :onCancelUpload="onCancelUpload"
        :onSubmitUpload="onSubmitUpload"/>
    </section>
  </main>
</template>

<script>
import MainNavBar from '../../layouts/MainNavBar'
import MerchantUpload from '../../components/MerchantUpload'
export default {
  components:{
    MainNavBar,
    MerchantUpload
  },
  data:()=>({
    tab: null
  }),
  methods:{
    onCancelUpload(){
      this.$router.push('merchant')
    },
    onSubmitUpload(){
      this.$router.push('merchant')
    }
  }

}
</script>

<style scoped lang="scss">
@media screen and (max-width: 600px){
  #merchant-upload-section{
    margin-top: 56px
  }
}

</style>