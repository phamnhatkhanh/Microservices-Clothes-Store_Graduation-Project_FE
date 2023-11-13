import { useAppSelector } from "../../store/hooks";
import { checkoutPriceSelector } from "../../store/slices/checkoutPriceSlice";
import generateRating from "../../utilities/RandomGenerators/generateRating";
import toTitleCase from "../../utilities/SmallFunctions/titleCase";
import RenderHTML from '../../utilities/RenderHTML'; 
type ProductDescriptionProps = {
  id: any
  category: string;
  title: string;
  imgurl: string;
  bodyHtml: any,
  price: any;
};

const ProductDescription = ({
  id,
  category,
  title,
  imgurl,
  bodyHtml,
  price
}: ProductDescriptionProps) => {
  const checkoutPrice = useAppSelector(checkoutPriceSelector);
  const priceValue = Math.floor(price);
  const freeShippingPrice = 75;
console.log(id)
  return (
    <>
      <div className="font-outfit flex justify-between items-center px-5 mt-3 text-xl">
        <h1 className="font-bold"> {title}</h1>
        <h2>${price}</h2>
      </div>
      <div className="font-outfit flex justify-between items-center gap-2 px-5 mt-2">
        {generateRating()}
        {priceValue > freeShippingPrice || checkoutPrice > freeShippingPrice ? (
          <span className="tag font-archivo uppercase bg-slate-200 px-2 py-1 text-sm tracking-wide rounded-sm dark:bg-white dark:text-black dark:font-bold">
            Free Shipping
          </span>
        ) : null}
      </div>
      <div className="mt-5 md:flex md:justify-center">
        <img className="md:w-2/4" src={imgurl} alt={title} />
      </div>
      <div className="mt-5 md:flex md:justify-center">
      <RenderHTML htmlString={bodyHtml} />
      </div>
    </>
  );
};

export default ProductDescription;
