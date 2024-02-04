export default [
    {
        path: '/',  //@ts-ignore
        component: import("@/layouts/DefaultLayout.vue"),
        children: [
            {
                name: 'home', //@ts-ignore
                component: import("@/pages/HomePage.vue"),
                path: '/'
            },
            {
                name: 'about', //@ts-ignore
                component: () => import("@/pages/AboutPage.vue"),
                path: '/about'
            },
            {
                name: 'contact', //@ts-ignore
                component: import("@/pages/ContactPage.vue"),
                path: '/contact'
            }
        ]
    },
    
    {
        path: '/auth',  //@ts-ignore
        component: import("@/layouts/AuthLayout.vue"),
        children: [
            {
                name: 'login', //@ts-ignore
                component: import("@/pages/auth/LoginPage.vue"),
                path: '/auth/login'
            },
            {
                name: 'register', //@ts-ignore
                component: import("@/pages/auth/RegisterPage.vue"),
                path: '/auth/register'
            },
            {
                name: 'forgot.password', //@ts-ignore
                component: import("@/pages/auth/ForgotPasswordPage.vue"),
                path: '/auth/forgot-password'
            },
            {
                name: 'reset.password', //@ts-ignore
                component: import("@/pages/auth/ResetPasswordPage.vue"),
                path: '/auth/reset-password'
            },
        ]
    },
    {
        path: "/:pathMatch(.*)*",
        component: import("@/pages/PageNotFound.vue"),
    }
]