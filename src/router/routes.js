
import Login from '../container/user/login'
import Home from '../container/home'
let routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/home",
        name: "home",
        component: Home,
        children: [{

        }]
    },
    {
        from: "/",
        to: '/login'
    }
]
export default routes