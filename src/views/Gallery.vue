<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { Modal } from 'bootstrap';

const images = ref([]);
const selectedImage = ref(null);
let bsModal = null;

onMounted(() => {
  axios.get('http://127.0.0.1:8000/api/gallery/')
    .then(response => {
      images.value = response.data;
    })
    .catch(error => {
      console.log(error);
    });

  const modalElement = document.getElementById('imageModal');
  bsModal = new Modal(modalElement);
});

function openModal(image) {
  selectedImage.value = image;
  bsModal.show();
}

function closeModal() {
  bsModal.hide();
}
</script>

<template>
  <header>
    <Navbar />
  </header>
  <div class="container mt-3">
    <div class="row">
        <h2 class="text-center text-dark mb-2">Our Visual Showcase</h2>
      <div class="col-md-4 mt-4" v-for="image in images" :key="image.id">
        <div class="card mb-4 shadow-sm image-card" @click="openModal(image)">
          <img :src="image.image" class="card-img-top" :alt="image.title">
          <div class="overlay">
            <div class="overlay-content">
              <h5 class="card-title">{{ image.title }}</h5>
              <p class="card-text">{{ image.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ selectedImage?.title }}</h5>
          <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img :src="selectedImage?.image" class="img-fluid" :alt="selectedImage?.title">
          <p class="mt-3">{{ selectedImage?.description }}</p>
        </div>
      </div>
    </div>
  </div>

  <footer>
    <Footer />
  </footer>
</template>

<style scoped>

.card-img-top {
  height: 300px; 
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.image-card {
  position: relative;
  cursor: pointer;
  overflow: hidden;
}

.image-card:hover .card-img-top {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.image-card:hover .overlay {
  opacity: 1;
}

.overlay-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  color: white;
  text-align: center;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
}

.modal-header {
  border-bottom: none;
}

.modal-title {
  font-weight: bold;
}

.modal-body img {
  width: 100%;
  max-height: 400px; 
  object-fit: cover;
  border-radius: 10px;
}

.modal-body {
  padding: 20px;
  text-align: center;
}

.modal-footer {
  border-top: none;
  text-align: right;
  padding: 10px 20px;
}

.btn-close {
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  opacity: 0.5;
  cursor: pointer;
}

@media (max-width: 576px) {
  .modal-dialog {
    width: 95%;
    margin: 1.75rem auto;
  }

  .btn-close {
    font-size: 1.2rem;
  }
}
</style>
