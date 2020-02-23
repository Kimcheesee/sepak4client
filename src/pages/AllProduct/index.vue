<template>
  <main>
    <MainNavBar />
    <section id="products-container">
      <v-container class="py-0">
        <v-breadcrumbs :items="items" class="pl-4 d-none d-sm-flex">
          <template v-slot:item="{item}">
            <v-breadcrumbs-item
              :to="item.to"
              :disabled="item.disabled"
            >{{ item.text.toUpperCase() }}</v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
        <v-row justify="center" class="mb-12 mt-8">
          <div class="headline products-title">All Products</div>
        </v-row>
        <v-row justify="center">
          <div class="btn-container mb-12">
            <v-btn
              active-class="btn-active"
              depressed
              :color="btn.value == activeBtn? 'primary': 'default'"
              class="mr-4 btn-active"
              rounded
              value="value"
              large
              style="font-size:13px"
              @click="activeBtn = btn.value"
              v-for="(btn, index) in buttons"
              :key="index"
            >{{btn.text}}</v-btn>
          </div>
        </v-row>
        <v-row class="mt-5">
          <v-col
            cols="6"
            sm="4"
            md="4"
            lg="3"
            xl="2"
            v-for="index in 12"
            :key="index.id"
            class="mb-10"
          >
            <ProductCard
              :productTitle="product.productTitle"
              :productDescription="product.productDescription"
              :productPrice="product.productPrice"
            />
          </v-col>
        </v-row>
        <div class="d-flex justify-center text-center mt-6 mb-12">
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
          <div class="ml-4 mt-1">loading more...</div>
        </div>
      </v-container>
    </section>
    <MainFooter class="d-none d-md-block" />
  </main>
</template>

<script>
import MainNavBar from '../../layouts/MainNavBar'
import MainFooter from '../../layouts/MainFooter'
import ProductCard from '../../components/Home/ProductCard'
export default {
	components:{
		MainNavBar,
		MainFooter,
		ProductCard
	},
	data: ()=>({
		items: [
        {
          text: "Home",
          disabled: false,
          to: "/"
				},
				{
          text: "All Products",
          disabled: false,
          to: "/products"
				},
		],
		activeBtn: "all",
		buttons: [
			{text: "View All", value: "all"},
			{text: "Topdress", value: 'topdress'},
			{text: "T-shirt", value: 't'},
			{text: "T-shirt", value: 'tt'}
		],
		product: {
        productTitle: "Fuzzy Snowman",
        productDescription: "Fluffy Socks",
        productPrice: "2.7"
      }
	})
}
</script>

<style scoped>
#products-container{
	padding-top: 64px
}
.products-title{
	border-bottom: 1px solid #1875F0;
	padding-bottom: 30px;
}
.btn-container{
	widows: 100%;
	display: flex;
	justify-content: center
}
@media screen and (max-width: 600px){
	#products-container{
		padding-top:56px
	}
}
</style>