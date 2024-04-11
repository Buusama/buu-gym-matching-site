import { Tab } from "@headlessui/react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { ServiceDataType } from "api/service";
import { ParticipantsObject } from "components/HeroSearchForm2Mobile/ParticipantsInput";
import Label from "components/Label/Label";
import ModalSelectDate from "components/ModalSelectDate";
import ModalSelectParticipants from "components/ModalSelectParticipants";
import StartRating from "components/StartRating/StartRating";
import mastercardPng from "images/mastercard.svg";
import visaPng from "images/vis.png";
import { FC, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Input from "shared/Input/Input";
import NcImage from "shared/NcImage/NcImage";
import NcModal from "shared/NcModal/NcModal";
import { useAppSelector } from "states";
import { selectAuthStatus } from "states/slices/auth";
import convertMinuteToHour from "utils/converMinuteToHour";
import convertNumbThousand from "utils/convertNumbThousand";

export interface PaymentPageProps {
  className?: string;
  onClose?: () => void;
  onChangeParticipants: (date: ParticipantsObject) => void;
  defaultParticipants: ParticipantsObject
  onChangeDate: (date: moment.Moment | null) => void;
  defaultDate: moment.Moment | null;
  defaultService: ServiceDataType | undefined;
  defaultTime: string;
  onChangeTime: (time: string) => void;
}

const timeArray = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];
const PaymentPage: FC<PaymentPageProps> = ({
  className = "",
  onClose,
  onChangeParticipants,
  defaultParticipants,
  onChangeDate,
  defaultDate,
  defaultService,
  defaultTime,
  onChangeTime
}) => {
  const authStatus = useAppSelector(selectAuthStatus);
  const location = useLocation();
  const renderSidebar = () => {
    return (
      <div className="w-full flex flex-col sm:rounded-2xl lg:border border-neutral-200 dark:border-neutral-700 space-y-6 sm:space-y-8 px-0 sm:p-6 xl:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <div className="flex-shrink-0 w-full sm:w-40">
            <div className=" aspect-w-4 aspect-h-3 sm:aspect-h-4 rounded-2xl overflow-hidden">
              <NcImage src={defaultService?.gallery_images[0]} />
            </div>
          </div>
          <div className="py-5 sm:px-5 space-y-3">
            <div>
              <span className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-1">

              </span>
              <span className="text-base font-medium mt-1 block">
                {defaultService?.name}
              </span>
            </div>
            <span className="block  text-sm text-neutral-500 dark:text-neutral-400">
              {convertMinuteToHour(defaultService?.duration)}
            </span>
            <div className="w-10 border-b border-neutral-200  dark:border-neutral-700"></div>
            <StartRating />
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-2xl font-semibold">Thông tin giá cả</h3>
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
            <span>{convertNumbThousand(defaultService?.price)} x {defaultParticipants.participants} Người </span>
            <span>{convertNumbThousand(defaultService?.price ?? 0 * (defaultParticipants?.participants ?? 0))}</span>
          </div>
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
            <span>VAT</span>
            <span></span>
          </div>

          <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="flex justify-between font-semibold">
            <span>Tổng tiền</span>
            <span>{convertNumbThousand(defaultService?.price ?? 0 * (defaultParticipants?.participants ?? 0))}</span>
          </div>
        </div>
      </div>
    );
  };

  const renderMain = () => {
    return (
      <div className="w-full flex flex-col sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-8 px-0 sm:p-6 xl:p-8">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          Xác nhận thông tin
        </h2>
        <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
        <div>
          <div>
            <h3 className="text-2xl font-semibold">Dịch vụ bạn chọn</h3>
            <NcModal
              renderTrigger={(openModal) => (
                <span
                  onClick={() => openModal()}
                  className="block lg:hidden underline  mt-1 cursor-pointer"
                >
                  Xem thông tin cụ thể
                </span>
              )}
              renderContent={renderSidebar}
              modalTitle="Thông tin chi tiết dịch vụ"
            />
          </div>
          <div className="mt-6 border border-neutral-200 dark:border-neutral-700 rounded-3xl flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-neutral-200 dark:divide-neutral-700">
            <ModalSelectDate
              defaultValue={defaultDate}
              onSelectDate={(date) => { onChangeDate(date) }}
              renderChildren={({ openModal }) => (
                <button
                  onClick={openModal}
                  className="text-left flex-1 p-5 flex justify-between space-x-5 "
                  type="button"
                >
                  <div className="flex flex-col">
                    <span className="text-sm text-neutral-400">Ngày</span>
                    <span className="mt-1.5 text-lg font-semibold">
                      {defaultDate ? defaultDate.format("DD MMM") : "Date"}
                    </span>
                  </div>
                  <PencilSquareIcon className="w-6 h-6 text-neutral-6000 dark:text-neutral-400" />
                </button>
              )}
            />

            <ModalSelectParticipants
              defaultValue={defaultParticipants}
              onChangeParticipants={onChangeParticipants}
              max={defaultService?.max_capacity ?? 20}
              renderChildren={({ openModal }) => (
                <button
                  type="button"
                  onClick={openModal}
                  className="text-left flex-1 p-5 flex justify-between space-x-5"
                >
                  <div className="flex flex-col">
                    <span className="text-sm text-neutral-400">Người tham gia</span>
                    <span className="mt-1.5 text-lg font-semibold">
                      <span className="line-clamp-1">
                        {`${defaultParticipants.participants} Người`}
                      </span>
                    </span>
                  </div>
                  <PencilSquareIcon className="w-6 h-6 text-neutral-6000 dark:text-neutral-400" />
                </button>
              )}
            />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-6 md:gap-8 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
            {timeArray.map((time) => (
              <button
                key={time}
                onClick={() => onChangeTime(time)}
                className={`p-4 rounded-lg focus:outline-none text-sm font-semibold ${defaultTime === time
                  ? "bg-neutral-800 dark:bg-neutral-300 text-white dark:text-neutral-900"
                  : "rounded-lg border border-neutral-200 dark:border-neutral-700"
                  }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* <div>
          <h3 className="text-2xl font-semibold">Người đặt lịch</h3>
          <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 my-5"></div>

          <div className="mt-6">

            <div className="space-y-5">
              <div className="space-y-1">
                <Label>Tên(Ghi trên CCCD) </Label>
                <Input defaultValue="VÕ TÁ HOAN" />
              </div>
              <div className="space-y-1">
                <Label>Email </Label>
                <Input defaultValue="example@gmail.com" />
              </div>
              <div className="space-y-1">
                <Label>Số Điện Thoại </Label>
                <Input defaultValue="0912330010" />
              </div>

            </div>
          </div>
        </div> */}

        {
          authStatus === "success" ? (
            <div>
              <h3 className="text-2xl font-semibold">Thanh toán bằng</h3>
              <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 my-5"></div>

              <div className="mt-6">
                <Tab.Group>
                  <Tab.List className="flex my-5">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full focus:outline-none ${selected
                            ? "bg-neutral-800 dark:bg-neutral-300 text-white dark:text-neutral-900"
                            : "text-neutral-6000 dark:text-neutral-400"
                            }`}
                        >
                          Paypal
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`px-4 py-1.5 sm:px-6 sm:py-2.5  rounded-full flex items-center justify-center focus:outline-none  ${selected
                            ? "bg-neutral-800 dark:bg-neutral-300 text-white dark:text-neutral-900"
                            : " text-neutral-6000 dark:text-neutral-400"
                            }`}
                        >
                          <span className="mr-2.5">Credit card</span>
                          <img className="w-8" src={visaPng} alt="" />
                          <img className="w-8" src={mastercardPng} alt="" />
                        </button>
                      )}
                    </Tab>
                  </Tab.List>

                  <Tab.Panels>
                    <Tab.Panel className="space-y-5">
                      <div className="space-y-1">
                        <Label>Số thẻ </Label>
                        <Input defaultValue="111 112 222 999" />
                      </div>
                      <div className="space-y-1">
                        <Label>Tên chủ thẻ </Label>
                        <Input defaultValue="JOHN DOE" />
                      </div>
                      <div className="flex space-x-5  ">
                        <div className="flex-1 space-y-1">
                          <Label>Ngày hết hạn </Label>
                          <Input type="date" defaultValue="MM/YY" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <Label>CVC </Label>
                          <Input />
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel className="space-y-5">
                      <div className="space-y-1">
                        <Label>Email </Label>
                        <Input type="email" defaultValue="example@gmail.com" />
                      </div>
                      <div className="space-y-1">
                        <Label>Mật khẩu </Label>
                        <Input type="password" defaultValue="***" />
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
                <div className="pt-8">
                  {/* <ButtonPrimary href={"/pay-done"}>Xác nhận và thanh toán</ButtonPrimary> */}
                  <Link to={"/pay-done"} state={{
                    defaultService,
                    defaultParticipants,
                    defaultDate: defaultDate ? defaultDate.format("DD MMM") : null,
                    defaultTime
                  }}>
                    <ButtonPrimary>Xác nhận và thanh toán</ButtonPrimary>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-2xl font-semibold">Đăng nhập để tiếp tục</h3>
              <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 my-5"></div>
              <div className="mt-6">
                <Link to={"/login"} state={{ redirectTo: location }}>
                  <ButtonPrimary >Đăng nhập</ButtonPrimary>
                </Link>
              </div>
            </div>
          )
        }
      </div>
    );
  };

  return (
    <div className={`nc-CheckOutPage ${className}`} data-nc-id="CheckOutPage">
      <main className="container mt-11 mb-24 lg:mb-32 flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-3/5 xl:w-2/3 lg:pr-10 ">{renderMain()}</div>
        <div className="hidden lg:block flex-grow">{renderSidebar()}</div>
      </main>
    </div>
  );
};

export default PaymentPage;
