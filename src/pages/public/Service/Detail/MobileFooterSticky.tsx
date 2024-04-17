import { ServiceDataType } from "api/service";
import { ParticipantsObject } from "components/HeroSearchForm2Mobile/ParticipantsInput";
import moment from "moment";
import { FC } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import convertNumbThousand from "utils/convertNumbThousand";
import ModalReserveMobile from "./ModalReserveMobile";
export interface MobileFooterStickyProps {
  className?: string;
  selectedDate: moment.Moment | null;
  onChangeDate: (date: moment.Moment | null) => void;
  defaultParticipants: ParticipantsObject,
  onChangeParticipants: (date: ParticipantsObject) => void;
  defaultService: any;
  defaultTime: number;
  onChangeTime: (time: number) => void;
}
const MobileFooterSticky: FC<MobileFooterStickyProps> = ({
  className = "",
  selectedDate = moment(),
  onChangeDate,
  defaultService,
  defaultParticipants,
  onChangeParticipants,
  defaultTime,
  onChangeTime
}) => {
  return (
    <div className="block lg:hidden fixed bottom-0 inset-x-0 py-2 sm:py-3 bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-6000 z-20">
      <div className="container flex items-center justify-between">
        <div className="">
          <span className="block text-xl font-semibold">
            {convertNumbThousand(defaultService?.price || 0)} VNĐ
            <span className="ml-1 text-sm font-normal text-neutral-500 dark:text-neutral-400">
              /người
            </span>
          </span>
        </div>
        <ModalReserveMobile
          defaultParticipants={defaultParticipants}
          defaultDate={selectedDate}
          onChangeDate={onChangeDate}
          onChangeParticipants={onChangeParticipants}
          renderChildren={({ openModal }) => (
            <ButtonPrimary
              sizeClass="px-5 sm:px-7 py-3 !rounded-2xl"
              onClick={openModal}
            >
              Đặt ngay
            </ButtonPrimary>
          )}
          defaultService={defaultService}
          defaultTime={defaultTime}
          onChangeTime={onChangeTime}
           />
      </div>
    </div>
  );
};

export default MobileFooterSticky;
