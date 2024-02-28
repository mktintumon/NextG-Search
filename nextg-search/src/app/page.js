import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";
import React from "react";

function Home() {
  return (
    <>
      <HomeHeader />

      <div className="flex flex-col items-center mt-24">
        <Image
          src="https://www.nextg.cz/wp-content/uploads/2022/10/nG_logo-1.jpg"
          alt="nextg logo"
          width={300}
          height={100}
          priority
          style={{ width: "auto" }}
        />

        <HomeSearch />
      </div>
    </>
  );
}

export default Home;
