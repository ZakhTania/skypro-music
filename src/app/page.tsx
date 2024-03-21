import { Wrapper } from "@/components/Wrapper";
import { Container } from "@/components/Container";
import { Main } from "@/components/Main";
import { PlayerBar } from "@/components/Player/PlayerBar";
import getTracks from "@/api/tracksApi";

export default async function Home() {
const tracks = await getTracks();

  return (
    <Wrapper>
      <Container>
        <Main tracks={tracks} />
        <PlayerBar />
      </Container>
    </Wrapper>
  );
}
