import { ref } from 'vue';
import axios from 'axios';

export function useContact() {
  const name = ref('');
  const email = ref('');
  const message = ref('');
  const formMessage = ref('');
  const alertType = ref('');
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`${baseUrl}api/contact/`, {
        name: name.value,
        email: email.value,
        message: message.value,
      });

      formMessage.value = 'Your message has been sent successfully!';
      alertType.value = 'alert-success';

      name.value = '';
      email.value = '';
      message.value = '';
    } catch (error) {
      formMessage.value = 'There was an error sending your message. Please try again.';
      alertType.value = 'alert-danger';
    }
  };

  return {
    name,
    email,
    message,
    formMessage,
    alertType,
    submitForm,
  };
}
