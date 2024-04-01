"use client";
import HeaderNew from "./Components/header-new";
import Banner from "./Components/banner";
import Footer from "./Components/footer";

export default function Home() {
  return (
    <>
      <HeaderNew />
      <div className="layout">
          <Banner />
      </div>
      <Footer />
    </>
  );
}