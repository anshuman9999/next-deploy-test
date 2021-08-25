import { useState } from "react";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
const CodeWithCodemirror = dynamic(import("../components/CodeMirror"), {
  ssr: false,
});

export default function Home() {
  const [code, setCode] = useState("select * from orders;");
  return (
    <div className={styles.container}>
      <CodeWithCodemirror value={code} />
    </div>
  );
}
