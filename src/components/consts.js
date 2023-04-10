import Contact from "./pages/Contact";
import About from "./pages/Afilm";
import Home from "./pages/Home";
import {HomeOutlined, InfoOutlined, PlayCircleFilled, LinkOutlined} from '@ant-design/icons'
import Watch from "./pages/Watch";

export const navLink = [
    {
        element: <Home/>,
        path: '/',
        title: 'Home',
        id: 1,
        icon:'fas fa-home'
    },
    {
        element: <Watch/>,
        path: '/watch',
        title: 'Watch',
        id: 2,
        icon:'fas fa-play'
    },
    {
        element: <Contact/>,
        path: '/contact',
        title: 'Contact',
        id: 4,
        icon: 'fas fa-link'
    },
]

export const navHome = [
    {
        element: <Contact/>,
        path: '/contact',
        title: 'Contact',
        id: 4,
        icon: 'fas fa-link'
    },
]

export const navWatch = [
    {
        element: <Home/>,
        path: '/',
        title: 'Home',
        id: 1,
        icon: 'fas fa-home'
    },
    {
        element: <Contact/>,
        path: '/contact',
        title: 'Contact',
        id: 4,
        icon: 'fas fa-link'
    },
]

export const navContact = [
    {
        element: <Home/>,
        path: '/',
        title: 'Home',
        id: 1,
        icon: 'fas fa-home'
    },
    {
        element: <Watch/>,
        path: '/watch',
        title: 'Watch',
        id: 2,
        icon:'fas fa-play'
    },
]