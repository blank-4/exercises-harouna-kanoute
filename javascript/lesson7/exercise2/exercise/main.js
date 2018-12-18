new Vue({
    el: '#app',
    data: {
      counter: 0
    },
    methods: {
      incrementer() { 
        this.counter++;
      },
        decrementer() { 
          this.counter--;
        }
    }
});