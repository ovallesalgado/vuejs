const app = new Vue({
    el:'#app',
    data:{
     mensaje:'HOLA DESDE VUEJS',
     contador:0,
     enable:false,
     disable:false
    },

    methods:{
        
    },
    computed:{
        invertido(){          
        return this.mensaje.split('').reverse().join('');
        },

        color(){
            return {
                'bg-info':this.contador <= 25,
                'bg-success':this.contador >= 25 && this.contador<=50,
                'bg-warning':this.contador >= 50 && this.contador<=75,
                'bg-danger':this.contador > 75
            }
        },

        
        max(){
            this.enable=false;
            if(this.contador>=100){
                this.enable=true;
            }
            return this.enable;
            
         },

         min(){
            this.disable=false;
            if(this.contador<=0){
                this.disable=true;
            }
            return this.disable;
            
         }

         

    
    }
})