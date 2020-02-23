 <template>
  <v-navigation-drawer
    mobile-break-point="4000"
    :value="drawer"
    @input="updateDrawerState"
    app
    right
    disable-route-watcher
    width="450px"
    clipped>
    <transition
      leave-active-class="animated slideOutRight"
      enter-active-class="animated slideOutLeft">
        <router-view
          @toggleCloseDrawer="closeDrawer">
        </router-view>
    </transition>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: Boolean
  },
  methods:{
    updateDrawerState(event){
      if(!event){
        this.$emit("closeDrawer")
      }
      else{
        this.$emit("openDrawer")
      }
    },
    closeDrawer(){
      this.$emit("closeDrawer")
    }
  }
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css";
.page{
  position: fixed;
  width: inherit
}

</style>