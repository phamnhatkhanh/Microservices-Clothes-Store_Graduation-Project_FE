import { useEffect, useState } from 'react';
import Footer from "../components/HomeComponents/Footer";
import Gallery from "../components/GalleryComponents/Gallery";
import Hero from "../components/HomeComponents/Hero";
import Newsletter from "../components/HomeComponents/Newsletter";
import { getCollections, CollectionItem, COLLECTION } from "../utilities/api/apiService";

const Home = () => {


  const [highHeelCollections, setHighHeelCollections] = useState<CollectionItem[]>([]);
  const [sneakerCollections, setSneakerCollections] = useState<CollectionItem[]>([]);
  const [shoesIndoorCollections, setShoesIndoorCollections] = useState<CollectionItem[]>([]);
  useEffect(() => {
    getCollections(COLLECTION.HighHeel.id).then((data) => {
      setHighHeelCollections(data);
    });
  }, []);

  useEffect(() => {
    getCollections(COLLECTION.Sneaker.id).then((data) => {
      setSneakerCollections(data);
    });
  }, []);
  useEffect(() => {
    getCollections(COLLECTION.ShoesIndoor.id).then((data) => {
      setShoesIndoorCollections(data);
    });
  }, []);



  return (
    <>
      <main>
        {highHeelCollections ? <Hero data={highHeelCollections} /> : null}

        <Gallery
          data={sneakerCollections}
          galleryName="Best Clothes"
          product="t-shirts"
        />
        <Gallery
          data={shoesIndoorCollections}
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
