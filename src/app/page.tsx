import { Wrapper } from "@/components/Wrapper";
import { Container } from "@/components/Container";
import { Main } from "@/components/Main";
import { PlayerBar } from "@/components/Player/PlayerBar";
import getTracks from "@/api/tracksApi";

export default async function Home() {
  let tracks;
  try {
    tracks = await getTracks();
  } catch (error: any ) {
    throw new Error(error.message);
  }
  return (
    <Wrapper>
      <Container>
        <Main tracks={tracks} />
        <PlayerBar />
      </Container>
    </Wrapper>
  );
}
