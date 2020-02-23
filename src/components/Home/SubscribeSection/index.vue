<template>
  <section>
    <v-container>
      <v-row align="center" class="mt-12 pl-5 pr-5">
        <v-card flat color="#1597AD" width="100%" class="d-flex align-center pa-12 mt-12">
          <v-col class="d-flex justify-center">
            <div
              class="white--text"
              style="
            font-size: 20px; 
            max-width: 350px"
            >Subscribe to the newsletters so as not to miss any promotion</div>
          </v-col>

          <v-col>
            <v-form class="d-flex align-center">
              <v-row align="center">
                <v-col sm="7">
                  <v-text-field class="mt-7" outlined solo rounded dense flat label="Email"></v-text-field>
                </v-col>
                <v-col sm="3">
                  <v-btn depressed medium rounded style="font-size: 10px">Subscribe</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-card>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
</style>