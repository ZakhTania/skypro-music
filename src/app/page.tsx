"use client";
import { Wrapper } from "@/components/Wrapper";
import { Container } from "@/components/Container";
import { Main } from "@/components/Main";
import { PlayerBar } from "@/components/PlayerBar";
import { useEffect, useState } from "react";
import getTracks, { TracksType } from "@/api/tracksApi";

export default function Home() {
  const [tracks, setTracks] = useState<TracksType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentTrack, setCurrentTrack] = useState<TracksType | null>(null);
  useEffect(() => {
    getTracks().then((response) => {
      setTracks(response);
      setIsLoading(false);
    });
  }, []);
  console.log(currentTrack);
  return (
    <Wrapper>
      <Container>
        <Main
          isLoading={isLoading}
          tracks={tracks}
          setCurrentTrack={setCurrentTrack}
        />
        {currentTrack && <PlayerBar currentTrack={currentTrack} />}
      </Container>
    </Wrapper>
  );
}
