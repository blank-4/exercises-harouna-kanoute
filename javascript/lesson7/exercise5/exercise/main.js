new Vue({
    el:"#app",
    data:{
      nom:"Vue Life cycle",
      nombre:0,
    },

    methods:{
      changeName:function(){
        this.nom="Vuejs Hooks"
      },
      incrementer:function(){
        this.nombre=this.nombre+1
      },
      destroy:function(){
        this.$destroy()
      }
    },
    
    beforeCreate:function(){
      console.log('beforeCreated')
    },
    created:function(){
      this.name="vuejs"
      console.log('created')
    },
    beforeMount:function(){
      console.log('before Mounted')
    },
     mounted:function(){
      console.log('mounted')
    },
    beforeUpdate:function(){
      console.log('beforeUpdate')
    },
     updated:function(){
      console.log('Updated')
    },
    beforeDestroy:function(){
      console.log('beforeDestroy')
    },
     destroyed:function(){
      console.log('Destroyed')
    }
    
  })  