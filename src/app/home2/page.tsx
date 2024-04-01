"use client";
import HeaderNew from "./../Components/header";
import Banner from "./../Components/banner";
import Footer from "./../Components/footer";

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