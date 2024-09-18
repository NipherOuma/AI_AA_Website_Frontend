// src/composables/usePost.js
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import moment from 'moment';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function usePost() {
  const post = ref(null);
  const comments = ref([]);
  const comment = ref({
    name: "",
    email: "",
    content: "",
    post: null,
  });

  const route = useRoute();

  const fetchPost = async () => {
    const { year, month, day, slug } = route.params;

    try {
      const response = await axios.get(`${BASE_URL}blog/post/${year}/${month}/${day}/${slug}/`);
      post.value = response.data;
      post.value.publish = moment(post.value.publish).format("MMMM D, YYYY [at] h:mm:ss a");
      await fetchComments();
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  const fetchComments = async () => {
    if (post.value) {
      try {
        const response = await axios.get(`${BASE_URL}blog/post/${post.value.id}/comments/`);
        comments.value = response.data;
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }
  };

  const submitComment = async () => {
    try {
      comment.value.post = post.value.id;
      await axios.post(`${BASE_URL}blog/post/${post.value.id}/comments/`, comment.value);

      comment.value.name = "";
      comment.value.email = "";
      comment.value.content = "";
      await fetchComments(); 
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  onMounted(fetchPost);

  return {
    post,
    comments,
    comment,
    submitComment,
  };
}
