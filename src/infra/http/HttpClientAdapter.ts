import axios, { AxiosInstance } from "axios";
import HttpClient from "./HttpClient";

class HttpClientAdapter implements HttpClient {

    private axiosInstace: AxiosInstance | null = null;
    private static instance: HttpClientAdapter | null = null;

    constructor() {
        const baseUrl = 'https://api-laravel-acl.dev.com';

        this.axiosInstace = axios.create({
            baseURL: baseUrl,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }

    static getInstance(): HttpClient {
        if (!this.instance) {
            this.instance = new HttpClientAdapter();
        }

        return this.instance;
    }

    async get(url: string, configs?: object | undefined): Promise<any> {
        return await this.axiosInstace?.get(url, configs);
    }

    async post(url: string, body: object, configs?: object | undefined): Promise<any> {
        return await this.axiosInstace?.post(url, body, configs);
    }

    async put(url: string, body: object, configs?: object | undefined): Promise<any> {
        return await this.axiosInstace?.put(url, body, configs);
    }

    async delete(url: string, configs?: object | undefined): Promise<any> {
        return await this.axiosInstace?.delete(url, configs);
    }

}

export default HttpClientAdapter.getInstance()