"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function WithAuth(WrappedComponent: any) {
  const Component = (props: any) => {
    const Router = useRouter();

    // Проверка аутентификации пользователя
    const isAuth = !!localStorage.getItem("userToken"); // Пример проверки аутентификации

    useEffect(() => {
      if (!isAuth) {
        Router.replace("/login"); // Перенаправление на страницу входа, если пользователь не аутентифицирован
      }
    }, [isAuth, Router]);

    return isAuth ? <WrappedComponent {...props} /> : null; // Рендер компонента, если пользователь аутентифицирован
  };
  return Component;
};

