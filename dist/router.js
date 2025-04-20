// router.js
import HomePage from './pages/Home.js';
import ContactPage from './pages/Contact.js';

const routes = {
  '/': HomePage,
  '/index.html': HomePage,
  '/contact': ContactPage,
};

export default routes;
