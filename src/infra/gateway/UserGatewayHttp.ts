import httpAdapter from '../http/HttpClientAdapter';

export default class UserGatewayHttp{

    async login(email: string, password: string) : Promise<any> 
    {
        const device = `vue-application${navigator.userAgent}`;

        httpAdapter.post('/auth/login', {
            email,
            password,
            device
        });
    }
}