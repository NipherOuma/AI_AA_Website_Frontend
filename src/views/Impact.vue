<script setup>
import { ref, onMounted } from 'vue'; // Import ref and onMounted from Vue
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

import hero1 from '@/assets/bg.jpg';
import hero2 from '@/assets/bg1.png';
import hero3 from '@/assets/bg3.jpg';

const images = [hero1, hero2, hero3, hero3, hero2, hero1];
const currentImageIndex = ref(0);

onMounted(() => {
  setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
  }, 5000);
});
</script>

<template>
    <Navbar />
    <div class="impact-container">
      <!-- Header Section -->
      <section class="impact-header text-center text-white" :style="{ backgroundImage: `url(${images[currentImageIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '50vh', transition: 'background-image 5s ease-in-out' }">
        <div class="hero-overlay"></div>
        <h1 class="text-white">OUR IMPACT</h1>
        <p>
          We as AI AA NGO aim to enhance agricultural productivity and sustainability in Kenya by deploying artificial intelligence technologies that optimize farming practices, improve yield forecasts, and increase market accessibility for smallholder farmers.
        </p>
      </section>
  
      <!-- Impact Cards -->
      <section class="impact-cards">
        <div class="card">
          <img src="@/assets/maize.jpg" alt="SDG 2 - Zero Hunger" />
          <div class="card-content">
            <h3>SDG 2 - Zero Hunger</h3>
            <p>
              By enhancing agricultural productivity using AI, AI AA directly contributes to achieving food security, improved nutrition, and promoting sustainable agriculture. AI can help predict crop yields, manage pest control, and optimize resource use, thereby increasing food production.
            </p>
          </div>
        </div>
  
        <div class="card">
          <img src="@/assets/maize.jpg" alt="SDG 9 - Industry, Innovation, and Infrastructure" />
          <div class="card-content">
            <h3>SDG 9 - Industry, Innovation, and Infrastructure</h3>
            <p>
              The integration of AI into agriculture represents a significant innovation in agricultural practices. This supports building resilient infrastructure and fosters innovation, particularly in the context of Kenyan agriculture.
            </p>
          </div>
        </div>
  
        <div class="card">
          <img src="@/assets/maize.jpg" alt="SDG 12 - Responsible Consumption and Production" />
          <div class="card-content">
            <h3>SDG 12 - Responsible Consumption and Production</h3>
            <p>
              AI technologies will enable more efficient use of resources in farming, such as water and soil nutrients, and reduce waste through precision agriculture techniques. This aligns with sustainable management and efficient use of natural resources.
            </p>
          </div>
        </div>
  
        <div class="card">
          <img src="@/assets/maize.jpg" alt="SDG 13 - Climate Action" />
          <div class="card-content">
            <h3>SDG 13 - Climate Action</h3>
            <p>
              AI will aid in adapting agricultural practices to climate change and mitigating its impacts. This includes predicting climate-related risks, optimizing planting schedules, and developing climate-resilient crop varieties.
            </p>
          </div>
        </div>
  
        <div class="card">
          <img src="@/assets/maize.jpg" alt="SDG 15 - Life on Land" />
          <div class="card-content">
            <h3>SDG 15 - Life on Land</h3>
            <p>
              AI will contribute to sustainably managing forests, combating desertification, halting and reversing land degradation, and halting biodiversity loss. For example, AI-driven data can guide farmers on crop rotation and soil health to maintain land fertility.
            </p>
          </div>
        </div>
  
        <div class="card">
          <img src="@/assets/maize.jpg" alt="SDG 17 - Partnerships for the Goals" />
          <div class="card-content">
            <h3>SDG 17 - Partnerships for the Goals</h3>
            <p>
              Partnerships with tech companies, government agencies, NGOs, and international organizations will bring diverse expertise and resources together.
            </p>
          </div>
        </div>
      </section>
  
      <!-- About Us and Objectives Section -->
      <section class="about-objectives text-center">
        <h2>About Us</h2>
        <p>
          To enhance agricultural productivity and sustainability in Kenya by deploying artificial intelligence technologies that optimize farming practices, improve yield forecasts, and increase market accessibility for smallholder farmers.
        </p>
  
        <h2>Specific Objectives</h2>
        <ul class="objectives-list">
          <li>
            <strong>Innovation Integration:</strong> Introduce AI-driven tools and techniques to 500 farms across Kenya by 2025 to increase crop yields and resource efficiency.
          </li>
          <li>
            <strong>Education and Training:</strong> Develop and provide training programs for at least 10,000 farmers by 2025 on utilizing AI for sustainable farming practices.
          </li>
          <li>
            <strong>Research and Development:</strong> Collaborate with agricultural and tech experts to innovate new AI applications tailored to the unique challenges of Kenyan agriculture.
          </li>
          <li>
            <strong>Community Engagement:</strong> Establish a network of AI in Agriculture community hubs by 2025 to facilitate knowledge sharing and local engagement.
          </li>
          <li>
            <strong>Policy Advocacy:</strong> Work with policymakers to shape an AI-inclusive regulatory framework that supports innovation while protecting farmers' interests.
          </li>
          <li>
            <strong>Economic Empowerment:</strong> Increase the income of small-scale farmers by 30% through AI-enabled precision agriculture and market access tools by 2027.
          </li>
          <li>
            <strong>Partnerships:</strong> Forge strategic partnerships with international AI and agriTech organizations to bring global expertise to the Kenyan context.
          </li>
        </ul>
      </section>
    </div>
    <Footer />
  </template>
  
  <style scoped>
  .impact-container {
    padding: 2rem 1rem;
  }
  
  .hero-overlay {
    position: absolute; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); 
    z-index: 1;
  }
  
  .impact-header {
    position: relative; 
    padding: 3rem 1rem;
    border-radius: 10px;
    margin-bottom: 2rem;
    color: white; 
  }
  
  .impact-header h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .impact-header p {
    font-size: 1.2rem;
    color: white;
  }
  
  .impact-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }
  
  .card {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    max-width: 350px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s;
  }
  
  .card:hover {
    transform: translateY(-10px);
  }
  
  .card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .card-content {
    padding: 1.5rem;
  }
  
  .card-content h3 {
    font-size: 1.5rem;
    color: #2c3e50;
    margin-bottom: 1rem;
  }
  
  .card-content p {
    color: #7f8c8d;
    font-size: 1rem;
    line-height: 1.5;
  }
  
  .about-objectives {
    background-color: #ecf0f1;
    padding: 2rem 1rem;
    border-radius: 10px;
    margin-top: 3rem;
  }
  
  .about-objectives h2 {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 1.5rem;
  }
  
  .about-objectives p {
    font-size: 1.2rem;
    color: #7f8c8d;
    margin-bottom: 2rem;
  }
  
  .objectives-list {
    list-style-type: none;
    padding-left: 0;
    font-size: 1rem;
    line-height: 1.8;
  }
  
  .objectives-list li {
    background-color: #fff;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    border-left: 5px solid #2980b9;
    transition: background-color 0.3s;
  }
  
  .objectives-list li:hover {
    background-color: #dbe9f4;
  }
  
  @media (min-width: 768px) {
    .impact-header {
      padding: 4rem 2rem;
    }
  
    .impact-cards {
      justify-content: space-between;
    }
  
    .card {
      max-width: 45%;
    }
  
    .about-objectives {
      padding: 3rem 2rem;
    }
  }
  
  @media (min-width: 1024px) {
    .impact-cards {
      gap: 3rem;
    }
  
    .card {
      max-width: 30%;
    }
  }
  </style>
  