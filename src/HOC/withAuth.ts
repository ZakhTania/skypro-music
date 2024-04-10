import { useRouter } from "next/navigation";
import { useEffect } from "react";


// const withAuth = (WrappedComponent: React.ReactNode) => {
//     return (props) => {
//       const Router = useRouter();
  
//       // Проверка аутентификации пользователя
//       const isAuth = !!localStorage.getItem("userToken"); // Пример проверки аутентификации
  
//       useEffect(() => {
//         if (!isAuth) {
//           Router.replace("/login"); // Перенаправление на страницу входа, если пользователь не аутентифицирован
//         }
//       }, [isAuth, Router]);
  
//       return isAuth ? <WrappedComponent {...props} /> : null; // Рендер компонента, если пользователь аутентифицирован
//     };
//   };
  
//   export default withAuth;
  