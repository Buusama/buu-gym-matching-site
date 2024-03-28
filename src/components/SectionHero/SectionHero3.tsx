import React, { FC } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import imagePng from "images/travelhero2.png";

export interface SectionHero3Props {
  className?: string;
}

const SectionHero3: FC<SectionHero3Props> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero3 relative ${className}`}
      data-nc-id="SectionHero3"
    >
      <div className="absolute z-10 inset-x-0 top-[10%] sm:top-[15%] text-center flex flex-col items-center max-w-2xl mx-auto space-y-4 lg:space-y-5 xl:space-y-8">

        <h2 className="font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl !leading-[115%] ">
          Chuyên nghiệp và hiệu quả
        </h2>
        <span className="sm:text-lg md:text-xl font-semibold text-neutral-900">
          Chúng tôi đã mệnh danh là đối tác học tập chiến lược, đảm bảo một sự tiến bộ không ngừng và hiệu quả cho tất cả những người tham gia vào chương trình của chúng tôi!
        </span>

        <ButtonPrimary
          sizeClass="px-6 py-3 lg:px-8 lg:py-4 rounded-xl"
          fontSize="text-sm sm:text-base lg:text-lg font-medium"
        >
          Tìm hiểu thêm
        </ButtonPrimary>
      </div>
      <div className="relative aspect-w-1 aspect-h-1 sm:aspect-w-4 sm:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9 xl:aspect-h-8 ">
        <img
          className="absolute inset-0 object-cover rounded-xl"
          src="https://careermasterycoaching.trafft.com/api/v1/public/media/ef99be3e-663f-43e5-bc91-3ac08dd79c12?size=large"
          alt="hero"
        />
      </div>
    </div>
  );
};

export default SectionHero3;