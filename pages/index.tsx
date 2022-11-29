import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import PopoverComponent from "../components/Popover";
import NavMenu from "../components/NavigationMenu";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next App Practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavMenu />
      <main>
        <PopoverComponent />
      </main>
    </div>
  );
};

export default Home;
