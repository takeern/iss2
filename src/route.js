import View from './component/View.jsx';
import Home from './component/Home';
import Contact from './component/Contact';
import Journal from './component/Journal';
import JournalShow from './component/JouralShow';


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
        ],
    },
    
];

export default routes;