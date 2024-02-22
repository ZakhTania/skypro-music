import { Wrapper } from "@/components/Wrapper";
import { Container } from "@/components/Container";
import { Main } from "@/components/Main";
import { PlayerBar } from "@/components/PlayerBar";

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Main />
        <PlayerBar />
      </Container>
    </Wrapper>
  );
}
