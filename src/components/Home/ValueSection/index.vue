<template>
  <section>
    <v-container>
      <v-row justify="center" class="mt-12">
        <div style="font-size: 22px" class="font-weight-thin text-center">Why should you choose us?</div>
      </v-row>

      <v-row class="mt-10">
        <v-col cols="6" lg="3" v-for="index in 4" :key="index.id" class="d-flex justify-center">
          <v-card height="250px" flat color="#fff" class="mt-5 d-flex flex-column pr-6 pl-12">
            <!-- Value Icon -->
            <div
              style="
              background: gray; 
              width: 55px; 
              height: 55px;
              border-radius: 10px"
              class="d-flex justify-center"
            >
              <v-icon color="white" dense size="20px" class="nav__icons">fas fa-search</v-icon>
            </div>

            <v-responsive width="250px">
              <!-- Title -->
              <v-card-title class="font-weight-bold body-2 pt-8 pl-0">CSR</v-card-title>
              <!-- Description -->
              <v-card-subtitle
                class="pt-3 pl-0 py-0 caption"
              >All products purchases will pay contribution to help encourage our Cambodian producers.</v-card-subtitle>
            </v-responsive>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      fasIcon: ['fas fa-search', 'fas fa-shopping-cart', 'fas fa-user']
    }
  }
}
</script>

<style>

</style>