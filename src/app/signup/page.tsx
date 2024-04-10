"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Form } from "@/components/Form";
import { Wrapper } from "@/components/Wrapper";
import { Container } from "@/components/Container";
import { ButtonEnter } from "@/components/ButtonEnter";
import { getSignup } from "@/api/userAPI";

type userDataType = {
  email: string;
  username: string;
  password: string;
};

export default function Signup() {
  const router = useRouter();
  const [error, setError] = useState({
    email: [],
    username: [],
    password: [],
  });
  const isEmailErr = error.email.length !== 0;
  const isUsernameErr = error.username.length !== 0;
  const isPasswordErr = error.password.length !== 0;
  console.log(isEmailErr, isPasswordErr, isUsernameErr);
  const [userData, setUserData] = useState<userDataType>({
    email: "",
    username: "",
    password: "",
  });

  function getReg() {
    setError({
      email: [],
      username: [],
      password: [],
    });

    getSignup({
      email: userData.email,
      password: userData.password,
      username: userData.username,
    })
      .then(() => {
        console.log("wow");
        router.replace("/signin");
      })
      .catch((error) => {
        setError(JSON.parse(error.message));
        console.log(error);
      });
  }

  return (
    <Wrapper>
      <Container>
        <div className={styles.block}>
          <Form>
            <Link href={"/"}>
              <div className={styles.logo}>
                <Image
                  src="/img/logo_modal.png"
                  alt="logo"
                  width={140}
                  height={21}
                />
              </div>
            </Link>
            {isEmailErr && <p className={styles.errorText}>{error.email[0]}</p>}
            <input
              className={styles.input}
              type="text"
              name="email"
              placeholder="Почта"
              value={userData.email}
              onChange={(event) =>
                setUserData({ ...userData, email: event.target.value })
              }
              onClick={() => {
                setError({ ...error, email: [] });
              }}
            />
            {isUsernameErr && (
              <p className={styles.errorText}>{error.username[0]}</p>
            )}
            <input
              className={styles.input}
              type="text"
              name="login"
              placeholder="Логин"
              onChange={(event) =>
                setUserData({ ...userData, username: event.target.value })
              }
              onClick={() => {
                setError({ ...error, username: [] });
              }}
            />
            {isPasswordErr && (
              <p className={styles.errorText}>{error.password[0]}</p>
            )}
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Пароль"
              onChange={(event) =>
                setUserData({ ...userData, password: event.target.value })
              }
              onClick={() => {
                setError({ ...error, password: [] });
              }}
            />
            <ButtonEnter
              text="Зарегистрироваться"
              disabled={isEmailErr || isUsernameErr || isPasswordErr}
              onClick={getReg}
            />
          </Form>
        </div>
      </Container>
    </Wrapper>
  );
}
