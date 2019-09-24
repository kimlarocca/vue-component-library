<template>
  <div>

    <div class="pagination padding-vertical-2">
      <div class="previous"><i class="fas fa-angle-left"></i></div>
      <ul class="reset">
        <li><a href="#" class="current">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">...</a></li>
      </ul>
      <div class="next"><i class="fas fa-angle-right"></i></div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Pagination'
  }
</script>
