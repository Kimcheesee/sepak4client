<template>
  <v-footer padless class="mt-12" style="background-color: #fcfcfc">
    <v-container>
      <v-card flat color="#fcfcfc" class="mt-8">
        <v-row>
          <v-col cols="6">
            <div class="pl-10">
              <v-img width="75px" src="../../assets/1-01.png" />
              <div
                class="mt-5 pl-4 pr-12"
                style="
                    font-size: 12px"
              >We encourage producers to promote more creative design concepts rather than copy from others, and help them to bring their products to bigger markets</div>
              <div class="mt-5 ml-2">
                <v-btn
                  v-for="icon in icons"
                  :key="icon.key"
                  icon
                  max-width="30"
                  max-height="30"
                  rounded
                  text
                  class="mr-5"
                >
                  <v-icon color="gray" dense size="20px">{{ icon }}</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>

          <v-col>
            <v-row>
              <v-col>
                <div>
                  <div class="font-weight-bold py-2 mb-5 subtitle-2">Shopping Online</div>
                  <div class="mb-1 caption">Bags</div>
                  <div class="mb-1 caption">Accessories</div>
                  <div class="mb-1 caption">Clothes</div>
                  <div class="mb-1 caption">Wallet</div>
                </div>
              </v-col>
              <v-col>
                <div>
                  <div class="font-weight-bold py-2 mb-5 subtitle-2">Information</div>
                  <div class="mb-1 caption">Shop</div>
                  <div class="mb-1 caption">Why Us?</div>
                  <div class="mb-1 caption">About Us</div>
                </div>
              </v-col>
              <v-col>
                <div>
                  <div class="font-weight-bold py-2 mb-5 subtitle-2">Contact</div>
                  <div class="mb-1 caption">goodcraft.gifts@gmail.com</div>
                  <div class="mb-1 caption">Hotline: (+855) 17 909 022</div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-container>

    <v-card-text class="text-center px-0 mb-3 grey--text overline">
      <v-divider class="mb-4" />SEPAK - © 2019. ALL RIGHTS RESERVED
    </v-card-text>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: ['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-linkedin-in', 'fab fa-instagram', 'fab fa-youtube']
    }
  }
}
</script>

<style>

</style>