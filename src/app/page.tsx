import {headers} from "next/headers";
import styles from "./page.module.css";
import { NextPage } from 'next';

export default function Home(props: NextPage) {
  headers().then(res => console.log(res))

  return (
    <div className={styles.page}>
      
    </div>
  );
}
