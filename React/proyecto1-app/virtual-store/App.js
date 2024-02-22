import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './src/views/Home';
import Cart from './views/Cart';
import Product from './views/Product';

const browserRouter = createBrowserRouter([
      { path: "/", element: <Home /> },
      { path: "/product", element: <Product /> },
      { path: "/cart", element: <Cart /> }
]);

function App() {
    return (
      <RouterProvider router={browserRouter} />
    );
}
  
export default App;
    