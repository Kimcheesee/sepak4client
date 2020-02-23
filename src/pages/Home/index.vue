<template>
  <div>
    <MainNavBar />
    <ShowcaseSection />
    <ProductSection />
    <PaginationSection />
    <ValueSection class="d-none d-md-block" />
    <AboutSection class="d-none d-md-block"/>
    <SubscribeSection class="d-none d-md-block"/>
    <MainFooter class="d-none d-md-block"/>
  </div>
</template>

<script>
import MainNavBar from "../../layouts/MainNavBar";
import ShowcaseSection from "../../components/Home/ShowcaseSection";
import ProductSection from "../../components/Home/ProductSection";
import PaginationSection from "../../components/Home/PaginationSection";
import ValueSection from "../../components/Home/ValueSection";
import AboutSection from "../../components/Home/AboutSection";
import MainFooter from "../../layouts/MainFooter"
import SubscribeSection from "../../components/Home/SubscribeSection"

export default {
  components: {
    MainNavBar,
    ShowcaseSection,
    ProductSection,
    PaginationSection,
    ValueSection,
    AboutSection,
    SubscribeSection,
    MainFooter,
  }
};
</script>

<style>
.v-label {
  font-size: 14px;
}
</style>