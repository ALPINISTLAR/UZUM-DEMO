import styles from "./App.module.css";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import ProductCardSkeleton from "./ProductCardSkeleton";

const skeletons = [1, 2, 3, 4];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setLoading(true);

    try {
      // API dan ma'lumotlarni olish
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();

      // Faqat 20 ta ma'lumotni olish
      const limitedData = data.slice(0, 20);

      // Olishgan ma'lumotlarni joylashtirish
      setProducts(limitedData);
      setLoading(false);
    } catch (error) {
      console.error("Ma'lumotlarni olishda xatolik:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.products}>
        {loading
          ? skeletons.map((skeleton) => <ProductCardSkeleton key={skeleton} />)
          : products.map((product) => (
              <ProductCard
                key={product.id}
                img={product.images[0]}
                title={product.title}
                price={product.price}
              />
            ))}
      </div>
    </>
  );
};

export default Products;
