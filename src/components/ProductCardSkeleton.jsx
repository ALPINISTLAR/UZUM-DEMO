import Skeleton from "react-loading-skeleton";
import styles from "./App.module.css";
const ProductCardSkeleton = () => {
  return (
    <div className={styles.card}>
      <Skeleton height={293}></Skeleton>
      <div className={styles.box}></div>
      <div className={styles.card__content}>
        <Skeleton width={"60%"} height={20}></Skeleton>
        <Skeleton width={"40%"} height={20}></Skeleton>
        <div className={styles.box}></div>
        <div className={styles.card__footer}>
          <Skeleton width={70} height={20}></Skeleton>
          <Skeleton width={31} height={31} circle></Skeleton>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;