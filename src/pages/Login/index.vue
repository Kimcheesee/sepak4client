<template>
  <main
    style="
      height: 100%">
    <v-container
      class="
        d-flex
        alight-center
        justify-center
        main-container"
      style="
        height: 100%">
      <v-row
        align="center"
        justify="center">
          <div class="login-toast">
            <v-alert dense text type="success" v-model="successToast" transition="slide-x-transition">
              success
            </v-alert>
            <v-alert dense text type="error" :value="errorToast ? true: false" transition="slide-x-transition">
              {{errorToast ? errorToast : null}}
            </v-alert>
          </div>
        <v-card
          max-width="500px"
          min-height="600px"
          width="100%"
          class="main-card" >
          <v-card-title
            class="
            d-flex
            justify-center
            mt-6"
            style="
              font-weight: 600">
              Login
          </v-card-title>
          <v-card-text
            style="
              text-indent: 20px">
            <div class="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim excepturi corporis
              voluptatem, at possimus
            </div>
          </v-card-text>
          <!-- Form -->
          <v-form @submit="onSubmit" ref="form">
            <v-text-field
              aria-required
              label="Username"
              name="login"
              type="text"
              outlined
              rounded
              required
              :rules="[rules.required]"
              v-model="userName"
            />
            <v-text-field
              id="password"
              class="mb-4"
              label="Password"
              name="password"
              :type="showPassword ? 'text' : 'password'"
              outlined
              rounded
              v-model="password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              @click:append="showPassword = !showPassword"
            />
            <!-- Keep Me Sign In & Forget Password -->
            <div
              class="
                d-flex
                align-center
                justify-space-between
                mt-4
                mb-4">
              <v-checkbox
                v-model="keepSignIn"
                label="Keep me sign in"
                hide-details
                class="mt-0" />
              <div
                class="
                  cursor
                  small-screen-font"
                style="
                  font-weight:300;
                  margin-top:6px;"
                @click="goToPage('forget_password')">
                Forget Password?
              </div>
            </div>
            <!-- Submit Button -->
            <v-btn
              type="submit"
              color="primary"
              width="100%"
              height="50px"
              rounded
              class="mt-6">
              Sign In
            </v-btn>
          </v-form>
          <div
            class="
              d-flex
              justify-space-around
              mt-4
              mb-12">
            <div
              @click="goToPage('register')"
              class="cursor"
              style="font-weight:400">
              Not a member yet?
            </div>
            <div
              @click="goToPage('register')"
              class="cursor"
              style="font-weight:600">
              Sign Up
            </div>
          </div>
        </v-card>
      </v-row>
    </v-container>
  </main>
</template>

<script>
// import {mapGetters, mapActions} from 'vuex'
export default {
  data() {
    return {
      showPassword: false,
      successToast: false,
      errorToast: false,
      keepSignIn : false,
      password: "",
      userName: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match"
      }
    };
  },

  methods: {
    goToPage(route) {
      this.$router.push(route);
    },

    async onSubmit(event){
      // prevent default behavior of browser when submit
      event.preventDefault();
      if (this.$refs.form.validate()) {
        const resStatus = await this.$store.dispatch('User/login', {
          userName: this.userName,
          password:this.password,
          keepSignIn:this.keepSignIn})
        if(resStatus == 200){
          this.successToast = true
          this.$router.push("/home");
        }else if(resStatus == 401){
          this.errorToast = 'Incoorect Username or Password'
        }else if(resStatus == 404){
          this.errorToast = 'User not found, You need to Sign Up'
        }else{
          this.errorToast = resStatus
        }
        setTimeout(()=> this.errorToast = false, 5000)
      }
    },
  },
};
</script>

<style lang="scss">

.main-card {
  padding: 0 48px;
}

@media screen and (max-width: 600px) {
  .small-screen-font {
    font-size: 12px;
  }
  .main-container {
    padding: 0;
    overflow: hidden;
  }
  .main-card {
    padding-top: 2vh;
    height: 100%;
    box-shadow: none;
  }
  .v-label {
    font-size: 13px;
  }
}
.cursor {
  cursor: pointer;
}

.login-toast{
  position: absolute;
  z-index: 999;
  top:20px;
  right: 20px;
}
</style>
