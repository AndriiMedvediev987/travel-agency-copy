import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Packages from './pages/Packages.jsx';
import About from './pages/About.jsx';

//Importing Tailwind CSS
import './index.css'

// need to setup pages
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Tour from './pages/Tour';
import Package from './pages/Package';
import Booking from './pages/Booking';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';

const router= createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            }, 
            {
                path: '/packages',
                element: <Packages />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/destination/:id',
                element: <Destination />
            },
            {
                path: '/package/:id',
                element: <Tour />
            },
            {
                path: '/package',
                element: <Package />
            },
            {
                path: '/booking',
                element: <Booking />
            },
            {
                path: '/profile',
                element: <Profile />
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />  
);