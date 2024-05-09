import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "states";
import { fetchService, selectServiceStatus } from "states/slices/service";
import SectionGridFilterCard from "./SectionGridFilterCard";

function ListingBookingPage() {

  //rename data, isLoading, isError
  // CUSTOM THEME STYLE
  useEffect(() => {
    const $body = document.querySelector("body");
    if (!$body) return;
    $body.classList.add("theme-purple-blueGrey");
    return () => {
      $body.classList.remove("theme-purple-blueGrey");
    };
  }, []);

  const dispatch = useAppDispatch();
  const serviceStatus = useAppSelector(selectServiceStatus);

  useEffect(() => {
    if (serviceStatus === "idle") dispatch(fetchService());
  }, [dispatch, serviceStatus]);

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

      </div>
    </div>
  );
}

export default ListingBookingPage;
