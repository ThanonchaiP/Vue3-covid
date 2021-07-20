<template>
  <nav>
    <div class="container">
      <div class="nav-wrap">
        <h3 class="logo">COVID 19</h3>
        <ul class="menu">
          <li><router-link to="/">ตารางผู้ป่วยโควิด 19</router-link></li>
          <li>
            <router-link to="/graph/Thailand">กราฟผู้ป่วยโควิด 19</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
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
