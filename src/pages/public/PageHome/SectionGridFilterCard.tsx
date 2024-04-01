import { DEMO_EXPERIENCES_LISTINGS } from "assets/data/listings";
import { ExperiencesDataType, StayDataType } from "assets/data/types";
import ExperiencesCard from "components/ExperiencesCard/ExperiencesCard";
import Heading2 from "components/Heading/Heading2";
import { FC } from "react";
import Pagination from "shared/Pagination/Pagination";
import TabFilters from "./TabFilters";

export interface SectionGridFilterCardProps {
  className?: string;
  data?: StayDataType[];
}

const DEMO_DATA: ExperiencesDataType[] = DEMO_EXPERIENCES_LISTINGS.filter(
  (_, i) => i < 8
);

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
  data = DEMO_DATA,
}) => {
  return (
    <div
      className={`nc-SectionGridFilterCard ${className}`}
      data-nc-id="SectionGridFilterCard"
    >
      <Heading2
        heading="Dịch vụ"
        subHeading={
          <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
            50+ Dịch vụ
            <span className="mx-2">·</span>100+ Huấn luyện viên
          </span>
        }
      />

      <div className="mb-8 lg:mb-11">
        <TabFilters />
      </div>
      <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {data.map((stay) => (
          <ExperiencesCard key={stay.id} data={stay} />
        ))}
      </div>
      <div className="flex mt-16 justify-center items-center">
        <Pagination />
      </div>
    </div>
  );
};

export default SectionGridFilterCard;
