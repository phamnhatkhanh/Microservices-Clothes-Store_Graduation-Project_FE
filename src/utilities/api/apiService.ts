import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../../App.css';
import { useAppSelector } from "../../store/hooks";
import { useAppDispatch } from "../../store/hooks";
import {
  cartItemsSelector,
  setCartItem
} from "../../store/slices/cartItemsSlice";

export type CollectionItem = {
  id: string;
  title: string;
  bodyHtml: string;
  vendor: string;
  productType: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  banner: string;
  price: number;
  tags: string;
  status: string;
};
class ShoesType {
  constructor(public name: string, public id: number) { }
}

export const COLLECTION = {
  ShoesIndoor: new ShoesType("Indoor", 286470144209),
  HighHeel: new ShoesType("High Heel", 286469980369),
  Sneaker: new ShoesType("Sneaker", 286470078673),
};



type Orientation = "landscape" | "portrait" | "squarish";
interface ImportMetaEnvWithUnsplashAccessKey extends ImportMetaEnv {
  VITE_UNSPLASH_ACCESS_KEY: string;
}



export async function subscribeToNewsletter(
  name: string,
  email: string,
  review: string,
) {
  const apiUrl = "http://localhost:8086/api/customers/subscribe";
  const postData = {
    name: name,
    email: email,
    review: review,
  };

  try {
    axios.post(apiUrl, postData)
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  } catch (error) {
    throw new Error("Failed to fetch data_____");
  }
}

export async function getCollections(id: any): Promise<CollectionItem[]> {
  const apiUrl = "http://localhost:8081/api/collections/" + id;

  const headers = new Headers({
    'Authorization': 'Basic ' + btoa('user:password'),
    'Content-Type': 'application/json'
  });
  const options = {
    method: 'GET',
    headers: headers,
  };
  try {
    const response = await fetch(apiUrl, options);
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching collections:", error);
    return [];
  }
  
  
}

export async function saveOrder(email:string,phone:string,name:string,address:string,city:string){
  const cartItemDetails = useAppSelector(cartItemsSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const items = cartItemDetails.map((item) => {
    const { id, price, quantity } = item;
    return { id, price, quantity };
  });

  const requestBody = {
    email,
    phone,
    name,
    address,
    city,
    items
  };
console.log(requestBody)
  const requestOptions = {
    // method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody),
  };
  
  const apiUrl = "http://localhost:8082/api/orders";


  try {
    axios.post(apiUrl, requestOptions)
      .then(response => {
        navigate("/success");
        dispatch(setCartItem([]));
      })
      .catch(error => {
        console.error('Error:', error);
      });
  } catch (error) {
    throw new Error("Failed to fetch data_____");
  }

};