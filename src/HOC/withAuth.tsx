"use client";
import { useAppSelector } from "@/hooks/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function WithAuth(WrappedComponent: any) {
  const Component = (props: any) => {
    const Router = useRouter();
    const userToken = useAppSelector((store) => store.auth.token.access)

    // Проверка аутентификации пользователя
    const isAuth = !!userToken; // Пример проверки аутентификации

    useEffect(() => {
      if (!isAuth) {
        Router.replace("/signin"); // Перенаправление на страницу входа, если пользователь не аутентифицирован
      }
    }, [isAuth, Router]);

    return isAuth ? <WrappedComponent {...props} /> : null; // Рендер компонента, если пользователь аутентифицирован
  };
  return Component;
};

