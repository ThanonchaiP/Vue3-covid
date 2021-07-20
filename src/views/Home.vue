<template>
  <div class="container">
    <h1 class="title">ตารางผู้ป่วยโควิด 19</h1>
    <DataTable
      :value="covids"
      :paginator="true"
      :rows="10"
      :rowHover="true"
      data-key="id"
      @row-click="handleClick($event)"
      class="table"
    >
      <Column field="cases" header="ยอดรวมผู้ป่วยทั้งหมด" sortable></Column>
      <Column field="todayCases" header="ยอดผู้ป่วยวันนี้" sortable></Column>
      <Column
        field="todayDeaths"
        header="ยอดผู้เสียชีวิตวันนี้"
        sortable
      ></Column>
      <Column field="recovered" header="จำนวนหายป่วยสะสม" sortable></Column>
      <Column
        field="todayRecovered"
        header="จำนวนหายป่วยกลับบ้าน"
        sortable
      ></Column>
      <Column field="country" header="ประเทศ" sortable></Column>
    </DataTable>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import router from "@/router";
import axios from "axios";
export default {
  name: "Home",
  setup() {
    const covids = ref([]);

    const getData = async () => {
      const resp = await axios.get("https://disease.sh/v3/covid-19/countries");
      covids.value = resp.data;
    };

    const handleClick = async (e) => {
      router.push("/graph/" + e.data.country);
    };

    onMounted(() => {
      getData();
    });

    return { covids, handleClick };
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  margin: 1.5rem;
  font-weight: 900;
  color: #cd122d;
}
.table {
  font-family: "Prompt", sans-serif;
}

nav {
  height: auto;
  padding: 1rem 0;
  background: linear-gradient(90deg, #154284 0, #cd122d);
  border-bottom: 0.6px solid#154284;
  filter: grayscale(40%);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  color: #fff;
  margin: 0;
}

.menu {
  display: flex;
  align-items: center;
  margin: 0;
}

.menu li {
  margin-left: 1.5rem;
  list-style: none;
}

.menu li a {
  font-size: 1.2rem;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s;
}

.menu li a:hover {
  color: #84b1f5;
}
</style>
