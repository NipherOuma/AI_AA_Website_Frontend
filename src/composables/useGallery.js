import { ref, onMounted } from 'vue';
import axios from 'axios';
import { Modal } from 'bootstrap';

export function useGallery() {
  const images = ref([]);
  const selectedImage = ref(null);
  let bsModal = null;

  const fetchImages = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}api/gallery/`);
      images.value = response.data;
    } catch (error) {
      console.error('Failed to fetch gallery images:', error);
    }
  };

  const openModal = (image) => {
    selectedImage.value = image;
    bsModal.show();
  };

  const closeModal = () => {
    bsModal.hide();
  };

  const getRandomSpan = () => {
    return Math.floor(Math.random() * 2) + 1;
  };

  onMounted(() => {
    fetchImages();
    const modalElement = document.getElementById('imageModal');
    bsModal = new Modal(modalElement);
  });

  return {
    images,
    selectedImage,
    openModal,
    closeModal,
    getRandomSpan,
  };
}
