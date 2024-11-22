import {headers} from "next/headers";
import styles from "./page.module.css";

export default function Home() {
  headers().then(res => console.log(res))

  return (
    <div className={styles.page}>
      
    </div>
  );
}
