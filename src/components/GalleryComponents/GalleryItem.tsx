import { Link } from "react-router-dom";
import toTitleCase from "../../utilities/SmallFunctions/titleCase";

type GalleryItemProps = {
  imageUrl: string;
  bodyHTML: string;
  title: string;
  price: number;
};

const GalleryItem = ({ imageUrl, price, title }: GalleryItemProps) => {
  const renderLinks = () => {
    return (
      <Link 
        to={`/products/${title}`}
        className="bg-slate-900 text-center btn-hover border-2 border-black transition-all text-white px-4 py-3 w-full cursor-pointer rounded-md uppercase dark:bg-slate-800"
      >
        Shop now
      </Link>
    );
  };

  return (
    <>
      <div className="item w-80 mx-1 overflow-hidden select-none rounded-md shadow-normal shadow-slate-300 dark:shadow-[#6b6b6bc4]">
        <picture>
          <img
            loading="lazy"
            className="w-80 h-56 transition-all object-cover"
            src={imageUrl}
            
          />
        </picture>
        <div className="mb-4 px-5 py-6 flex flex-col items-baseline font-outfit">
          <p className="font-medium text-xl text-slate-800 dark:text-white leading-7 whitespace-nowrap">
            {title}
          </p>
          <p className="font-medium text-xl text-slate-800 dark:text-white leading-7 whitespace-nowrap">
            ${price}
          </p>
          <div className="buttons space-y-2 flex flex-col items-center w-full mt-3">
            {renderLinks()}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryItem;
