<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import moment from 'moment';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

const posts = ref([]);

const currentPage = ref(1);
const postsPerPage = 5;

const processed_posts = computed(() => {
  return posts.value.map(post => ({
    ...post,
    year: moment(post.publish).format('YYYY'),
    month: moment(post.publish).format('MM'),
    day: moment(post.publish).format('DD'),
    publish: moment(post.publish).format('MMMM D, YYYY [at] h:mm:ss a') 
  }));
});

const paginatedPosts = computed(() => {
  const startIndex = (currentPage.value - 1) * postsPerPage;
  return processed_posts.value.slice(startIndex, startIndex + postsPerPage);
});

const totalPages = computed(() => {
  return Math.ceil(processed_posts.value.length / postsPerPage);
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

onMounted(() => {
  axios.get('http://localhost:8000/blog/post/')
    .then(response => {
      posts.value = response.data;
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
    });
});
</script>


<template>
    <div>
      <header>
        <Navbar />
      </header>
      
      <!-- Main Content -->
      <div class="mx-3 mt-3">
        <h2 class="text-center text-dark mb-2">Our Blogs</h2>
        <hr class="bg-warning mx-auto" style="width: 50px;">

        <div class="row">
          <!-- Blog Posts -->
          <div class="col-md-8">
            <div class="card mb-4">
              <div class="card-body">
                <!-- Blog post content -->
                <template v-for="(post, index) in paginatedPosts" :key="index">
                  <h3>
                    <router-link :to="{ name: 'PostDetail', params: { year: post.year, month: post.month, day: post.day, slug: post.slug }}" class="text-dark text-decoration-none">
                      {{ post.title }}
                    </router-link>
                  </h3>
                  <p class="text-muted">Published on {{ post.publish }} by {{ post.author_username }}</p>
                  <p>{{ getFirstParagraph(post.body) }}...</p>
                  <!-- Separator line if needed between posts -->
                  <hr v-if="index !== paginatedPosts.length - 1">
                </template>
              </div>
            </div>
  
            <!-- Pagination -->
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                  <a class="page-link" href="#" @click.prevent="previousPage">Previous</a>
                </li>
                <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
                  <a class="page-link" href="#" @click.prevent="setCurrentPage(page)">{{ page }}</a>
                </li>
                <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                  <a class="page-link" href="#" @click.prevent="nextPage">Next</a>
                </li>
              </ul>
            </nav>
          </div>
  
          <!-- Sidebar -->
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h3 class="card-title">Deepkentom Blogs</h3>
                <p class="card-text">Welcome to our blog! Here you can find various posts on different topics. Feel free to browse and enjoy the content.</p>
              </div>
              <div class="card-body">
                <h4 class="card-title">Other Blogs</h4>
                <ul class="list-unstyled">
                  <!-- Render other blogs dynamically -->
                  <li v-for="(post, index) in processed_posts" :key="index">
                    <router-link :to="{ name: 'PostDetail', params: { year: post.year, month: post.month, day: post.day, slug: post.slug }}" class="text-decoration-none">
                      {{ post.title }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Footer -->
      <footer class="mt-5">
        <Footer />
      </footer>
    </div>
  </template>
