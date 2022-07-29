import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import Catalog from './pages/Catalog';
import Furniture from './components/Furniture';
import Decorations from './components/Decorations';
import Homepage from './components/Homepage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './components/Layout/Layout';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import CategoryPage from './pages/CategoryPage';

const client = new ApolloClient({
  uri: 'https://graphql.contentful.com/content/v1/spaces/dzz5eytt1nwx/environments/master?access_token=7ww_8pRJFo1aJaxEkmW30hAPyPII3SecDUhwuaIHPZM',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Layout>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='cart' element={<CartPage />} />
              <Route path='catalog' element={<Catalog />} />
              <Route path='pdp' element={<ProductDetailsPage />}>
                <Route path=':productId' />
              </Route>
              <Route path='furniture' element={<Furniture />} />
              <Route path='decorations' element={<Decorations />} />
              <Route path='category' element={<CategoryPage />}>
                <Route path=':categoryId' />
              </Route>
              <Route path='home' element={<Homepage />} />
            </Routes>
          </Layout>
        </ApolloProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
