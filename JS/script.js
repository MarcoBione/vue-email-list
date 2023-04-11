const { createApp } = Vue;

createApp({
    data() {
        return {
            //address of api
            api: 'https://flynn.boolean.careers/exercises/api/random/mail',
            genNum: 0,
            emailList:[],
        }
    },
    methods: {
        getApis(){
            axios.get(this.api).then((res) => {
                console.log(this.genNum),
                console.log(res.data.response);
            })
        }

    }
}).mount('#app');