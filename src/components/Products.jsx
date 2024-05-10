import { useEffect } from 'react';
import { Icon } from '@iconify-icon/react';

export default function Products({
  handleSelectedProduct,
  products,
  setProducts,
}) {
  useEffect(() => {
    setTimeout(() => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        })
        .catch(console.log('There is no products found !'));
    }, 2000);
  }, []);
  return (
    <>
      <h3>Available Products 🥳🥳</h3>
      {products.length === 0 ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="products-list-container">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="single-img-container"
              style={{ animationDelay: `${0.8 * index}s` }}
            >
              <img
                onClick={() => handleSelectedProduct(product.id)}
                src={product.image}
                alt={product.title}
              />
              <p>{product.price} EGP</p>
              <p>
                {Array.from(
                  { length: Math.round(product.rating.rate) },
                  (star, index) => (
                    <Icon
                      icon="ic:round-star-rate"
                      width="1.2em"
                      height="1.2em"
                      style={{ color: ' #e2c012' }}
                      key={index}
                    />
                  )
                )}
                {Array.from(
                  { length: 5 - Math.round(product.rating.rate) },
                  (star, index) => (
                    <Icon
                      icon="ic:round-star-rate"
                      width="1.2em"
                      height="1.2em"
                      key={index}
                    />
                  )
                )}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
