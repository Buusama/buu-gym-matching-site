import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionHero3 from "components/SectionHero/SectionHero3";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import { useEffect } from "react";
import SectionGridCategoryBox from "./SectionGridCategoryBox";
import SectionGridFeaturePlaces from "./SectionGridFeaturePlaces";
import SectionGridAuthorBox from "./SectionGridAuthorBox";


function PageHome() {
  // CUSTOM THEME STYLE
  useEffect(() => {
    const $body = document.querySelector("body");
    if (!$body) return;
    $body.classList.add("theme-purple-blueGrey");
    return () => {
      $body.classList.remove("theme-purple-blueGrey");
    };
  }, []);

  return (
    <div className="nc-PageHome3 relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      {/* SECTION HERO */}
      <div className="container px-1 sm:px-4 mb-24 ">
        <SectionHero3 className="" />
      </div>

      <div className="container relative space-y-24 mb-24 ">

        {/* SECTION */}
        <SectionGridCategoryBox />

        {/* SECTION */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionGridAuthorBox boxCard="box1" />
        </div>

        {/* SECTION */}
        {/* <SectionHowItWork /> */}

        {/* SECTION */}
        {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionGridFeaturePlaces />
        </div> */}

        {/* SECTION */}
        <SectionSubscribe2 />
      </div>
    </div>
  );
}

export default PageHome;
