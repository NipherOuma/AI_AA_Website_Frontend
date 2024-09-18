// src/composables/useMembers.js
import { ref, onMounted } from 'vue';
import axios from 'axios';

export function useMembers() {
  const teamMembers = ref([]);
  const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const fetchMembers = async () => {
    try {
      const response = await axios.get(`${VITE_API_BASE_URL}members/`);
      teamMembers.value = response.data;
    } catch (error) {
      console.error("Error fetching team members:", error);
    }
  };

  onMounted(fetchMembers);

  return {
    teamMembers,
  };
}
