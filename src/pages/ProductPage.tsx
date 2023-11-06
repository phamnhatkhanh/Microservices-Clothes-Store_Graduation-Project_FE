import { useSearchParams } from "react-router-dom";
import toTitleCase from "../utilities/SmallFunctions/titleCase";
import { useAppSelector } from "../store/hooks";
import { productSelector } from "../store/slices/productSlice";
import { useEffect } from "react";
import Breadcrumb from "../components/ProductComponents/Breadcrumb";
import ProductDescription from "../components/ProductComponents/ProductDescription";
import SizeAndCartPanel from "../components/ProductComponents/SizeAndCartPanel";

import Loader from "../components/Reusables/Loader";

const ProductPage = () => {
  const [searchParam] = useSearchParams();
  const category = searchParam.get("category") || "";
  const isLoading = false;
  
  const productItems = useAppSelector(productSelector);
  
  const { id,title,bodyHtml,vendor,productType,createdAt,updatedAt,publishedAt,banner,price,tags,status} = productItems;

  useEffect(() => {
    window.scroll({ top: 0 });
  }, [productItems]);

  const productCategory = `${toTitleCase(title)}`;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>

          <section className="productPreview mt-20 pb-5 transition-all duration-500 dark:bg-black dark:text-white">
            <Breadcrumb
              product={title}
              productCategory={productCategory}
              category={category}
            />
            <ProductDescription
              id={id}
              category={category}
              title={title}
              imgurl={banner}
              bodyHtml = {bodyHtml}
              price={price}
            />
            <SizeAndCartPanel price={price} category={category} />
          </section>
        </>
      )}
    </>
  );
};

export default ProductPage;
