import View from './component/View.jsx';
import Home from './component/Home';
import Book from './component/Book';
import Conference from './component/Conference';
import Contact from './component/Contact';


const routes = [
    {
        path: '/',
        component: View,
        exact: false,
        routes: [
            {
                path: '/home',
                component: Home,
                exact: true,
            },
            {
                path: '/book',
                component: Book,
                exact: true,
            },
            {
                path: '/conferenceProceedings',
                component: Conference,
                exact: true,
            },
            {
                path: '/contact',
                component: Contact,
                exact: true,
            },
        ],
    },
];

export default routes;