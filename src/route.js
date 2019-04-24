import View from './component/View.jsx';
import Home from './component/Home';
import Contact from './component/Contact';
import Journal from './component/Journal';
import JournalShow from './component/JouralShow';
import Conference from './component/Conference';


const routes = [
    {
        path: '/',
        component: View,
        exact: false,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true,
            },
            {
                path: '/home',
                component: Home,
                exact: true,
            },
            {
                path: '/contact',
                component: Contact,
                exact: true,
            },
            {
                path: '/journal',
                component: Journal,
                exact: true,
            },
            {
                path: '/journals',
                component: JournalShow,
                exact: true,
            },
            {
                path: '/conference',
                component: Conference,
                exact: true,
            }
        ],
    },
    
];

export default routes;