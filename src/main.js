import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import App from './App.vue';
import TeamsListVue from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';

//  hello
const router = createRouter({
    history : createWebHistory(),
    routes:[
        {path: '/teams', component: TeamsListVue},
        {path: '/users', component: UsersList}
    ]
});
const app = createApp(App)
app.use(router);
app.mount('#app');
