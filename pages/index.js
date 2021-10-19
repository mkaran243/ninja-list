import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Homepage</title>
      </Head>
      <div>
        <h1 className={styles.title}>Hello World !</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum fugiat
          magni ad enim necessitatibus repudiandae dolorem debitis atque hic
          consequatur eveniet cumque possimus voluptates culpa accusamus nisi
          laudantium, quod libero!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninjas Listing</a>
        </Link>
      </div>
    </>
  );
}
