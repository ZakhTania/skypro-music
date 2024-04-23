"use client";
import WithAuth from "@/HOC/withAuth";
import { FavoritePageWrap } from "@/components/FavoritePageWrap";

function FavoritePage() {
  const tokens = JSON.parse(localStorage.getItem("tokens") || "{}");
  console.log(tokens);
  return (
    <FavoritePageWrap
      tokens={tokens}
    />
  );
}
export default WithAuth(FavoritePage);
