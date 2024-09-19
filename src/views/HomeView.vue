<script setup>
import { ref, onMounted } from "vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { useEvents } from "@/composables/useEvent";

import hero1 from "@/assets/images/bg.jpg";
import hero2 from "@/assets/images/bg1.png";
import hero3 from "@/assets/images/bg3.jpg";

const images = [hero1, hero2, hero3, hero3, hero2, hero1];
const currentImageIndex = ref(0);
const { upcomingEvents, fetchEvents } = useEvents();

onMounted(() => {
  setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
  }, 5000);

  fetchEvents();
});
</script>

<template>
  <div>
    <Navbar />
    <div
      class="hero-section"
      :style="{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }"
    >
      <div class="hero-overlay"></div>

      <section class="hero-content row px-3 py-5 px-md-5">
        <div class="col-12 col-lg-9 order-2 order-lg-1 text-lg-start mb-4 mb-lg-0 text-white">
          <h1 class="display-4 fw-bold mb-3 heading">Artificial Intelligence Alliance in Agriculture</h1>
          <p class="lead mb-4">
            Enhancing agricultural productivity and sustainability in Kenya through AI technologies.
          </p>
          <div class="d-flex col-6 col-lg-3 flex-column flex-sm-row justify-content-center justify-content-lg-start mt-4 gap-2">
            <a href="#about" class="btn btn-outline-light flex-grow-1" style="border-radius: 20px;">Get Started</a>
          </div>
        </div>
      </section>
    </div>

    <!-- Main Content -->
    <main>
      <!-- Introduction Section -->
      <section class="introduction py-5" id="about">
        <div class="container">
          <div class="row align-items-center">
            <!-- Image Column -->
            <div class="col-md-6 d-flex justify-content-center order-md-1 order-2">
              <img src="@/assets/images/hero.jpg" class="img-fluid rounded" alt="About Us" />
            </div>
            <!-- Content Column -->
            <div class="col-12 col-md-6 text-md-start mb-4 mb-md-0">
              <h2 class="h2 text-center">About Us</h2>
              <hr class="bg-warning w-25 mx-auto mx-md-0" />
              <p class="mt-3">
                AI AA NGO is dedicated to enhancing agricultural productivity and sustainability in Kenya. We utilize artificial intelligence to optimize farming practices, forecast yields, and improve market accessibility for smallholder farmers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="services py-5 mt-5 bg-light">
        <div class="container">
          <h2 class="h2 text-center fw-bold">Our Action</h2>
          <hr class="bg-warning mx-auto" style="width: 10%;" />
          <div class="row mt-4">
            <!-- Objective 1 -->
            <div class="col-md-4 mb-5 text-center">
              <div class="icon mb-4">
                <i class="bi bi-gear" style="font-size: 4rem;"></i>
              </div>
              <h5 class="fw-bold mb-3">Innovation Integration</h5>
              <p class="mb-4">
                Introduce AI-driven tools and techniques to 500 farms across Kenya by 2025 to increase crop yields and resource efficiency.
              </p>
            </div>

            <!-- Objective 2 -->
            <div class="col-md-4 mb-5 text-center">
              <div class="icon mb-4">
                <i class="bi bi-book" style="font-size: 4rem;"></i>
              </div>
              <h5 class="fw-bold mb-3">Education and Training</h5>
              <p class="mb-4">
                Develop and provide training programs for at least 10,000 farmers by 2025 on utilizing AI for sustainable farming practices.
              </p>
            </div>

            <!-- Objective 3 -->
            <div class="col-md-4 mb-5 text-center">
              <div class="icon mb-4">
                <i class="bi bi-tree" style="font-size: 4rem;"></i>
              </div>
              <h5 class="fw-bold mb-3">Environmental Conservation</h5>
              <p class="mb-4">
                Collaborate with agricultural and tech experts to innovate new AI applications tailored to the unique challenges of Kenyan agriculture.
              </p>
            </div>
          </div>
          <div class="container text-center">
            <a class="btn btn-outline-success btn-lg mt-4 border-2" href="/impact" role="button">See More</a>
          </div>
        </div>
      </section>

      <!-- Upcoming Events Section -->
      <section class="upcoming-events py-5">
        <div class="container">
          <h2 class="h2 text-center">Upcoming Events</h2>
          <hr class="bg-warning mx-auto" style="width: 15%" />
          <ul class="list-unstyled mt-4">
            <li v-for="event in upcomingEvents" :key="event.id" class="mb-3">
              <strong>{{ new Date(event.date).toLocaleDateString() }}:</strong>
              {{ event.title }} - {{ event.description }}
            </li>
          </ul>
        </div>
      </section>

      <!-- Footer -->
      <footer>
        <Footer />
      </footer>
    </main>
  </div>
</template>

<style scoped>
.hero-section {
  position: relative;
  background-size: cover;
  background-position: center;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: background-image 5s ease-in-out;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2; 
  color: white;
}
</style>
