import { ref, onMounted } from 'vue';
import axios from 'axios';

export function useEvents() {
  const recentHighlights = ref([]);
  const upcomingEvents = ref([]);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${baseUrl}api/events/`);
      const events = response.data;
      const currentDate = new Date();

      events.forEach((event) => {
        const eventDate = new Date(event.date);
        if (eventDate < currentDate) {
          recentHighlights.value.push(event);
        } else {
          upcomingEvents.value.push(event);
        }
      });
    } catch (error) {
      console.error('Failed to fetch events', error);
    }
  };

  onMounted(() => {
    fetchEvents();
  });

  return {
    recentHighlights,
    upcomingEvents,
    fetchEvents,
  };
}
