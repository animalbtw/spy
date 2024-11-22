import styles from "./page.module.css";
import { getClientData } from "./shared/api/reqs";

export default async function Home() {
  const data = await getClientData().then(res => res)

  if (data) {
    const ip = data.get('x-forwarded-for')
    const reqUrl = data.get('request-url')

    console.log(ip)
    console.log(reqUrl)

    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div>
            loading or something is wrong
          </div>
          {/* <div className={styles.ip}>
            {ip}
          </div>
          <div>
            {reqUrl}
          </div> */}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        loading or something is wrong
      </div>
    </div>
  )
}
