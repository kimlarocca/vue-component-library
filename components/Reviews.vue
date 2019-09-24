<template>
  <section class="reviews" :class="alignment">
    <div class="container">
      <carousel
        class="margin-bottom-3"
        :navigationEnabled="true"
        navigationPrevLabel="&lang;"
        navigationNextLabel="&rang;"
        :perPage="1"
      >
        <slide v-for="(review, index) in reviews" :key="index">
          <p class="review">"{{ review.review }}"</p>
          <p v-if="review.name !== ''" class="name">{{ review.name }}</p>
          <p v-if="review.byline !== ''" class="byline">{{ review.byline }}</p>
          <p v-if="review.reviewDate !== ''" class="reviewDate">{{ review.reviewDate }}</p>
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>
  import reviews from '../assets/json/reviews'

  export default {
    name: 'Reviews',
    props: {
      alignment: {
        default: 'center'
      }
    },
    data: function () {
      return {
        reviews: reviews.reviews
      }
    }
  }
</script>
