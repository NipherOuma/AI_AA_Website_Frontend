<script setup>
import useBlogList from '@/composables/useBlogList';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

const {
  posts,
  currentPage,
  paginatedPosts,
  totalPages,
  setCurrentPage,
  nextPage,
  previousPage,
  getFirstParagraph,
  processedPosts,
} = useBlogList();
</script>

<template>
  <div>
    <Navbar />
    <!-- Main Content -->
    <div class="mx-3 mt-3">
      <h2 class="text-center text-dark mb-2">Our Blogs</h2>
      <hr class="bg-warning mx-auto" style="width: 50px" />

      <div class="row">
        <!-- Blog Posts -->
        <div class="col-md-8">
          <div class="card mb-4">
            <div class="card-body">
              <!-- Blog post content -->
              <template v-for="(post, index) in paginatedPosts" :key="index">
                <h3>
                  <router-link
                    :to="{
                      name: 'PostDetail',
                      params: {
                        year: post.year,
                        month: post.month,
                        day: post.day,
                        slug: post.slug,
                      },
                    }"
                    class="text-dark text-decoration-none"
                  >
                    {{ post.title }}
                  </router-link>
                </h3>
                <p class="text-muted">
                  Published on {{ post.publish }} by {{ post.author_username }}
                </p>
                <p>{{ getFirstParagraph(post.body) }}...</p>
                <!-- Separator line if needed between posts -->
                <hr v-if="index !== paginatedPosts.length - 1" />
              </template>
            </div>
          </div>

          <!-- Pagination -->
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a class="page-link" href="#" @click.prevent="previousPage">Previous</a>
              </li>
              <li
                class="page-item"
                v-for="page in totalPages"
                :key="page"
                :class="{ active: page === currentPage }"
              >
                <a class="page-link" href="#" @click.prevent="setCurrentPage(page)">{{ page }}</a>
              </li>
              <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                <a class="page-link" href="#" @click.prevent="nextPage">Next</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-md-4">
          <div class="card mb-4">
            <!-- Deepkentom Blogs Section -->
            <div class="card-body">
              <h3 class="card-title">Deepkentom Blogs</h3>
              <p class="card-text">
                Welcome to our blog! Here you can find various posts on different topics. Feel free to browse and enjoy the content.
              </p>
            </div>

            <!-- Image Between Sections -->
            <div class="text-center my-2 px-3">
              <img src="@/assets/maize.jpg" alt="Divider Image" class="img-fluid rounded" style="border-radius: 8px" />
            </div>

            <!-- Other Blogs Section -->
            <div class="card-body">
              <h4 class="card-title">Other Blogs</h4>
              <ul class="list-unstyled">
                <li v-for="(post, index) in processedPosts" :key="index">
                  <router-link
                    :to="{
                      name: 'PostDetail',
                      params: {
                        year: post.year,
                        month: post.month,
                        day: post.day,
                        slug: post.slug,
                      },
                    }"
                    class="text-decoration-none"
                  >
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
