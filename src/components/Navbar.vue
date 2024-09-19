<script setup>
import { ref } from "vue";
const isNavbarCollapsed = ref(true);
</script>

<template>
  <div class="secondary-navbar py-1">
  <div class="container d-flex justify-content-between">
    <!-- Location with Icon -->
    <div class="location text-white mt-1">
      <i class="bi bi-geo-alt me-2"></i> 
      <span class="text-white">Kisii, Kenya</span> 
    </div>
    <div class="subscribe">
      <a href="/gallery" class="text-white">
        <button class="btn text-white">
          <i class="bi bi-images d-inline d-lg-none"></i>
          <span class="d-none d-lg-inline text-white">Gallery</span>
        </button>
      </a>

      <a href="/contact" class="text-white ms-2">
        <button class="btn text-white">
          <i class="bi bi-envelope d-inline d-lg-none"></i>
          <span class="d-none d-lg-inline text-white">Contact Us</span>
        </button>
      </a>
    </div>
  </div>
</div>


  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container">
      <a class="navbar-brand" href="/">
        <div class="logo-container">
          <div class="logo-left">AIA<span>A</span></div>
          <div class="logo-divider"></div>
          <div class="logo-right">
            <div><span>Artificial Intelligence</span></div>
            <div><span>Alliance Agriculture</span></div>
          </div>
        </div>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        @click="isNavbarCollapsed = !isNavbarCollapsed"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div :class="['collapse', 'navbar-collapse', { show: !isNavbarCollapsed }]">
        <div class="d-flex justify-content-lg-center flex-grow-1">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/impact">Our Impact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/blog">Blog</a>
            </li>
          </ul>
        </div>
        <div class="ms-auto">
          <a href="/get-involved">
            <button class="btn btn-outline-light">Get Involved</button>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-brand {
  font-family: "Roboto", sans-serif;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo-left {
  font-weight: bold;
  font-size: 1.8em;
  margin-right: 10px;
}

.logo-divider {
  width: 2px;
  height: 60px;
  background: linear-gradient(to bottom, white 50%, rgb(9, 182, 9) 50%);
  margin-right: 10px;
}

.logo-right {
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 19px;
  font-family: "Times New Roman", Times, serif;
}

.logo-right div {
  font-size: 0.9em;
}

span {
  color: rgb(9, 182, 9);
}

.secondary-navbar {
  width: 100%;
  padding: 10px 0;
  background-color: rgb(82, 180, 82);
}

.location {
  font-size: 1rem;
}
</style>
