<template>
    <md-content class="md-scrollbar page-container md-layout-column" style="min-height:100vh">
    <!-- header -->
    <Header v-bind:show-button="true"></Header>
    <!-- container -->
    <md-content style="height:95vh!important">
      <StudentList v-bind:info="this.experiment"></StudentList>
    </md-content>

    <!-- footer -->
    <Footer></Footer>
  </md-content>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import StudentList from "../components/StudentList.vue";

import exp_form from "../template/experiment_form";
export default {
  name: "Experiment_info",
  components: {
    Header,
    Footer,
    StudentList
  },
  data: () => ({
    search: null,
    searched: [],
    experiment: {}
  }),
  methods: {},
  mounted:async function() {
    this.experiment=exp_form
    console.log(this.$dataSource)
    let data=await this.$dataSource.sGetExp("17041802","101")
    console.log(data)
  }
};
</script>

<style>
md-table-content {
  height: 80vh !important;
  max-height: 100vh !important;
}
</style>