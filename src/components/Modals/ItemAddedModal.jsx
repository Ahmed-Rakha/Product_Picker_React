import { forwardRef } from 'react';

export const ItemAddedModal = forwardRef(function ItemAddedModal(props, ref) {
  return (
    <dialog ref={ref} className="custom-dialog">
      <h2>Product is already added !</h2>
      <form method="dialog">
        <button className="close-dialog-btn">Close</button>
      </form>
    </dialog>
  );
});
