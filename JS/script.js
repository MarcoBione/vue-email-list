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
            //emailList reset
            this.emailList=[''];
            //cicle for create email + push
            for(let i = 0; i < this.genNum; i++){

                axios.get(this.api).then((res) => {

                    //check correct load of user number
                    //console.log(this.genNum),

                    //push generated emails to array
                    this.emailList.push(res.data.response)
                })
            }
            this.renderList = [...this.emailList];
            //check array of emails
            //console.log(this.emaiList);
            
        }

    }
}).mount('#app');