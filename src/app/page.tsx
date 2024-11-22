import styles from "./page.module.css";
import { getClientData } from "./shared/api/reqs";

export default async function Home() {
  const data = await getClientData().then(res => res)

  if (data) {
    const serData = new Array(data)
    console.log(serData)

    return (
      <div className={styles.page}>
        {serData.map((val, index) => {
          return (
            <div key={index}>
              {val} <br />
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className={styles.page}>
      loading or smth is wrong
    </div>
  );
}
