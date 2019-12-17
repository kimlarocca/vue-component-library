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
          <div class="review like-p">"{{ review.review }}"</div>
          <div v-if="review.name !== ''" class="name like-p">{{ review.name }}</div>
          <div v-if="review.byline !== ''" class="byline like-p">{{ review.byline }}</div>
          <div v-if="review.reviewDate !== ''" class="reviewDate like-p">{{ review.reviewDate }}</div>
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
