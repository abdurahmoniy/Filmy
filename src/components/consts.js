import Home from "./pages/Home";
import {HomeOutlined, InfoOutlined, PlayCircleFilled, LinkOutlined} from '@ant-design/icons'
import Watch from "./pages/Watch";

export const navLink = [
    {
        element: <Home/>,
        path: '/',
        title: 'Bosh saxifa',
        id: 1,
        icon:'fas fa-home'
    },
    {
        element: <Watch/>,
        path: '/watch',
        title: 'Ko`rish',
        id: 2,
        icon:'fas fa-play'
    },
]
