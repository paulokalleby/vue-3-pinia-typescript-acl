import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import UserGatewayHttp from './infra/gateway/UserGatewayHttp'

const userGateway = new UserGatewayHttp();

//userGateway.login('paulo.devweb@gmail.com', 'password')
//.then(r => console.log(r))
//.catch(error => console.log(error));

createApp(App).mount('#app')
