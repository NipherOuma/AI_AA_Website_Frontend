<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="get-involved-container">
    <Navbar />

    <!-- Header Section -->
    <section class="jumbotron text-center text-white py-5">
      <div class="container mx-auto">
        <h2 class="display-8">GET INVOLVED</h2>
        <p class="lead">
          Join our community of professionals in agriculture and AI. Attend our events, collaborate on innovative projects, and stay updated with the latest advancements.
        </p>
      </div>
    </section>

    <!-- Workshops and Seminars Section -->
    <section class="workshops-seminars-section py-5">
      <div class="container mx-auto">
        <div class="row align-items-center">
          <div class="col-md-6 mb-4">
            <h2>Workshops and Seminars</h2>
            <hr class="bg-warning w-25">
            <p>
              As a person with the urge to know new things, it is important to continuously seek knowledge in education much more in your field of expertise.
              Enhance your skills and knowledge by attending our workshops and seminars. Learn from industry experts and stay ahead in your field.
            </p>
          </div>
          <div class="col-md-6">
            <img src="@/assets/seminar.png" class="img-fluid rounded" alt="Workshops and Seminars">
          </div>
        </div>
      </div>
    </section>

    <!-- Community Engagement Programs Section -->
    <section class="community-engagement-section py-4">
      <div class="container mx-auto">
        <div class="row">
          <div class="col-md-6 mb-4 order-md-2">
            <h2>Community Engagement Programs</h2>
            <hr class="bg-warning w-25">
            <p>
              Mentoring programs that provide youth with a positive role model and support from someone outside their home.<br>
              Educational Workshops which help to inform the community about services or resources available and can often serve as 
              a starting point for further conversations related to youth engagement.
            </p>
          </div>
          <div class="col-md-6 order-md-1">
            <img src="@/assets/community.png" class="img-fluid rounded" alt="Community Engagement Programs">
          </div>
        </div>
      </div>
    </section>

    <!-- Applications of Remote Sensing Section -->
    <section class="remote-sensing-section py-4">
      <div class="container mx-auto">
        <div class="row align-items-center">
          <div class="col-md-6 mb-4">
            <h2>Remote Sensing in Precision Farming</h2>
            <hr class="bg-warning w-25">
            <p>
              Discover how remote sensing technology is transforming precision farming by providing valuable insights for sustainable agriculture.
            </p>
          </div>
          <div class="col-md-6">
            <img src="@/assets/remote.png" class="img-fluid rounded" alt="Remote Sensing in Precision Farming">
          </div>
        </div>
      </div>
    </section>

    <!-- Collaboration Opportunities Section -->
    <section class="collaboration-opportunities-section py-4">
      <div class="container mx-auto">
        <div class="row">
          <div class="col-md-6 mb-4 order-md-2">
            <h2>Collaboration Opportunities</h2>
            <hr class="bg-warning w-25">
            <p>
              Network with our like-minded professionals in the field of agriculture and AI to bring new ideas to fruition.
Attend our seminars, webinars and workshops geared towards furthering agriculture and AI knowledge.
We are open to collaborations with other institutions, research centers, or companies to develop and innovate in agriculture-related projects.
We are open to grants and sponsorship opportunities from governments, nonprofits, and private organizations that relate to agriculture and AI.
            </p>
          </div>
          <div class="col-md-6 order-md-1">
            <img src="@/assets/collaborations.jpg" class="img-fluid rounded" alt="Collaboration Opportunities">
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="call-to-action-section py-5 bg-info text-white">
      <div class="container mx-auto text-center">
        <h2>Ready to Make a Difference?</h2>
        <p class="lead">
          Get involved today and be part of the change. Join us in advancing agriculture through AI and innovation.
        </p>
        <button class="btn btn-warning btn-lg">Join Now</button>
      </div>
    </section>

    <Footer />
  </div>
</template>

<style scoped>
.get-involved-container {
  font-family: Arial, sans-serif;
}

.jumbotron {
  background-color: #17a2b8;
}

.workshops-seminars-section,
.community-engagement-section,
.remote-sensing-section,
.collaboration-opportunities-section {
  margin-bottom: 2rem;
}

img {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.container p {
  font-size: 1rem;
  line-height: 1.5;
}

hr {
  border-top: 2px solid #ffc107;
}

h2 {
  font-weight: bold;
}

.call-to-action-section {
  background-color: #17a2b8;
}

.call-to-action-section .btn {
  background-color: #ffc107;
  border: none;
}
</style>
