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
          galleryName="SNEAKERS"
          subtitle = "In an array of colors and designs, sneakers including the Ace sneaker, the Rhyton and many more are enriched with House symbols."
          product="t-shirts"
        />
        <Gallery
          data={shoesIndoorCollections}
          galleryName="Women's Indoor"
          subtitle="It's that warm and cozy shoe that you wear around the house, especially on cold winter days."
          product="t-shirts"
        />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
};

export default Home;
