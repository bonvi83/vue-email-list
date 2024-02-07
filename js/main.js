const {createApp} = Vue;

const App = createApp ({
    data () {
        return {
            title: `Progetto email`,
            mailList: [],
        };
    },

    methods: [
    ],

    mounted() {
        for (let i = 0; i > 10; i++) {
            axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((response) => {
                const mail = response.data.response;
                this.mailList.push(mail);
            });
        }
    },
});

App.mount(`#app`);