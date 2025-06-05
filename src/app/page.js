import Image from "next/image";
import styles from "./page.module.css";
import Signin from "./component/Signin";
import NoteList from "./component/NoteList";
import Layout from "./component/Layout";

export default function Home() {
  return (
    <Layout>
      {/* <Signin /> */}
      <NoteList />
    </Layout>
  );
}
