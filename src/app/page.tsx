import {headers} from "next/headers";
import styles from "./page.module.css";
import { getClientData } from "./shared/api/reqs";

export default async function Home() {
  let data = await getClientData().then(res => res)

  if (data) {
    const serData = new Array(data)
    return (
      <div className={styles.page}>
        {serData.map((val) => (
          <div>
            {val}
          </div>
        ))}
      </div>
    )
  }
  console.log(data)
  return (
    <div className={styles.page}>
      {}
    </div>
  );
}
