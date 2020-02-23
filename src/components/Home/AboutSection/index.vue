<template>
  <section>
    <v-container>
      <v-row class="pl-8 pr-8 mt-8">
        <v-col class="d-none d-sm-none d-md-flex justify-center">
          <v-img src="../../../assets/About.jpg" max-width="430px"></v-img>
        </v-col>

        <v-col class="d-flex align-center justify-center">
          <div style="
              max-width: 500px;">
            <div
              v-text="about.title"
              style="
              font-size: 40px;
              color: var(--v-primary-base)"
            ></div>
            <div
              v-text="about.description"
              style="
                font-size: 13.5px"
              class="mt-3 pr-12 font-weight-light"
            ></div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      about: {
        title: "អំពីសិប្ប",
        description: "We sell handmade gifts that we design or help our vendor sell their products. We also receive  orders as customized products that made by small business/NGO/home based workers for your beloved ones, company, or charity. We encourage producers to promote more creative design concepts rather than copy from others, and help them to bring their products to bigger markets than focus only on small production so that people buy and use Cambodian handicrafts proudly."
      }
    }
  }
}
</script>

<style>

</style>