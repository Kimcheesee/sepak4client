<template>
  <section id="showcase" class="d-flex align-center">
    <v-container>
      <v-row class="showcase-items" align="center" justify="center">
        <v-col cols="12" sm="6" md="6" lg="6" class="d-flex justify-center white--text px-6">
          <div>
            <div style="font-size: 80px">សិប្ប</div>
            <div class="yellow--text mt-3" style="
                font-size: 33px">Made with Joy</div>
            <div style="font-size: 33px">Buy with Love!</div>
            <v-btn
              class="mt-8"
              rounded
              x-large
              color="white"
              style="
                color: #0C97AD;
                font-size: 11px"
            >Check More</v-btn>
          </div>
        </v-col>
        <v-col sm="6" md="6" lg="6" class="right-items d-none d-sm-flex">
          <v-row justify="center">
            <!-- <v-responsive
              max-width="350px"
              max-height="350px"
              height="350px" 
              class="right-items-img">
            </v-responsive>-->
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#showcase {
  height: 100vh;
  background-image: url("../../../assets/Banner.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.right-items-img {
  background: white;
  width: 100%;
  height: 100%;
}
</style>