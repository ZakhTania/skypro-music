"use client";
import { Wrapper } from "@/components/Wrapper";
import { Container } from "@/components/Container";
import Image from "next/image";
import styles from "./page.module.css";
import { Form } from "@/components/Form";
import { ButtonSignUp } from "@/components/ButtonSignUp";
import { ButtonEnter } from "@/components/ButtonEnter";
import Link from "next/link";
import { useState } from "react";
import { getLogin, getToken } from "@/api/userAPI";
import { useAppDispatch } from "@/hooks/hooks";
import { setToken, setUser } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";


export default function Signin() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [error, setError] = useState({
    email: [],
    username: [],
    password: [],
  });
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  function handelInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  }

  function getAuth() {
    getLogin({ email: userData.email, password: userData.password })
      .then((user) => {
        dispatch(setUser(user));
        router.replace("/");
        return user;
      })
      .catch((error) => {
        setError(JSON.parse(error.message));
      })
      .then((user) => {
        return getToken({ email: user.email, password: user.password });
      })
      .then((tokenData) => {
        dispatch(
          setToken({ access: tokenData.access, refresh: tokenData.refresh })
        );
        // localStorage.setItemItem("userToken", tokenData.access);
      })
      .catch((error) => {
        console.warn(JSON.parse(error.message));
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
            <input
              className={styles.input}
              type="text"
              name="email"
              placeholder="Почта"
              onChange={(event) => handelInputChange(event)}
            />
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Пароль"
              onChange={(event) => handelInputChange(event)}
            />
            <ButtonEnter text="Войти" onClick={getAuth} />
            <ButtonSignUp text="Зарегистрироваться" />
          </Form>
        </div>
      </Container>
    </Wrapper>
  );
}
