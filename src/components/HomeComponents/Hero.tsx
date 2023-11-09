import { useState, useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { CollectionItem } from "../../utilities/api/apiService";
import { setProductItems } from "../../store/slices/productSlice";
import { Link } from "react-router-dom";


type HeroImage = {
  data: CollectionItem[];
};

type Results = {
  id: any;
  alt_description: string;
  description: string;
  urls: {
    regular: string;
  };
}[];

const Hero = ({ data }: HeroImage) => {
  const [results, setResults] = useState<Results | null>(null);
  const [shoesOutstanding, setShoesOutstanding] = useState<CollectionItem | null>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const visibleItems = Math.ceil(window.innerWidth / 800);
    const visibleImages = data.map((item) => ({
      id: item.id.toString(),
      alt_description: '', 
      description: item.title, 
      urls: { 
        regular: item.banner, 
      },
    })).slice(0, visibleItems);
     
    setResults(visibleImages);
    setShoesOutstanding(data.slice(1,2)[0]);
  }, [data]);


  
  return (
    <>
      <section className="hero relative">
        <picture className="flex overflow-hidden">
          <aside className="absolute w-full h-full bg-[#00000070]"></aside>
          {results?.map((item) => {
            return (
              <img
                key={item.id}
                className="h-100 object-cover w-[50rem]"
                src={item.urls.regular}
                alt={item.alt_description}
              />
            );
          })}
        </picture>
        <section className="absolute top-64 text-center bottom-10 text-white font-outfit flex flex-col items-baseline px-4 md:px-7 xl:px-10 font-semibold">
          <div className=" flex justify-center flex-col gap-y-4" onClick={() => {
                    dispatch(
                      setProductItems({
                        id: shoesOutstanding!.id,
                        title: shoesOutstanding!.title,
                        bodyHtml: shoesOutstanding!.bodyHtml,
                        vendor: shoesOutstanding!.vendor,
                        productType: shoesOutstanding!.productType,
                        createdAt: shoesOutstanding!.createdAt,
                        updatedAt: shoesOutstanding!.updatedAt,
                        publishedAt: shoesOutstanding!.publishedAt,
                        banner: shoesOutstanding!.banner,
                        price: shoesOutstanding!.price,
                        tags: shoesOutstanding!.tags,
                        status: shoesOutstanding!.status,
                      })
                    );
                  }}>
            <h1 className="text-3xl xl:text-4xl">
              Chase Views In Breezy Shoes
            </h1>
            <h2 className="text-base xl:text-xl">
              The Lightweight Tree Runner is ready for anything summer throws at
              you.
            </h2>
            <div className="buttons space-x-3 flex justify-center">
          
              <Link
               to={`/products/${shoesOutstanding?.title}}`}
                className="bg-white text-black hover:text-white hover:bg-slate-900 px-4 py-3 w-2/4 cursor-pointer rounded-md uppercase transition-all text-center"
              >
                Buy now
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;
