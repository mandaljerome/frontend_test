import Image from "next/image";
import styles from "./page.module.css";

import Gallery from "./gallery";

import { getUser, getPhoto } from "@/api";

export default async function Home() {
  const users = await getUser();
  const photos = await getPhoto();

  return (
    <main className={styles.main}>
      <Gallery users={users} photos={photos} />
    </main>
  );
}
