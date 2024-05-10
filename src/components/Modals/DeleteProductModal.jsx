import { useEffect, useState, useRef } from 'react';

export default function DeleteProductModal({
  id,
  setSelectedItems,
  selectedItems,
  setIsOpenDeleteModal,
}) {
  const [timeCount, setTimeCount] = useState(3000);
  const deleteItemRef = useRef();

  useEffect(() => {
    setInterval(() => {
      setTimeCount((timeCount) => timeCount - 10);
    }, 20);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newItemsList = selectedItems.filter((item) => item.id !== id);
      setSelectedItems(newItemsList);
      deleteItemRef.current.close();
      setIsOpenDeleteModal(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    deleteItemRef.current.showModal();
  }, []);

  function handleOnConfirmDeleteItem() {
    const newItemsList = selectedItems.filter((item) => item.id !== id);
    setSelectedItems(newItemsList);
    deleteItemRef.current.close();
    setIsOpenDeleteModal(false);
  }

  function handleOnCancelDeleteItem() {
    deleteItemRef.current.close();
    setIsOpenDeleteModal(false);
  }
  return (
    <dialog className="custom-dialog delete-modal" ref={deleteItemRef}>
      <h2>
        Are you sure that you wanna delete this product from your saving list ?
      </h2>
      <div>
        <button
          className="custom-btn cancel-delete"
          onClick={handleOnCancelDeleteItem}
        >
          No
        </button>
        <button
          className="custom-btn confirm-delete"
          onClick={handleOnConfirmDeleteItem}
        >
          Yes
        </button>
      </div>
      <progress value={timeCount} max={3000} />
    </dialog>
  );
}
