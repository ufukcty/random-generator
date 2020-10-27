const app = Vue.createApp({
    data() {
        return {
            number: 0,
            visibility: false,
            upperLimit: 100,
            lowerLimit: 1,

        };
    },
    methods:  {
        createRandom(){
            this.visibility = true;
            this.number = Math.floor(Math.random() * this.upperLimit) + this.lowerLimit;
        },
        clearCreator() {
            this.visibility = false;
            this.upperLimit = 0;
            this.lowerLimit = 0;
        }
    }
});
app.mount('#creator');