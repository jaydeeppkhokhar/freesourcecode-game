"use client";
import NewGame from "@/components/block/newGame";
import Category from "@/components/block/category";
import TopArea from "@/components/block/topArea";
import React from "react";

export default function Home() {
  return (
    <div className="mx-6 py-10">
      <div>

        {/* Header Ads */}
        <div id="_AdQVAWidget_502001"></div>
        <script type="text/javascript" src="https://native-hispanoads.ads1-adqva.com/ads/_AdQVAWidget_502001.js" async></script>

        <TopArea />
      </div>
      <div>
        <h1 className="my-4 font-semibold text-xl">New Games</h1>
        <NewGame />
      </div>
      <div className="my-6">
        <Category />
      </div>
      <div>
        <h1 className="my-4 font-semibold text-xl">Action Games</h1>
        <NewGame filterData="Action" />
      </div>
      <div>
        <h1 className="my-4 font-semibold text-xl">Recommended this week</h1>
        <NewGame />
      </div>
      <div>
        <h1 className="my-4 font-semibold text-xl">Adventure Games</h1>
        <NewGame filterData="Adventure" />
      </div>
      <div>
        <h1 className="my-4 font-semibold text-xl">Arcade Games</h1>
        <NewGame filterData="Arcade" />
      </div>
      <div>
        <h1 className="my-4 font-semibold text-xl">Puzzle & Logic Games</h1>
        <NewGame filterData="Puzzle & Logic" />
      </div>
      <div>
        <h1 className="my-4 font-semibold text-xl">Sports & Racing Games</h1>
        <NewGame filterData="Sports & Racing" />
      </div>
      <div>
        <h1 className="my-4 font-semibold text-xl">Strategy Games</h1>
        <NewGame filterData="Strategy" />
      </div>

      {/* In page push notification ads */}
      <div id="_AdQVAWidget_502002"></div>
      <script type="text/javascript" src="https://native-hispanoads.ads1-adqva.com/ads/_AdQVAWidget_502002.js" async></script>

      {/* Article Infinite scroll Ads */}
      <div id="_AdQVAWidget_501998"></div>
      <script type="text/javascript" src="https://native-hispanoads.ads1-adqva.com/ads/_AdQVAWidget_501998.js" async></script>

    </div>
  );
}
