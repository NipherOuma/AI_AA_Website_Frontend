<script setup>
import { ref } from "vue";
const isNavbarCollapsed = ref(true);
</script>

<template>
  <!-- Secondary Navbar (Scrolls with Content) -->
  <div class="secondary-navbar bg-light py-1">
    <div class="container d-flex justify-content-between">
      <div class="location">
        <i class="bi bi-geo-alt me-2"></i> Kisii, Kenya
      </div>
      <div class="subscribe">
        <input type="email" class="form-control me-2" placeholder="Subscribe to newsletter" />
        <button class="btn btn-primary">Subscribe</button>
      </div>
    </div>
  </div>
  <!-- Main Navbar (Sticky) -->
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
        <ul class="navbar-nav ms-auto">
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
          <li class="nav-item">
            <a class="nav-link" href="/get-involved">Get Involved</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/gallery">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Sub Navbar (Fixed on the Left) -->
  <nav class="subnavbar">
    <ul class="navbar-nav subnavbar-items">
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
  </nav>
</template>

<style scoped>
/* Main Sticky Navbar */
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

/* Secondary Navbar */
.secondary-navbar {
  width: 100%;
  padding: 10px 0;
}

.location {
  font-size: 1rem;
}

.subscribe {
  display: flex;
  align-items: center;
}

.subscribe input {
  width: 200px;
}

.subscribe button {
  margin-left: 10px;
}

.subnavbar {
  width: 40px;
  height: 50vh;
  position: fixed;
  top: 0;
  left: 5px;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 60px;
}

.subnavbar-items {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subnavbar .nav-link {
  padding: 15px 0;
  text-align: center;
}

.subnavbar .nav-link i.bi-facebook {
  color: #3b5998;
}

.subnavbar .nav-link i.bi-twitter {
  color: #1ba5fa;
}

.subnavbar .nav-link i.bi-instagram {
  color: #e1306c;
}

.subnavbar .nav-link i.bi-linkedin {
  color: #0077b5;
}

.subnavbar .nav-link i:hover {
  filter: brightness(1.2);
}
</style>
