import styles from "./page.module.css";
import Coche from "@/components/coche";
export default function Home() {
  return (
    <div>

      <h1 className={styles.title}>Mercedes Benz E63</h1>

      <div className={styles.homeMain}>
        <div className={styles.article1}>
          <Coche />
        </div>
        
        <div className={styles.article2}>
          <div>
              
          </div>  
        </div>

      </div>
    </div>
  );
}
