"use client";
import HeaderNew from "./../Components/header";
import ContentPage from "./../Components/content-page";
import Footer from "./../Components/footer";

export default function SinglePage() {
  return (
    <>
      <HeaderNew />
      <div className="layout">
          <ContentPage />
      </div>
      <Footer />
    </>
  );
}