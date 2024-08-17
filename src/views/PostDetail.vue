<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import moment from 'moment'; 
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

const post = ref(null);
const comments = ref([]);
const comment = ref({
  name: '',
  email: '',
  content: '',
  post: null 
});

const route = useRoute();

onMounted(async () => {
  const { year, month, day, slug } = route.params;

  try {
    const response = await axios.get(`http://localhost:8000/blog/post/${year}/${month}/${day}/${slug}/`);
    post.value = response.data;
    // Format the publish date with time details
    post.value.publish = moment(post.value.publish).format('MMMM D, YYYY [at] h:mm:ss a');
    fetchComments(); 
  } catch (error) {
    console.error('Error fetching post:', error);
  }
});

const fetchComments = async () => {
  try {
    const response = await axios.get(`http://localhost:8000/blog/post/${post.value.id}/comments/`);
    comments.value = response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
};

const submitComment = async () => {
  try {
    comment.value.post = post.value.id;
    await axios.post(`http://localhost:8000/blog/post/${post.value.id}/comments/`, comment.value);

    comment.value.name = '';
    comment.value.email = '';
    comment.value.content = '';
    fetchComments();
  } catch (error) {
    console.error('Error submitting comment:', error);
  }
};
</script>

<template>
    <div>
      <header>
        <Navbar />
      </header>
  
      <div class="mx-4 mt-5">
        <div class="row">
          <!-- Blog Post -->
          <div class="col-md-8 card">
            <div v-if="post" class="mt-2">
              <h1>{{ post.title }}</h1>
              <p class="date">Published on {{ post.publish }} by {{ post.author_username }}</p>
              <p v-html="post.body" class="fs-5 fw-light lh-base"></p>
            </div>
            <div v-else>
              <p>Loading...</p>
            </div>
  
            <!-- Comment Form -->
            <div class="card mt-4">
              <div class="card-body">
                <h3 class="card-title">Leave a Comment</h3>
                <form @submit.prevent="submitComment">
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" v-model="comment.name" required>
                  </div>
                  <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" v-model="comment.email" required>
                  </div>
                  <div class="form-group">
                    <label for="content">Comment</label>
                    <textarea class="form-control" id="content" rows="3" v-model="comment.content" required></textarea>
                  </div>
                  <!-- Hidden input field to store the post ID -->
                  <input type="hidden" v-model="comment.post">
                  <button type="submit" class="btn btn-outline-secondary mt-2">Submit</button>
                </form>
              </div>
            </div>
  
            <!-- Display Comments -->
            <div class="card mt-4" v-if="comments.length > 0">
              <div class="card-body">
                <h3 class="card-title">Comments ({{ comments.length }})</h3>
                <ul class="list-unstyled">
                  <li v-for="(comment, index) in comments" :key="index">
                    <p><strong>{{ comment.name }}</strong> - {{ comment.email }}</p>
                    <p>{{ comment.content }}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div v-else>
              <p>No comments yet.</p>
            </div>
          </div>
  
          <!-- Sidebar -->
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h3 class="card-title">About This Blog</h3>
                <p class="card-text">Welcome to my blog! Here you can find various posts on different topics. Feel free to browse and enjoy the content.</p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Other Blogs</h4>
                <ul class="list-unstyled">
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
  