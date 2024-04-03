"use client";
import Header from "./Components/header";
import Banner from "./Components/banner";
import Footer from "./Components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="layout">
          <Banner />
      </div>
      <Footer />
    </>
  );
}