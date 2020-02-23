<template>
  <main
    style="height:100%">
    <v-container
      class="
        d-flex
        alight-center
        justify-center
        main-container"
      style="height:100%">
      <v-row
        align="center"
        justify="center">
        <div class="toast">
            <v-alert dense text type="error" :value="errorMsg ? true: false" transition="slide-x-transition">
              {{errorMsg ? errorMsg : null}}
            </v-alert>
        </div>
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
            <div
              class="first-line-title">
              Create an Account to
            </div>
            <span
              class="second-line-title">
              List your Products
            </span>
          </v-card-title>
          <v-card-text
            style="text-indent:20px">
            <div
              class="mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto sunt dolore at, qui dolores sit accusantium quam delectus iure veritatis adipisci quod repudiandae
            </div>
          </v-card-text>
          <v-form @submit="onSubmit" ref="reg-form">
            <v-text-field
              label="First Name"
              name="First Name"
              type="text"
              outlined
              rounded
              :rules="[rules.required]"
              v-model="firstName"
            />
            <v-text-field
              label="Last Name"
              name="Last Name"
              type="text"
              outlined
              rounded
              :rules="[rules.required]"
              v-model="lastName"
            />
            <v-text-field
              label="Email"
              name="Email"
              type="email"
              outlined
              rounded
              v-model="email"
              :error-messages="emailErrorMsg"
              ref="email"
              :rules="[rules.required]"
            />
            <v-text-field
              label="Phone number"
              name="phone number"
              type="text"
              v-model="phone"
              :error-messages="phoneErrorMsg"
              outlined
              :rules=[rules.required]
              rounded>
              <DropDown
                @onChangePhoneRegion="(value) => phoneRegion = value"
                slot="prepend-inner"
                :phoneRegions="phoneRegions" />
            </v-text-field>
            <v-text-field
              label="Password"
              name="Password"
              type="password"
              outlined
              rounded
              v-model="password"
              :rules="[rules.required, rules.min]"
            />
            <div class="mt-4 mb-4">
              <v-checkbox
                v-model="agree"
                class="mt-0 small-font"
                label="I agree to the Google Terms of Service and Privacy Policy"
                hide-details
                style="font-size:12px"
                dense
                :rules="[rules.required]"
              ></v-checkbox>
            </div>
            <v-btn
              type="submit"
              color="primary"
              width="100%"
              height="50px"
              class="mt-12"
              rounded>
              Sign Up
            </v-btn>
          </v-form>
          <div
            class="
              d-flex
              justify-center
              mt-4
              mb-12">
            <div
              @click="goToLogIn"
              class="cursor"
              style="font-weight:400; text-decoration:none">
              Are you already a member?
            </div>
          </div>
        </v-card>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import DropDown from "../../components/DropDown";

export default {
  components:{
    DropDown
  },
  data() {
    return {
      firstName:"",
      lastName:"",
      password:"",
      email:"",
      emailErrorMsg : '',
      phone:"",
      phoneErrorMsg : '',
      phoneRegion:"+855",
      agree: false,
      errorMsg: '',
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match",
      },
      phoneRegions: [
        { name: "+1", img_url: "flag-usa.svg" },
        { name: "+855", img_url: "flag-cambodia.svg" }
      ]
    };
  },
  methods: {
    goToLogIn() {
      this.$router.push("login");
    },

    async onSubmit(event){
      event.preventDefault()
      console.log(this.phoneRegion)
      if (this.$refs['reg-form'].validate()){
        try {
          await this.$store.dispatch("User/create", {
            firstName : this.firstName,
            lastName : this.lastName,
            email: this.email,
            password: this.password,
            phone: this.phoneRegion + this.phone
          })
        } catch (error) {
          // set error message
          this.errorMsg = error.message
          if(error.type == 'email'){
            this.emailErrorMsg = error.message
          }else if(error.type == "phone"){
            this.phoneErrorMsg = error.message
          }
          // clear error message
          setTimeout(()=> this.errorMsg = '', 2000)
          if(this.emailErrorMsg && error.type != 'email'){
            this.emailErrorMsg = ''
          }
          if(this.phoneErrorMsg && error.type != 'phone'){
            this.phoneErrorMsg = ''
          }
        }
      }
    }

  },


};
</script>

<style scoped>
.first-line-title {
  padding-left: 1.5em;
  text-indent: -1.5em;
}
.second-line.title {
  padding-left: 1.5em;
  text-indent: -1.5em;
}

.toast{
  position: absolute;
  z-index: 999;
  top:20px;
  right: 20px;
}
</style>
