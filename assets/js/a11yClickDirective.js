import Vue from 'vue'

// initialize the directive
export const a11yClick = {
  bind (el, binding) {
    let myFunction = binding.value
    el.addEventListener('click', myFunction)
    el.addEventListener('keypress', function (e) {
      let key = e.which || e.keyCode
      if (key === 13 || key === 32) { // 13 is enter, 32 is space bar
        e.preventDefault()
        binding.value()
      }
    })
  }
}

// make it available globally
Vue.directive('a11y-click', a11yClick)
