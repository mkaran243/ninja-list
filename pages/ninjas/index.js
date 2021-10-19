import Head from "next/head";
import styles from "../../styles/ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List | Ninjas</title>
      </Head>
      <div>
        <h1>All Ninjas</h1>
        <p>Here are our vary top ninjas.</p>
        {ninjas.map((ninja) => (
          <Link href={"/ninjas/" + ninja.id} key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Ninjas;
