import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className=" ">
      <Header />
      <SpecialityMenu/>
      <TopDoctors/>
      <Banner/>
      {/* <div className="font-bold bg-primary">Home dccc</div> */}
    </div>
  );
};

export default Home;
