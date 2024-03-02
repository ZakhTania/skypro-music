import { Wrapper } from "@/components/Wrapper";
import { Container } from "@/components/Container";
import Image from "next/image";
import styles from "./page.module.css";
import { Input } from "@/components/Input";
import { Form } from "@/components/Form";
import { ButtonSignUp } from "@/components/ButtonSignUp";
import { ButtonEnter } from "@/components/ButtonEnter";
import Link from "next/link";

export default function Signin() {
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
            <Input
              className={styles.input}
              type="text"
              name="login"
              placeholder="Почта"
            />
            <Input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <ButtonEnter text="Войти" />
            <ButtonSignUp text="Зарегистрироваться" />
          </Form>
        </div>
      </Container>
    </Wrapper>
  );
}
