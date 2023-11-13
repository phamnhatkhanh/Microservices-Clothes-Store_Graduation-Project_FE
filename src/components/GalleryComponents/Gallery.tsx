import { useState } from "react";
import GalleryItem from "./GalleryItem";
import { CollectionItem } from "../../utilities/api/apiService";
import { setProductItems } from "../../store/slices/productSlice";
import CarouselArrow from "./CarouselArrow";
import { useAppDispatch } from "../../store/hooks";


type GalleryProps = {
  data?: CollectionItem[];
  galleryName: string;
  product: string;
};

const Gallery: React.FC<GalleryProps> = ({ data, galleryName, product }) => {
  const dispatch = useAppDispatch();
  const [transformValue, setTransformValue] = useState(0);


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
              console.log(item)
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    dispatch(
                      setProductItems({
                        id:item.id,
                        title:item.title,
                        bodyHtml:item.bodyHtml,
                        vendor:item.vendor,
                        productType:item.productType,
                        createdAt:item.createdAt,
                        updatedAt:item.updatedAt,
                        publishedAt:item.publishedAt,
                        banner:item.banner,
                        price:item.price,
                        tags:item.tags,
                        status:item.status,
                      })
                    );
                  }}
                >
                  <GalleryItem
                  price={item.price}
                    imageUrl={item.banner}
                    bodyHTML={item.bodyHtml}
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
