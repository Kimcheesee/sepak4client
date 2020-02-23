import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/Home";

import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgetPassword from "../pages/ForgetPassword";
import Product from "../pages/Product"
import Customer from "../pages/Customer"
import ProductTracking from "../pages/ProductTracking"
import Merchant from "../pages/Merchant"
import Upload from "../pages/Upload"
import AllProduct from '../pages/AllProduct'
import Error from '../pages/Error'


import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/customer",
      name: "Customer",
      component: Customer,
      meta: { requiresLogin: true }
    },
    {
      path: "/tracking",
      name: "Tracking",
      component: ProductTracking,
      meta: { requiresLogin: true }
    },
    {
      path: "/product",
      name: "Product",
      component: Product,
      meta: { requiresLogin: true }
    },
    {
      path: "/merchant",
      name: "Merchant",
      component: Merchant,
      meta: { requiresLogin: true }
    },
    {
      path: "/upload",
      name: "Upload",
      component: Upload,
      meta: { requiresLogin: true }
    },
    {
      path: "/products",
      name: "Products",
      component: AllProduct
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      beforeEnter(to, from, next) {
        // not allow user to enter login page if their token still valid
        if (!store.getters['User/getData']) {
          next()
        } else {
          next('/home')
        }
      }
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/forget_password",
      name: "ForgetPassword",
      component: ForgetPassword
    },
    {
      path: "/error",
      name: "Error",
      component: Error,
      meta: { requiresLogin: true }
    },
    {
      path: "*",
      name: "Home",
      component: Home,
      meta: { requiresLogin: true }
    }
  ],
  // start new page from top
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin) && !store.getters['User/getData']) {
    const accessToken = localStorage.getItem("access_token");
    // check if user's sessoin still valid
    if (accessToken) {
      store.dispatch("User/checkSession", accessToken).then(resStatus => {
        if (resStatus == 200) {
          next();
        }
      }).catch(error => {
        if (error.response) {
          next('/login')
        }
      });
    } else {
      next("/login");
    }
  } else {
    next()
  }
})



export default router;