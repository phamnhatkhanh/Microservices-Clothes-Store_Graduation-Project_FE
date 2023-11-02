import { useState } from "react";
import GalleryItem from "./GalleryItem";
import { CollectionItem } from "../../utilities/api/apiService";
import { setProductItems } from "../../store/slices/productSlice";
import generatePrice from "../../utilities/RandomGenerators/generatePrice";
import CarouselArrow from "./CarouselArrow";
import { randomTitle } from "../../utilities/RandomGenerators/generateTitle";
import { useAppDispatch } from "../../store/hooks";

// type GalleryProps = {
//   data?: any[string];
//   galleryName: string;
//   product: string;
// };
// type CollectionItem = {
//   bodyHtml: string;
//   createdAt: string;
//   handle: string;
//   id: number;
//   productType: string;
//   publishedAt: string | null;
//   publishedScope: string;
//   status: string;
//   tags: string;
//   templateSuffix: string | null;
//   title: string;
//   updatedAt: string;
//   vendor: string;
// };


type GalleryProps = {
  data?: CollectionItem[];
  galleryName: string;
  product: string;
};

const Gallery: React.FC<GalleryProps> = ({ data, galleryName, product }) => {
  const dispatch = useAppDispatch();
  const [transformValue, setTransformValue] = useState(0);
  // data.forEach(element => {
    
  // });((item) => {
  //   console.log(item); // "Data from the Promise"
  // });
  


  return (
    <>
      <section className="mt-5 flex flex-col items-center w-screen relative dark:text-white">
        <h2 className="font-outfit font-bold text-3xl tracking-wide  ">
          {galleryName}
        </h2>
        <hr className="border-2 border-slate-300 my-3 w-screen" />
        <CarouselArrow
          transformValue={transformValue}
          setTransformValue={setTransformValue}
        />
        <div className="gallery w-screen overflow-auto mt-5 py-4">
          <div
            className="flex w-fit mx-4 transition-all"
            style={{ transform: `translateX(${transformValue}px)` }}
          >
            {data? data.map((item) => {
              
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    dispatch(
                      setProductItems({
                        Imgurl: "https://ae01.alicdn.com/kf/HTB1ypWdKXmWBuNjSspdq6zugXXaQ.jpg",
                        product: product,
                        title: item.title,
                        price: generatePrice(),
                      })
                    );
                  }}
                >
                  <GalleryItem
                    imageUrl="https://ae01.alicdn.com/kf/HTB1ypWdKXmWBuNjSspdq6zugXXaQ.jpg"
                    altText="{item.bodyHtml}"
                    title={item.title}
                  />
                </div>
              );
            }):[]}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
