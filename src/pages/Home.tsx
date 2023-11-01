import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from "axios";
import Footer from "../components/HomeComponents/Footer";
import Gallery from "../components/GalleryComponents/Gallery";
import Hero from "../components/HomeComponents/Hero";
import Newsletter from "../components/HomeComponents/Newsletter";
import { useQuery } from "@tanstack/react-query";
import {getCollections,CollectionItem} from "../utilities/api/apiService";
import Loader from "../components/Reusables/Loader";
import { useAppSelector } from "../store/hooks";
import { loadingSelector } from "../store/slices/loadingSlice";
import { ApiResponse } from "../utilities/api/apiService";
import { set } from 'firebase/database';
const Home = () => {
  const perPage = 6;
  const orientation = "squarish";
  const isLoading = useAppSelector(loadingSelector);

  // const shoesQuery = getCollections("286469980369", perPage, orientation);

  // const shoesQuery = getProductId("7278542291153", perPage, orientation);
  // const queryResult = useQuery({
  //   queryKey: ["id"],
  //   queryFn: () => getCollections("286469980369", perPage, orientation),
  //   refetchOnWindowFocus: false,
  //   retry: 2,
  //   staleTime: 300000,
  // });

  // const shirtQuery = useQuery({
  //   queryKey: ["images", "T-Shirts", perPage, orientation],
  //   queryFn: () => getImages("T-Shirts", perPage, orientation),
  //   refetchOnWindowFocus: false,
  //   retry: 2,
  //   staleTime: 300000,
  // });

  // const heroImageQuery = useQuery({
  //   queryKey: ["images", "Shoes and clothes", perPage, orientation],
  //   queryFn: () => getImages("Shoes and clothes", perPage, orientation),
  //   refetchOnWindowFocus: false,
  //   retry: 2,
  //   staleTime: 300000,
  // });

  // if (isLoading || shoesQuery.isFetching || shirtQuery.isFetching) {
  //   return <Loader />;
  // }
//console.log(shoesQuery)
const [collections, setCollections] = useState<CollectionItem[]>([]);

useEffect(() => {
  getCollections().then((data) => {
    setCollections(data);
  });
}, []);
  
  

  
  // Example usage of the getCollections function
  
  return (
    <>
      <main>
        {collections ? <Hero data={collections} /> : null}
       
        <Gallery
          data={collections}
          galleryName="Best Clothes"
          product="t-shirts"
        />
        <Gallery
          data={collections}
          galleryName="Best Clothes"
          product="t-shirts"
        />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
};

export default Home;
