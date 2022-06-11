import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);
	/**useEffect recibe una funcion anonima y un arreglo */
	useEffect(async() => {
		const response = await axios(API);
		setProducts(response.data);
	}, [])
    return products;

}
export default useGetProducts;