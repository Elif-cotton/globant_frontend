import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home';
import Cart from './views/Cart';
import Product from './views/Product';
import NotFound from './views/NotFound';

const browserRouter = createBrowserRouter([
      { path: "/", element: <Home /> },
      { path: "/product/:id", element: <Product /> },
      { path: "/cart", element: <Cart /> },
      { path: "/*", element: <NotFound /> }, // 404 page
]);

function App() {
    return (
      <RouterProvider router={browserRouter} />
    );
}
  
export default App;
