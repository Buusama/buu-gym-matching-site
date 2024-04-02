import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import { useEffect } from "react";


function PageTrainer() {
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
Trang huấn luyện viên
      {/* SECTION HERO */}
      <div className="container px-1 sm:px-4 mb-24 ">
      </div>

      <div className="container relative space-y-24 mb-24 ">
        {/* SECTION */}

        {/* SECTION */}
      </div>
    </div>
  );
}

export default PageTrainer;
