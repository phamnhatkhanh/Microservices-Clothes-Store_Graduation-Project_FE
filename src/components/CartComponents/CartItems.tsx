import { Link } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useAppSelector } from "../../store/hooks";
import React from "react";
import {
  addCartItem,
  cartItemsSelector,
  removeCartItem,
  decrementCartItem
} from "../../store/slices/cartItemsSlice";
import { useAppDispatch } from "../../store/hooks";
import { setProductItems } from "../../store/slices/productSlice";
import { hideCart } from "../../store/slices/cartPageTransform";
import toTitleCase from "../../utilities/SmallFunctions/titleCase";
import { productSelector } from "../../store/slices/productSlice";
const CartItems = () => {
  const cartItemDetails = useAppSelector(cartItemsSelector);
  const dispatch = useAppDispatch();
  
  
  
  const handleCartItemDecrement = ( id: number, title:string, size: string | number) => {
    dispatch( decrementCartItem({id,title,size }));
  };

  const handleCartItemIncrement = (id:number, title:string,size: string | number) => {
    dispatch(addCartItem({ id, title, size }));
  };

  const handleRemoveCartItem = (id:number,title: string, size: string | number) => {
    dispatch(removeCartItem({ id,title, size, removeAll: true }));
  };

  return (
    <>
      <section className="flex flex-col items-center text-lg">
        {cartItemDetails.map((item, index) => {
          const { id,title, size, banner, price, quantity} =
            item;
          return index === 0 || item !== cartItemDetails[index - 1] ? (
            <React.Fragment key={String(title) + String(size)}>
              <section className="flex items-center w-11/12 mt-6 gap-4 font-outfit relative border-b border-slate-400 pb-3">
                <div>
                  <img
                    className="h-16 border-2 border-slate-900"
                    src={banner}
                    alt={title}
                  />
                </div>
                <div className="flex">
                  <div>
                    {title && price && banner ? (
                      <Link
                        onClick={() => {
                          dispatch(
                            setProductItems({ 
                              id,
                              title,
                              banner,
                              price,  
                              })
                            
                          );
                          dispatch(hideCart());
                        }}
                        to={`/products/${title}`}
                        className="underline font-bold tracking-wide"
                      >
                        {`${title}`}
                      </Link>
                    ) : null}
                    <h3 className="">Size : {size}</h3>
                    <div className="mt-1 flex justify-between items-center px-2 w-28 h-7 border-[3px] border-slate-300">
                      <a
                        className="text-lg cursor-pointer"
                        onClick={() => {
                          handleCartItemDecrement(id, title,size);
                        }}
                      >
                        <AiOutlineMinus />
                      </a>
                      <p className="font-bold">{quantity}</p>
                      <a
                        className="text-lg cursor-pointer"
                        onClick={() => {
                          handleCartItemIncrement(id,title, size);
                        }}
                      >
                        <AiOutlinePlus />
                      </a>
                    </div>
                  </div>
                  <div className="absolute right-3 top-2 flex flex-col gap-8 items-center">
                    <span
                      className="text-sm cursor-pointer"
                      onClick={() => {
                        quantity ? handleRemoveCartItem(id,title, size) : null;
                      }}
                    >
                      <RxCross1 strokeWidth={2} />
                    </span>
                    <p>{price}</p>
                  </div>
                </div>
              </section>
            </React.Fragment>
          ) : null;
        })}
      </section>
    </>
  );
};

export default CartItems;
