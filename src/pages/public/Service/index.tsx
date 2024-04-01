import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import { useEffect } from "react";
import SectionGridFilterCard from "./SectionGridFilterCard";
import SectionGridServiceBox from "./SectionGridServiceBox";


function PageService() {
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
      </div>

      <div className="container relative space-y-24 mb-24 ">
        {/* SECTION */}
        <SectionGridFilterCard className="pb-24 lg:pb-28" />

        {/* SECTION */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionGridServiceBox boxCard="box1" />
        </div>

      </div>
    </div>
  );
}

export default PageService;
