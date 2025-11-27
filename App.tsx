
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import Catalog from './pages/Catalog';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';
import DeliveryPage from './pages/DeliveryPage';
import PriceListPage from './pages/PriceListPage';

// ScrollToTop component to handle scroll on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<CalculatorPage />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="pricelist" element={<PriceListPage />} />
          <Route path="delivery" element={<DeliveryPage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPostPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
