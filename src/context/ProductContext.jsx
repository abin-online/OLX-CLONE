import { useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { getDownloadURL, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);

  const addProduct = async (title, description, price, images) => {
    try {
      let imageUrls = [];
      for (let image of images) {
        const storageRef = ref(storage, `/images/${image.name}`);
        let snapshot = await uploadBytes(storageRef, image);
        let url = await getDownloadURL(storageRef);
        imageUrls.push(url);
      }

      await addDoc(collection(db, "products"), {
        user: user.uid,
        title,
        description,
        price,
        imageUrls,
        createdAt: new Date().toDateString(),
      });
      return { success: true };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  };

  const getProduct = async () => {
    try {
      let snapshot = await getDocs(collection(db, "products"));
      let allProducts = snapshot?.docs?.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      setProducts(allProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [addProduct]);

  return (
    <ProductProvider value={{ addProduct, products }}>
      {children}
    </ProductProvider>
  );
};

export default ProductProvider;
