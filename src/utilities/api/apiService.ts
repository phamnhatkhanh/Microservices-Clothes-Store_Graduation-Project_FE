import axios, { AxiosResponse } from "axios";

// export type ApiResponse = {
//   total: number;
//   total_pages: number;
//   results: {
//     id: string;
//     alt_description: string;
//     description: string;
//     price: string;
//     urls: {
//       regular: string;
//     };
//   }[];
// };
export type CollectionItem = {
  bodyHtml: string;
  createdAt: string;
  handle: string;
  id: number;
  productType: string;
  publishedAt: string | null;
  publishedScope: string;
  status: string;
  tags: string;
  templateSuffix: string | null;
  title: string;
  updatedAt: string;
  vendor: string;
};

export type ApiResponse = {
  id: string;
  title: string;
  bodyHtml: string;
  // price: string;
  // urls: {
  //   regular: string;
  // };
};

type Orientation = "landscape" | "portrait" | "squarish";
interface ImportMetaEnvWithUnsplashAccessKey extends ImportMetaEnv {
  VITE_UNSPLASH_ACCESS_KEY: string;
}

export default async function getImages(
  query: string,
  perPage: number,
  orientation: Orientation,
  pagination?: number
) {

  const accessKey = import.meta.env as ImportMetaEnvWithUnsplashAccessKey;
  const unsplashAccessKey: string = accessKey.VITE_UNSPLASH_ACCESS_KEY;
  const apiUrl = "https://api.unsplash.com/search/photos";

  try {
    const currentPage = pagination || Math.floor(Math.random() * 30 + 1);

    // const response: AxiosResponse<ApiResponse> = await axios.get(
    //   `${apiUrl}?query=${encodeURIComponent(
    //     query
    //   )}&per_page=${perPage}&page=${currentPage}&orientation=${orientation}&client_id=${unsplashAccessKey}`
    // );


    return "https://images.unsplash.com/photo-1690583367285-b1803e5b050c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzcwMTB8MHwxfHNlYXJjaHwzMnx8dC1zaGlydHN8ZW58MHwyfHx8MTY5ODI0ODY4NHww&ixlib=rb-4.0.3&q=80&w=1080";
  } catch (error) {
    // Handle error appropriately
    throw new Error("Failed to fetch data");
  }
}

export async function getProductId(
  id: string,
  perPage: number,
  orientation: Orientation,
  pagination?: number
) {


  const apiUrl = "http://localhost:8081/api/products";

  try {
    const currentPage = pagination || Math.floor(Math.random() * 30 + 1);

    const response: AxiosResponse<ApiResponse> = await axios.get(
      `${apiUrl}/${id}`
      // `${apiUrl}?query=${encodeURIComponent(
      //   query
      // )}&per_page=${perPage}&page=${currentPage}&orientation=${orientation}&client_id=${unsplashAccessKey}`
    );

    
    return response;
  } catch (error) {
    // Handle error appropriately
    throw new Error("Failed to fetch data");
  }
}
export  async function getCollections(): Promise<CollectionItem[]> {
  const apiUrl = "http://localhost:8081/api/collections/286469980369";

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const data = await response.json();
    // Assuming the API response is an array of collection items
    return data;
  } catch (error) {
    console.error("Error fetching collections:", error);
    return [];
  }
}