const app =new Vue({
    el:"#app",
    data:{
        titulo:'HOLA con VUE',
        carros:[
        {nombre:'mazda', cantidad:0},
        {nombre:'kia',  cantidad:10},
        {nombre:'audi', cantidad:10},
        ],
        nuevoCarro:''
    },
    methods:{
        agregarCarro (){
           this.carros.push({
            nombre:this.nuevoCarro, cantidad:0
           });
           this.nuevoCarro=''
           
        }
    }




    })