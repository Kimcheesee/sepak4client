<template>
  <div>
    <v-navigation-drawer
      mobile-break-point="4000"
      v-model="drawer"
      width="375px"
      app
      right
      disable-route-watcher
      clipped
    >
      <transition
        leave-active-class="animated slideOutRight faster"
        enter-active-class="animated slideOutLeft faster"
      >
        <CheckItem
          @closeDrawer="drawer = false"
          v-if="paymentStep == 1"
          @next="paymentStep = paymentStep + 1"
        />
        <ShippingInfo
          @closeDrawer="drawer = false"
          v-else-if="paymentStep == 2"
          @back="paymentStep = paymentStep - 1"
          @next="paymentStep = paymentStep + 1"
        />
        <PaymentMethod
          @closeDrawer="drawer = false"
          v-else-if="paymentStep == 3"
          @back="paymentStep = paymentStep - 1"
          @next="paymentStep = paymentStep + 1"
        />
        <PaymentInfo
          @closeDrawer="drawer = false"
          v-else-if="paymentStep == 4"
          @back="paymentStep = paymentStep - 1"
          @next="paymentStep = paymentStep + 1"
        />
        <FinalPage
          @back="paymentStep = paymentStep - 1"
          @closeDrawer="drawer = false"
          @onDoneCloseDrawer="closeDrawer"
          v-else
        />
      </transition>
    </v-navigation-drawer>
    <v-app-bar fixed elevate-on-scroll color="white">
      <v-container>
        <v-row align="center">
          <!-- Logo -->
          <NavLogo class="ml-12" />
          <v-spacer />
          <div>
            <NavIcon
              class="mx-2"
              v-for="icon in fasIcon"
              :key="icon.id"
              :navIcon="icon.icon"
              :onclick="()=>clickHandler(icon.method)"
            />
            <v-menu offset-y bottom left>
              <template v-slot:activator="{ on }">
                <v-btn icon max-width="36" max-height="36" rounded text v-on="on">
                  <v-icon color="black" dense size="25px" class="nav__icons">mdi-account-outline</v-icon>
                </v-btn>
              </template>
              <v-list style="cursor:pointer">
                <v-list-item @click="$router.push('/merchant')">
                  <v-list-item-title
                    style="font-size: 14px"
                  >Merchant</v-list-item-title>
                </v-list-item>
                <v-list-item @click="$router.push('/customer')">
                  <v-list-item-title
                    style="font-size: 14px"
                  >Customer</v-list-item-title>
                </v-list-item>
                <v-divider />
                <v-list-item>
                  <v-list-item-title style="font-size: 14px">Settings</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title style="font-size: 14px">Help & Support</v-list-item-title>
                </v-list-item>
                <v-divider />
                <v-list-item @click="$store.dispatch('User/logout')">
                  <v-list-item-title style="font-size: 14px">Logout</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import NavLogo from "../../components/Navigation Bar/NavLogo";
import NavIcon from "../../components/Navigation Bar/NavIcon";
import CheckItem from "../../components/PaymentDrawer/CheckItem";
import ShippingInfo from "../../components/PaymentDrawer/ShippingInfo";
import PaymentMethod from "../../components/PaymentDrawer/PaymentMethod";
import PaymentInfo from "../../components/PaymentDrawer/PaymentInfo";
import FinalPage from "../../components/PaymentDrawer/FinalPage";

export default {
  components: {
    NavLogo,
    NavIcon,
    CheckItem,
    ShippingInfo,
    PaymentMethod,
    PaymentInfo,
    FinalPage
  },

  data() {
    return {
      fasIcon: [
        { icon: "mdi-magnify", method: "searchIconHandler" },
        { icon: "mdi-cart-outline", method: "openDrawer" }
      ],
      drawer: false,
      paymentStep: 1
    };
  },

  methods: {
    closeDrawer() {
      this.drawer = false;
      this.paymentStep = 1;
    },
    openDrawer() {
      this.drawer = true;
    },
    searchIconHandler() {
      return null;
    },
    clickHandler(name) {
      this[name]();
    }
  }
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css";
@media screen and (max-width: 600px) {
}
</style>
