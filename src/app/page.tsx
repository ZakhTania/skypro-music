"use client";
import { Wrapper } from "@/components/Wrapper";
import { Container } from "@/components/Container";
import { Main } from "@/components/Main";
import { PlayerBar } from "@/components/Player/PlayerBar";
import { useEffect, useState } from "react";
import getTracks, { TracksType } from "@/api/tracksApi";

export default function Home() {
  const [tracks, setTracks] = useState<TracksType[]>([]);

  useEffect(() => {
    getTracks().then((response) => {
      setTracks(response);
    });
  }, []);

  return (
    <Wrapper>
      <Container>
        <Main tracks={tracks} />
        <PlayerBar />
      </Container>
    </Wrapper>
  );
}
