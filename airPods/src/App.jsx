import { CommonProvider } from './common/CommonContext';
import { CartProvider } from './contexts/cart/cartContext';
import Header from './main/Header';
import RouterRoutes from './routes/RouterRoutes';
import Footer from './main/Footer';
import BackTop from './main/BackTop';
import { FiltersProvider } from './cartFilters/FiltersContext';

const App = () => {
  return (
    <>
      <CommonProvider>
        <FiltersProvider>
          <CartProvider>
            <Header />
            <RouterRoutes />
            <Footer />
            <BackTop />
          </CartProvider>
        </FiltersProvider>
      </CommonProvider>
    </>
  );
};

export default App;
