<template>
  <main
    style="height:100%">
    <v-container
      class="
        d-flex
        main-container"
      style="height:100%">
      <v-row
        align="center"
        justify="center">
        <v-card
          max-width="500px"
          min-height="600px"
          width="100%"
          class="main-card">
          <v-card-title
            class="
              d-flex
              justify-center
              mt-6"
            style="font-weight:600">
            Forget your password?
          </v-card-title>
          <v-card-text
            class="
              d-flex
              justify-center
              mt-6">
            <div
              class="mb-6">
              <div class="first-line-title">Enter your email or phone number</div>
              <span class="second-line-title">and recover your account</span>
            </div>
          </v-card-text>
          <v-form>
            <v-text-field
              class="mb-4"
              label="Email"
              name="email"
              type="email"
              outlined
              hide-details
              rounded />
            <div class="break-line my-8">
              <div>
                <span>or</span>
              </div>
            </div>
            <v-text-field
              class="mb-4"
              label="Phone number"
              name="phone number"
              type="text"
              outlined
              hide-details
              rounded>
              <DropDown
                slot="prepend-inner"
                @onChangePhoneRegion="value => phoneRegion = value"
                :phoneRegions="phoneRegions" />
            </v-text-field>
          </v-form>
          <v-btn
            color="primary"
            width="100%"
            height="50px"
            class="mt-6"
            rounded>
            Reset password
          </v-btn>
        </v-card>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import DropDown from "../../components/DropDown";

export default {
  components: {
    DropDown
  },
  data: () => ({
    phoneRegions: [
      { name: "+1", img_url: "flag-usa.svg" },
      { name: "+855", img_url: "flag-cambodia.svg" }
    ],
    phoneRegion: '+855'
  })
};
</script>

<style lang="scss">
.first-line-title {
  padding-left: 1.5em;
  text-indent: -1.5em;
}
.second-line-title {
  padding-left: 1.5em;
  text-indent: -1.5em;
}

.break-line div {
  width: 100%;
  text-align: center;
  border-bottom: 0.5px solid #dddddd;
  opacity: 0.9;
  line-height: 0.1em;
  margin: 10px 0 20px;
}

.break-line div span {
  background: #fff;
  padding: 0 40px;
}
</style>