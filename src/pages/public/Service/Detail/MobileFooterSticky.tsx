import { DateRage } from "components/HeroSearchForm/StaySearchForm";
import { ParticipantsObject } from "components/HeroSearchForm2Mobile/ParticipantsInput";
import ModalSelectDate from "components/ModalSelectDate";
import moment from "moment";
import React, { useState } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import converSelectedDateToString from "utils/converSelectedDateToString";
import ModalReserveMobile from "./ModalReserveMobile";

const MobileFooterSticky = () => {
  const [selectedDate, setSelectedDate] = useState<DateRage>({
    startDate: moment().add(4, "days"),
    endDate: moment().add(10, "days"),
  });
  const [participantsState, setParticipantsState] = useState<ParticipantsObject>({
    participants: 1,
  });

  return (
    <div className="block lg:hidden fixed bottom-0 inset-x-0 py-2 sm:py-3 bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-6000 z-20">
      <div className="container flex items-center justify-between">
        <div className="">
          <span className="block text-xl font-semibold">
            $120
            <span className="ml-1 text-sm font-normal text-neutral-500 dark:text-neutral-400">
              /người
            </span>
          </span>
          <ModalSelectDate
            defaultValue={selectedDate}
            onSelectDate={setSelectedDate}
            renderChildren={({ defaultValue, openModal }) => (
              <span
                onClick={openModal}
                className="block text-sm underline font-medium"
              >
                {converSelectedDateToString(selectedDate)}
              </span>
            )}
          />
        </div>
        <ModalReserveMobile
          defaultParticipants={participantsState}
          defaultDate={selectedDate}
          onChangeDate={setSelectedDate}
          onChangeParticipants={setParticipantsState}
          renderChildren={({ openModal }) => (
            <ButtonPrimary
              sizeClass="px-5 sm:px-7 py-3 !rounded-2xl"
              onClick={openModal}
            >
              Đặt ngay
            </ButtonPrimary>
          )}
        />
      </div>
    </div>
  );
};

export default MobileFooterSticky;
