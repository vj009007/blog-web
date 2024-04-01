"use client";
import HeaderNew from "./../Components/header-new";
import GridContent from "./../Components/grid";
import Footer from "./../Components/footer";

export default function Grid() {
  return (
    <>
      <HeaderNew />
      <div className="layout">
          <GridContent />
      </div>
      <Footer />
    </>
  );
}