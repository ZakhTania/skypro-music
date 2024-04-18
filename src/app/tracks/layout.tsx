import { Container } from "@/components/Container";
import { Main } from "@/components/Main";
import { Navigation } from "@/components/Navigation";
import { PlayerBar } from "@/components/Player/PlayerBar";
import { Wrapper } from "@/components/Wrapper";

export default  function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <Wrapper>
      <Container>
        <Main>
          <Navigation />
            {children}
        </Main>
        <PlayerBar />
      </Container>
    </Wrapper>
  );
}
