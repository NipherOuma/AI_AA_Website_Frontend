<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="get-involved-container">
    <Navbar />

    <!-- Header Section -->
    <section
      class="hero-section text-center text-white d-flex align-items-center justify-content-center"
    >
      <div class="overlay"></div>
      <div class="container position-relative">
        <h2 class="display-8">GET INVOLVED</h2>
        <p class="lead">
          Join us in shaping a sustainable and prosperous future for Kenya.
          Whether you're an individual, organization, or business, there’s a
          place for you in our mission.
        </p>
      </div>
    </section>

    <!-- Involvement Options -->
    <section class="involvement-options py-5 text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="option-card p-4 mb-4">
              <img
                src="@/assets/images/Alogo.png"
                class="img-fluid mb-3"
                alt="Partner with Us"
              />
              <h3>Partner with Us</h3>
              <p>
                Collaborate on projects that align with your goals and our
                mission.
              </p>
              <a class="btn btn-outline-info mt-3" href="/contact" role="button"
                >Learn More</a
              >
            </div>
          </div>
          <div class="col-md-4">
            <div class="option-card p-4 mb-4">
              <img
                src="@/assets/images/Alogo.png"
                class="img-fluid mb-3"
                alt="Volunteer"
              />
              <h3>Volunteer</h3>
              <p>
                Contribute your time and skills to help us achieve our
                objectives.
              </p>
              <a class="btn btn-outline-info mt-3" href="/contact" role="button"
                >Sign Up</a
              >
            </div>
          </div>
          <div class="col-md-4">
            <div class="option-card p-4 mb-4">
              <img
                src="@/assets/images/Alogo.png"
                class="img-fluid mb-3"
                alt="Donate"
              />
              <h3>Donate</h3>
              <p>
                Support our initiatives through financial contributions or
                in-kind donations.
              </p>
              <a class="btn btn-outline-info mt-3" href="/contact" role="button"
                >Contribute</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Workshops and Seminars Section -->
    <section class="workshops-seminars-section py-5">
      <div class="container mx-auto">
        <div class="row align-items-center">
          <div class="col-md-6 mb-4">
            <h2>Workshops and Seminars</h2>
            <hr class="bg-warning w-25" />
            <p>
              Enhance your skills and knowledge by attending our workshops and
              seminars. Learn from industry experts and stay ahead in your
              field.
            </p>
          </div>
          <div class="col-md-6">
            <img
              src="@/assets/images/seminar.png"
              class="img-fluid rounded"
              alt="Workshops and Seminars"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Community Engagement Programs Section -->
    <section class="community-engagement-section py-4">
      <div class="container mx-auto">
        <div class="row">
          <div class="col-md-6 mb-4 order-md-2">
            <h2>Education and Digital Literacy</h2>
            <hr class="bg-warning w-25" />
            <p>
              Our education initiatives focus on integrating AI tools in the
              curriculum and enhancing digital literacy among students,
              teachers, and the wider community.
              <br />
              <b> • E-Learning Platforms:</b> Developing interactive e-learning
              modules powered by AI to support remote education. <br />
              <b> • Digital Literacy Campaigns:</b> Conducting workshops and
              training sessions to empower communities with essential digital
              skills.
            </p>
          </div>
          <div class="col-md-6 order-md-1">
            <img
              src="@/assets/images/community.png"
              class="img-fluid rounded"
              alt="Community Engagement Programs"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Applications of Remote Sensing Section -->
    <section class="remote-sensing-section py-4">
      <div class="container mx-auto">
        <div class="row align-items-center">
          <div class="col-md-6 mb-4">
            <h2>AI in Agriculture</h2>
            <hr class="bg-warning w-25" />
            <p>
              We are revolutionizing agriculture in Kenya by introducing
              AI-driven solutions that improve productivity, reduce waste, and
              ensure food security. Our projects include:
              <br />
              <b>• Precision Farming:</b> Using AI to analyze soil health,
              weather patterns, and crop performance to optimize farming
              practices. <br />
              <b>• Supply Chain Optimization:</b> Leveraging AI to reduce
              post-harvest losses and improve market access for farmers.
            </p>
          </div>
          <div class="col-md-6">
            <img
              src="@/assets/images/remote.png"
              class="img-fluid rounded"
              alt="Remote Sensing in Precision Farming"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Collaboration Opportunities Section -->
    <section class="collaboration-opportunities-section py-4">
      <div class="container mx-auto">
        <div class="row">
          <div class="col-md-6 mb-4 order-md-2">
            <h2>
              Enhancing Inclusivity of Youth Participation in Peace and Security
            </h2>
            <hr class="bg-warning w-25" />
            <p>
              Our latest initiative focuses on empowering youth through digital
              platforms and civic education programs. By enhancing digital
              literacy and providing tools for peaceful advocacy, we aim to
              promote social cohesion and long-term stability in Kenyan
              communities through • Digital Platforms for Peacebuilding • Civic
              Education Programs • Technology-Driven Security.
            </p>
          </div>
          <div class="col-md-6 order-md-1">
            <img
              src="@/assets/images/collaborations.jpg"
              class="img-fluid rounded"
              alt="Collaboration Opportunities"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="call-to-action-section py-5 bg-info text-white">
      <div class="container mx-auto text-center">
        <h2>We’d Love to Hear from You</h2>
        <p class="lead">
          Whether you have a question, want to collaborate, or are interested in
          learning more about our work, feel free to get in touch.
        </p>
        <a class="btn btn-warning btn-lg" href="/contact" role="button"
          >Join Now</a
        >
      </div>
    </section>

    <Footer />
  </div>
</template>

<style scoped>
.get-involved-container {
  font-family: Arial, sans-serif;
}

.hero-section {
  background: url("@/assets/images/get.jpg") no-repeat center center;
  background-size: cover;
  height: 60vh;
  position: relative;
}

.hero-section .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.involvement-options {
  background-color: #f8f9fa;
}

.option-card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.option-card:hover {
  transform: translateY(-5px);
}

.option-card img {
  width: 60px;
}

.option-card h3 {
  font-size: 1.5rem;
  margin-top: 15px;
  font-weight: bold;
}

.option-card p {
  font-size: 1rem;
  color: #666;
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
