// src/composables/useEvents.js
import { ref } from "vue";
import axiosInstance from "@/api/axiosConfig"; 

export const useEvents = () => {
  const upcomingEvents = ref([]);

  const fetchEvents = async () => {
    try {
      const response = await axiosInstance.get("events/"); 
      const events = response.data;
      const currentDate = new Date();

      // Filter only upcoming events
      upcomingEvents.value = events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate >= currentDate;
      });
    } catch (error) {
      console.error("Failed to fetch events", error);
    }
  };

  return {
    upcomingEvents,
    fetchEvents,
  };
};
