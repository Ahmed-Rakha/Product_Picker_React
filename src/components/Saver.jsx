import { Icon } from '@iconify-icon/react';

export default function Saver({
  isProductSelected,
  selectedItems,
  onDeleteItem,
}) {
  return (
    <>
      <h2>Your Saved Products 🤩</h2>
      {!isProductSelected ? (
        <>
          <h3>I'd like to try...</h3>
          <p>Select the product you would like to try from below.</p>
        </>
      ) : (
        <div className="products-list-container">
          {selectedItems.map((product, index) => (
            <div key={product.id} className="single-img-container">
              <img src={product.image} alt={product.title} />
              <p>{product.price} EGP</p>
              <span
                className="delete-product"
                onClick={() => onDeleteItem(product.id)}
              >
                ❌
              </span>
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
