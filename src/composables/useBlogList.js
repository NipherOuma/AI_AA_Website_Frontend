import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import moment from 'moment';

// Define the base URL for the API
const BASE_URL = 'http://localhost:8000/blog/post/';

export default function useBlogList() {
  const posts = ref([]);
  const currentPage = ref(1);
  const postsPerPage = 5;
  const isLoading = ref(false);
  const errorMessage = ref(null);

  const processedPosts = computed(() => {
    return posts.value.map((post) => ({
      ...post,
      year: moment(post.publish).format('YYYY'),
      month: moment(post.publish).format('MM'),
      day: moment(post.publish).format('DD'),
      publish: moment(post.publish).format('MMMM D, YYYY [at] h:mm:ss a'),
    }));
  });

  const paginatedPosts = computed(() => {
    const startIndex = (currentPage.value - 1) * postsPerPage;
    return processedPosts.value.slice(startIndex, startIndex + postsPerPage);
  });

  const totalPages = computed(() => {
    return Math.ceil(processedPosts.value.length / postsPerPage);
  });

  const setCurrentPage = (page) => {
    currentPage.value = page;
  };

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  };

  const previousPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  };

  const getFirstParagraph = (body) => {
    const paragraphs = body.split('\n');
    return paragraphs.length > 0 ? paragraphs[0] : body;
  };

  const fetchPosts = () => {
    isLoading.value = true;
    errorMessage.value = null;

    axios
      .get(BASE_URL)
      .then((response) => {
        posts.value = response.data;
      })
      .catch((error) => {
        errorMessage.value = 'Error fetching posts. Please try again later.';
        console.error('Error fetching posts:', error);
      })
      .finally(() => {
        isLoading.value = false;
      });
  };

  onMounted(() => {
    fetchPosts();
  });

  return {
    posts,
    currentPage,
    postsPerPage,
    paginatedPosts,
    totalPages,
    setCurrentPage,
    nextPage,
    previousPage,
    getFirstParagraph,
    processedPosts,
    isLoading,
    errorMessage,
    fetchPosts, 
  };
}
