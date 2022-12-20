import { createContext } from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Options from "../components/Options";
import Footer from "../components/Footer";

export const LoginContext = createContext(null);

export default function Home() {
  return (
    <LoginContext.Provider value={null}>
      <div>
        <Head>
          <title>get it done</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />
        <Hero />
        <Options />
        <Footer />
      </div>
    </LoginContext.Provider>
  );
}