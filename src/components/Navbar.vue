<script setup>
import { ref } from 'vue';

const isNavbarCollapsed = ref(true);
</script>

<template>
  <!-- Main Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="@/assets/Alogo.png" class="img-fluid rounded" alt="AI AA NGO">
      </a>
      <button class="navbar-toggler" type="button" @click="isNavbarCollapsed = !isNavbarCollapsed">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div :class="['collapse', 'navbar-collapse', { show: !isNavbarCollapsed }]">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/our-impact">Our Impact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/blog">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/get-involved">Get Involved</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Sub Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light subnavbar">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#subnavbarCollapse" aria-controls="subnavbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="subnavbarCollapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="https://www.facebook.com" target="_blank">
              <i class="bi bi-facebook"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.twitter.com" target="_blank">
              <i class="bi bi-twitter"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.instagram.com" target="_blank">
              <i class="bi bi-instagram"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.linkedin.com" target="_blank">
              <i class="bi bi-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
a img{
    height: 40px;
}
.subnavbar {
  background-color: rgba(0, 0, 0, 0.5);
  height: 30px;
}

.subnavbar .nav-link {
  color: #ddd; 
}

.subnavbar .nav-link:hover {
    color: #fff; 
}
</style>
