import Saver from './components/Saver';
import Header from './components/Header';
import Products from './components/Products';
import { useEffect, useRef, useState } from 'react';
import { ItemAddedModal } from './components/Modals/ItemAddedModal';
import DeleteProductModal from './components/Modals/DeleteProductModal';

export default function App() {
  const [isProductSelected, setIsProductSelected] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [id, setId] = useState();
  const itemAddedModalRef = useRef();

  function handleSelectedProduct(id) {
    setIsProductSelected(true);
    const isAdded = selectedItems.some((item) => item.id === id);
    const productMap = new Map(
      products.map((product) => [product.id, product])
    );
    const product = productMap.get(id);

    if (!isAdded) {
      if (product) {
        setSelectedItems((items) => [...items, product]);
      } else {
        console.log(`There is no product with id ${id}`);
      }
    } else {
      console.log('Product is already added !');
      itemAddedModalRef.current.showModal();
    }
  }

  function handleDeleteItem(id) {
    setId(id);
    setIsOpenDeleteModal(true);
  }

  useEffect(() => {
    if (selectedItems.length === 0) setIsProductSelected(false);
  }, [selectedItems]);

  return (
    <div className="app">
      <ItemAddedModal ref={itemAddedModalRef} />
      {isOpenDeleteModal ? (
        <DeleteProductModal
          id={id}
          setSelectedItems={setSelectedItems}
          selectedItems={selectedItems}
          setIsOpenDeleteModal={setIsOpenDeleteModal}
        />
      ) : null}

      <header className="header">
        <Header />
      </header>
      <section className="saver-section">
        <Saver
          isProductSelected={isProductSelected}
          selectedItems={selectedItems}
          onDeleteItem={handleDeleteItem}
        />
      </section>
      <section className="products-section">
        <Products
          products={products}
          setProducts={setProducts}
          handleSelectedProduct={handleSelectedProduct}
        />
      </section>
    </div>
  );
}

const myObject = {
  myName: 'Ahmed',
  age: 20,
};
const myMap = new Map([['Age', 20]]);

myMap.set('name', 'Ahmed');

console.log(Object.entries(myObject));
