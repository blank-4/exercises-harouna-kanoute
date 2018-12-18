new Vue({
    el: '#app',
    data: function () {
        return {
           message : "",
           afficher : false
        }
    },
    methods: {
        lemot() {
            alert (this.message)
        }
    }
  });