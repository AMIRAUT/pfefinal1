import React from 'react';
import Header from '../components/Header';
import ProductDetails from '../components/ProductDetails';
import Footer from '../components/Footer';

const sampleProduct = {
  id: 1,
  name: 'Baby Toy',
  description: 'A fun toy for babies aged 6 months and older.',
  price: 19.99,
  image: '/path/to/image1.jpg',
};

const ProductPage = () => {
  return (
    <>
      <Header />
      <ProductDetails product={sampleProduct} />
      <Footer />
    </>
  );
};

export default ProductPage;
