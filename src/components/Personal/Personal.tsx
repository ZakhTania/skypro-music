"use client";
import { SVG } from "@/components/SVG";
import styles from "./Personal.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/hooks/hooks";
import { removeAuth } from "@/store/features/authSlice";

export default function Personal() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [userName, setUserName] = useState("Войти");

  useEffect(() => {
    let user;
    user = JSON.parse(localStorage.getItem("user") || "{}");
    if (Object.keys(user).length === 0) {
      return;
    }
    setUserName(user.username);
  }, []);

  function toggleAuth() {
    if (userName !== "Войти") {
      dispatch(removeAuth());
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
