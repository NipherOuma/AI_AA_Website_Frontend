<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';

const aboutUsImage = '@/assets/about1.png';
const teamMembers = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8000/members/');
    teamMembers.value = response.data;
  } catch (error) {
    console.error('Error fetching team members:', error);
  }
});
</script>

<template>
  <header>
    <Navbar />
  </header>
  
  <div class="about-us">
    <!-- About Us Section -->
    <section class="about-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <img src="@/assets/collaborations.jpg" alt="About Us Image" class="img-fluid about-img">
          </div>
          <div class="col-md-6">
            <h2>About Us</h2>
            <hr class="bg-warning w-25 mx-auto mx-md-0">
            <p>AI AA NGO is dedicated to enhancing agricultural productivity and sustainability in Kenya. We utilize artificial intelligence to optimize farming practices, forecast yields, and improve market accessibility for smallholder farmers.<br>
              We are a dedicated team committed to improving agricultural productivity through innovative solutions. Our mission is to enhance sustainability and efficiency in farming practices.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Team Section -->
    <section class="our-team py-5">
      <div class="container">
        <h2 class="text-center mb-4">Our Team</h2>
        <div class="row">
          <div v-for="member in teamMembers" :key="member.name" class="col-md-4 mb-4">
            <div class="card team-card">
              <div class="team-img-container">
                <img :src="member.image" alt="Team Member Image" class="team-img">
              </div>
              <div class="card-body">
                <h5 class="card-title fw-bold">{{ member.name }}</h5>
                <p class="card-text lead">{{ member.title }}</p>
                <p class="card-text">{{ member.about }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services py-5">
      <div class="container">
        <h2 class="text-center mb-4">Our Services</h2>
        <div class="row">
          <!-- Service 1 -->
          <div class="col-md-4 mb-4">
            <div class="card service-card">
              <img src="@/assets/bg1.png" alt="Custom Software Development" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title fw-bold">Custom Software Development</h5>
                <p class="card-text">We build tailored software solutions to meet the unique needs of farmers and agricultural businesses, enhancing operational efficiency through AI technologies.</p>
              </div>
            </div>
          </div>

          <!-- Service 2 -->
          <div class="col-md-4 mb-4">
            <div class="card service-card">
              <img src="@/assets/bg1.png" alt="Education and Training" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title fw-bold">Education and Training</h5>
                <p class="card-text">We provide training programs to educate farmers on the use of AI in agriculture, equipping them with the skills to optimize their farming practices.</p>
              </div>
            </div>
          </div>

          <!-- Service 3 -->
          <div class="col-md-4 mb-4">
            <div class="card service-card">
              <img src="@/assets/bg1.png" alt="AI-based Crop Monitoring" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title fw-bold">AI-based Crop Monitoring</h5>
                <p class="card-text">Our AI-based crop monitoring solutions provide real-time insights into crop health, helping farmers make informed decisions to improve yields.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <Footer />
</template>

<style scoped>
.about-us {
  font-family: Arial, sans-serif;
}

.about-section {
  padding: 3rem 0;
}

.about-img {
  width: 100%;
  height: auto;
  max-height: 400px;
  border-radius: 8px; 
}

.our-team {
  background-color: #f8f9fa;
  padding: 3rem 0;
  height: 100vh;
}

.team-card {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  height: 80%;
  position: relative;
  margin-top: 80px;
  z-index: 0; 
}

.team-img-container {
  position: absolute;
  top: -80px; 
  left: 30%;
  transform: translateX(-50%);
  z-index: 10;
}

.team-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid rgb(229, 226, 226); 
}

.card-body {
  padding-top: 80px; 
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.card-text.lead {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.card-text {
  font-size: 1rem;
  line-height: 1.6;
}

.services .service-card {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.services .card-img-top {
  height: 200px;
  object-fit: cover;
}

.services .card-body {
  text-align: center;
}

.services .card-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
}

.services .card-text {
  font-size: 1rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about-section .row {
    flex-direction: column;
  }

  .our-team .row {
    display: flex;
    flex-direction: column;
  }
}
</style>
