import React, { useState, useEffect } from "react";
import { Skeleton } from "@nextui-org/skeleton";
import Link from "next/link";

const TopArea = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // async function notifyBackend() {
    //   try {
    //     const response = await fetch('https://8a9e-103-250-151-245.ngrok-free.app/api/notify-server'); // Call the Next.js API route
    //   } catch (error) {
    //     console.log("error.message", error.message);
    //   }
    // }

    // notifyBackend();

    const fetchGames = async () => {
      try {
        const response = await fetch("/api/game");
        const data = await response.json();

        const sortedGames = data.filter((item) => item.inTop === true).sort((a, b) => b.view - a.view);

        setGames(sortedGames);
      } catch (error) {
        console.error("Error fetching games:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 select-none">
        <div>
          <Skeleton className="h-40 md:h-64 w-full rounded-md" />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Skeleton className="h-20 md:h-28 w-full rounded-md" />
          <Skeleton className="h-20 md:h-28 w-full rounded-md" />
          <Skeleton className="h-20 md:h-28 w-full rounded-md" />
          <Skeleton className="h-20 md:h-28 w-full rounded-md" />
        </div>
        <div>
          <Skeleton className="h-40 md:h-64 w-full rounded-md" />
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 select-none">
      {games.length > 0 && (
        <>
          <div>
            <Link href='https://wickedwrests.com/iOgVL3TvOdJ/114646'>
              <img
                className="h-40 md:h-64 w-full rounded-md"
                src='/logo.png'
                alt={`Game Image ${games[0]?.gameTitle}`}
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Link href='https://wickedwrests.com/iOgVL3TvOdJ/114646'>
              <img
                src='/logo.png'
                className="h-20 md:h-28 w-full rounded-md"
                alt={`Game Image ${games[1]?.gameTitle}`}
              />
            </Link>
            <Link href='https://wickedwrests.com/iOgVL3TvOdJ/114646'>
              <img
                src='/logo.png'
                className="h-20 md:h-28 w-full rounded-md"
                alt={`Game Image ${games[2]?.gameTitle}`}
              />
            </Link>
            <Link href='https://wickedwrests.com/iOgVL3TvOdJ/114646'>
              <img
                src='/logo.png'
                className="h-20 md:h-28 w-full rounded-md"
                alt={`Game Image ${games[3]?.gameTitle}`}
              />
            </Link>
            <Link href='https://wickedwrests.com/iOgVL3TvOdJ/114646'>
              <img
                src='/logo.png'
                className="h-20 md:h-28 w-full rounded-md"
                alt={`Game Image ${games[4]?.gameTitle}`}
              />
            </Link>
          </div>
          <div>
            <Link href='https://wickedwrests.com/iOgVL3TvOdJ/114646'>
              <img
                className="h-40 md:h-64 w-full rounded-md"
                src='/logo.png'
                alt={`Game Image ${games[5]?.gameTitle}`}
              />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default TopArea;
