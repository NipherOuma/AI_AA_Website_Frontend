<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

const staticImage = "@/assets/impact1.jpg";
</script>

<template>
  <div class="impact-container">
    <Navbar />

    <div class="hero-section">
      <div class="hero-overlay"></div>
      <section class="hero-content text-center">
        <div class="container text-white mx-auto">
          <h2 class="display-8">OUR IMPACT</h2>
          <p class="lead">
            We at AI AA NGO aim to enhance agricultural productivity and
            sustainability in Kenya by deploying artificial intelligence
            technologies that optimize farming practices, improve yield
            forecasts, and increase market accessibility for smallholder
            farmers.
          </p>
        </div>
      </section>
    </div>

    <!-- Impact Cards Section -->
    <section class="impact-cards py-3">
      <h2 class="text-center mb-4">Our Goals</h2>
      <hr class="bg-warning mx-auto" style="width: 12%" />
      <div class="container mx-auto">
        <div class="row">
          <!-- SDG 2 Card -->
          <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="@/assets/sdg2.png"
                alt="SDG 2 - Zero Hunger"
                class="img-fluid"
              />
              <div class="card-body">
                <h3 class="card-title">SDG 2 - Zero Hunger</h3>
                <p class="card-text">
                  By enhancing agricultural productivity using AI, AI AA
                  directly contributes to achieving food security, improved
                  nutrition, and promoting sustainable agriculture. AI can help
                  predict crop yields, manage pest control, and optimize
                  resource use, thereby increasing food production.
                </p>
              </div>
            </div>
          </div>

          <!-- SDG 9 Card -->
          <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="@/assets/sdg9.png"
                alt="SDG 9 - Industry, Innovation, and Infrastructure"
                class="img-fluid"
              />
              <div class="card-body">
                <h3 class="card-title">
                  SDG 9 - Industry, Innovation, and Infrastructure
                </h3>
                <p class="card-text">
                  The integration of AI into agriculture represents a
                  significant innovation in agricultural practices. This
                  supports building resilient infrastructure and fosters
                  innovation, particularly in the context of Kenyan agriculture.
                </p>
              </div>
            </div>
          </div>

          <!-- SDG 12 Card -->
          <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="@/assets/sdg12.png"
                alt="SDG 12 - Responsible Consumption and Production"
                class="img-fluid"
              />
              <div class="card-body">
                <h3 class="card-title">
                  SDG 12 - Responsible Consumption and Production
                </h3>
                <p class="card-text">
                  AI technologies will enable more efficient use of resources in
                  farming, such as water and soil nutrients, and reduce waste
                  through precision agriculture techniques. This aligns with
                  sustainable management and efficient use of natural resources.
                </p>
              </div>
            </div>
          </div>

          <!-- SDG 13 Card -->
          <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="@/assets/sdg13.png"
                alt="SDG 13 - Climate Action"
                class="img-fluid"
              />
              <div class="card-body">
                <h3 class="card-title">SDG 13 - Climate Action</h3>
                <p class="card-text">
                  AI will aid in adapting agricultural practices to climate
                  change and mitigating its impacts. This includes predicting
                  climate-related risks, optimizing planting schedules, and
                  developing climate-resilient crop varieties.
                </p>
              </div>
            </div>
          </div>

          <!-- SDG 15 Card -->
          <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="@/assets/sdg15.png"
                alt="SDG 15 - Life on Land"
                class="img-fluid"
              />
              <div class="card-body">
                <h3 class="card-title">SDG 15 - Life on Land</h3>
                <p class="card-text">
                  AI will contribute to sustainably managing forests, combating
                  desertification, halting and reversing land degradation, and
                  halting biodiversity loss. For example, AI-driven data can
                  guide farmers on crop rotation and soil health to maintain
                  land fertility.
                </p>
              </div>
            </div>
          </div>

          <!-- SDG 17 Card -->
          <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="@/assets/sdg17.png"
                alt="SDG 17 - Partnerships for the Goals"
                class="img-fluid"
              />
              <div class="card-body">
                <h3 class="card-title">SDG 17 - Partnerships for the Goals</h3>
                <p class="card-text">
                  Partnerships with tech companies, government agencies, NGOs,
                  and international organizations will bring diverse expertise
                  and resources together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Objectives Section -->
    <section class="about-objectives py-5">
      <h2 class="text-center mb-4">Our Objectives</h2>
      <hr class="bg-warning mx-auto" style="width: 15%" />
      <div class="container mx-auto">
        <div class="row">
          <!-- Objectives on the left -->
          <div class="col-sm-12 col-md-6 objectives-content mb-4">
            <ul class="list-unstyled objectives-list">
              <li class="d-flex align-items-center mb-3">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span
                  >Innovation Integration: Introduce AI-driven tools and
                  techniques to 500 farms across Kenya by 2025 to increase crop
                  yields and resource efficiency.</span
                >
              </li>
              <li class="d-flex align-items-center mb-3">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span
                  >Education and Training: Develop and provide training programs
                  for at least 10,000 farmers by 2025 on utilizing AI for
                  sustainable farming practices.</span
                >
              </li>
              <li class="d-flex align-items-center mb-3">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span
                  >Research and Development: Collaborate with agricultural and
                  tech experts to innovate new AI applications tailored to the
                  unique challenges of Kenyan agriculture.</span
                >
              </li>
              <li class="d-flex align-items-center mb-3">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span
                  >Community Engagement: Establish a network of AI in
                  Agriculture community hubs by 2025 to facilitate knowledge
                  sharing and local engagement.</span
                >
              </li>
              <li class="d-flex align-items-center mb-3">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span
                  >Policy Advocacy: Work with policymakers to shape an
                  AI-inclusive regulatory framework that supports innovation
                  while protecting farmers' interests.</span
                >
              </li>
              <li class="d-flex align-items-center mb-3">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span
                  >Economic Empowerment: Increase the income of small-scale
                  farmers by 30% through AI-enabled precision agriculture and
                  market access tools by 2027.</span
                >
              </li>
              <li class="d-flex align-items-center mb-3">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span
                  >Partnerships: Forge strategic partnerships with international
                  AI and agriTech organizations to bring global expertise to the
                  Kenyan context.</span
                >
              </li>
            </ul>
          </div>

          <!-- Image on the right -->
          <div class="col-sm-12 col-md-6">
            <img
              src="@/assets/illustration.png"
              alt="AI in Agriculture"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<style scoped>
.impact-container {
  font-family: Arial, sans-serif;
}

.hero-content {
  padding-top: 3rem;
}
.hero-section {
  position: relative;
  padding-top: 3rem;
  background: url("@/assets/impact2.jpg") no-repeat center center;
  background-size: cover;
  height: 65vh;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  color: white;
}

.card {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease;
}

.card:hover {
  transform: scale(1.05);
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 1rem;
}

.impact-cards {
  margin-top: 4rem;
}

.objectives-content {
  font-size: 1rem;
}

.objectives-list {
  list-style-type: none;
  padding: 0;
}

.objectives-list li {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.objectives-list i {
  font-size: 1.5rem;
}

.card img {
  max-width: 100%;
  height: 280px;
}
</style>
