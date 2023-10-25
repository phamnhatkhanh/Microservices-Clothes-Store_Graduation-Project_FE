import { useSearchParams } from "react-router-dom";
import toTitleCase from "../utilities/SmallFunctions/titleCase";
import { useAppSelector } from "../store/hooks";
import { productSelector } from "../store/slices/productSlice";
import { useEffect } from "react";
import Breadcrumb from "../components/ProductComponents/Breadcrumb";
import ProductDescription from "../components/ProductComponents/ProductDescription";
import SizeAndCartPanel from "../components/ProductComponents/SizeAndCartPanel";
import { loadingSelector } from "../store/slices/loadingSlice";
import Loader from "../components/Reusables/Loader";

const ProductPage = () => {
  const [searchParam] = useSearchParams();
  const category = searchParam.get("category") || "";
  const isLoading = false;
  // const isLoading = useAppSelector(loadingSelector);
  const productItems = useAppSelector(productSelector);
  // const { Imgurl, product, title, price } = productItems;

  // useEffect(() => {
  //   window.scroll({ top: 0 });
  // }, [productItems]);

  // const productCategory = `${toTitleCase(category)}'s ${toTitleCase(title)}`;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <section className="productPreview mt-20 pb-5 transition-all duration-500 dark:bg-black dark:text-white">
    <div className="breadcrumb font-kanit text-sm flex gap-1 pl-5 dark:tracking-wide dark:font-light"><a
            className="underline" href="/">Home</a><span>/</span><a className="underline" href="/search">Men's Tree
            Pipers</a><span>/</span><a className="underline" href="/search">Sneaker</a><span>/</span></div>
    <div className="font-outfit flex justify-between items-center px-5 mt-3 text-xl">
        <h1 className="font-bold">Men's Tree Pipers</h1>
        <h2>$38</h2>
    </div>
    <div className="font-outfit flex justify-between items-center gap-2 px-5 mt-2">
        <div className="flex items-center gap-2"><span className="flex gap-1 text-base"><svg stroke="currentColor"
                    fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z">
                    </path>
                </svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z">
                    </path>
                </svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z">
                    </path>
                </svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                    width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.025 20.775A.998.998 0 0 0 6 22a1 1 0 0 0 .555-.168L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107-1.491 6.452zM12 5.429l2.042 4.521.588.047h.001l3.972.315-3.271 2.944-.001.002-.463.416.171.597v.003l1.253 4.385L12 15.798V5.429z">
                    </path>
                </svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z">
                    </path>
                </svg></span><span className="text-sm underline">(8708)</span></div>
    </div>
    <div className="mt-5 md:flex md:justify-center">
      <img className="md:w-2/4"
            src="https://images.unsplash.com/photo-1628012129394-04246f369582?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0NzcwMTB8MHwxfHNlYXJjaHwyMHx8c25lYWtlcnN8ZW58MHwyfHx8MTY5ODI1MTQ0MXww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
            alt="Tree Pipers"/></div>
    <div>
        <div className="mt-4 px-4 font-outfit flex flex-col">
            <p className="font-bold uppercase tracking-wide">Select Size : </p>
            <div className="flex gap-2 mt-2 ">
                <div
                    className="border-2 text-lg w-1/4 md:w-52 h-[11vw] md:h-[7vw] cursor-pointer flex justify-center items-center transition-all bg-transparent text-black dark:text-white">
                    5</div>
                <div
                    className="border-2 text-lg w-1/4 md:w-52 h-[11vw] md:h-[7vw] cursor-pointer flex justify-center items-center transition-all bg-transparent text-black dark:text-white">
                    6</div>
                <div
                    className="border-2 text-lg w-1/4 md:w-52 h-[11vw] md:h-[7vw] cursor-pointer flex justify-center items-center transition-all bg-transparent text-black dark:text-white">
                    7</div>
                <div
                    className="border-2 text-lg w-1/4 md:w-52 h-[11vw] md:h-[7vw] cursor-pointer flex justify-center items-center transition-all bg-transparent text-black dark:text-white">
                    8</div>
                <div
                    className="border-2 text-lg w-1/4 md:w-52 h-[11vw] md:h-[7vw] cursor-pointer flex justify-center items-center transition-all bg-transparent text-black dark:text-white">
                    9</div>
                <div
                    className="border-2 text-lg w-1/4 md:w-52 h-[11vw] md:h-[7vw] cursor-pointer flex justify-center items-center transition-all bg-transparent text-black dark:text-white">
                    10</div>
                <div
                    className="border-2 text-lg w-1/4 md:w-52 h-[11vw] md:h-[7vw] cursor-pointer flex justify-center items-center transition-all bg-transparent text-black dark:text-white">
                    11</div>
            </div><button
                className="w-[93vw] font-bold text-white h-12 mt-4 self-center uppercase tracking-wide  bg-[#d3d4d5] cursor-not-allowed dark:text-black dark:bg-gray-500"
                disabled="">Select Size</button>
        </div>
    </div>
</section>
          {/* <section className="productPreview mt-20 pb-5 transition-all duration-500 dark:bg-black dark:text-white">
           
            <Breadcrumb
              product={product}
              productCategory={productCategory}
              category={category}
            />
            <ProductDescription
              category={category}
              title={title}
              Imgurl={Imgurl}
              price={price}
            />
            <SizeAndCartPanel price={price} category={category} />
          </section> */}
        </>
      )}
    </>
  );
};

export default ProductPage;
