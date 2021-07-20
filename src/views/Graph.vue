<template>
  <h1 class="text-center mt-4 mb-4">{{ country }}</h1>
  <vue3-chart-js v-if="display" v-bind="{ ...barChart }" />
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
export default {
  name: "Graph",
  components: {
    Vue3ChartJs,
  },
  setup() {
    const route = useRoute();
    const country = ref("");
    let todayCases = [];
    let todayDeaths = [];
    let recovered = [];
    let toDay = [new Date()];
    const display = ref(false);
    const covidDetail = ref({});
    let barChart = {
      type: "bar",
      options: {
        indexAxis: "x",
        min: 0,
        max: 100,
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
      data: {
        labels: toDay,
        datasets: [
          {
            label: "ผู้ปวยวันนี้",
            backgroundColor: ["#1abc9c"],
            data: todayCases,
          },
          {
            label: "เสียชีวิต",
            backgroundColor: ["#2ecc71"],
            data: todayDeaths,
          },
          {
            label: "รักษาหาย",
            backgroundColor: ["#34495e"],
            data: recovered,
          },
        ],
      },
    };

    const getData = async (city) => {
      const resp = await axios.get(
        "https://disease.sh/v3/covid-19/countries/" + city
      );
      covidDetail.value = resp.data;
      todayCases[0] = resp.data.todayCases;
      todayDeaths[0] = resp.data.todayDeaths;
      recovered[0] = resp.data.todayRecovered;
      country.value = city;
      display.value = true;
    };

    onMounted(() => {
      const country = route.params.country;
      getData(country);
    });

    return {
      barChart,
      covidDetail,
      display,
      country,
    };
  },
};
</script>

<style></style>
