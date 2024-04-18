"use client";
import { SVG } from "@/components/SVG";
import styles from "./Personal.module.css";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Personal() {
  const router = useRouter();
  const [userName, setUserName] = useState("Войти");
  const user = Cookies.get("user");
  useEffect(() => {
    if (user !== undefined) {
      setUserName(JSON.parse(user ?? "").username);
    }
  }, [user]);

  function toggleAuth() {
    if (userName !== "Войти") {
      Cookies.remove("user");
      Cookies.remove("tokens");
      setUserName("Войти");
      return;
    }
    router.replace("/signin");
  }

  return (
    <div className={styles.personal}>
      <p className={styles.personalName}>{userName}</p>
      <div onClick={toggleAuth}>
        <SVG icon="logout" className={styles.icon} />
      </div>
    </div>
  );
}
