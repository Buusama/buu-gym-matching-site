import { getBookingDetail } from "api/booking";
import { ServiceTypeLabel, ServiceTypeValue } from "enums";
import { FC } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Badge from "shared/Badge/Badge";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import LoadingIcon from "shared/LoadingIcon/LoadingIcon";
import NcImage from "shared/NcImage/NcImage";
import convertMinuteToHour from "utils/converMinuteToHour";

export interface ScheduleDetailPageProps {
  className?: string;
}

const ScheduleDetailPage: FC<ScheduleDetailPageProps> = ({
  className = "",
}) => {
  const { id } = useParams();
  const { data: scheduleData, isLoading, isError } = useQuery("scheduleDetail", () => getBookingDetail(Number(id) || 0));

  const renderContent = () => {
    return (
      <div className="w-full flex flex-col sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-8 px-0 sm:p-6 xl:p-8">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          Chi tiết lịch hẹn của bạn
        </h2>

        <div className="border-b border-neutral-200 dark:border-neutral-700"></div>

        {/* ------------------------ */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">{
            scheduleData?.data.serviceType === ServiceTypeValue.GROUP ? "Thông tin lớp học" :
              scheduleData?.data.serviceType === ServiceTypeValue.ONLINE ? "Thông tin lớp online" :
                scheduleData?.data.bookingTrainerName ? "Thông tin bài tập riêng tư" :
                  "Thông tin tự tập" }</h3>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <div className="flex-shrink-0 w-full sm:w-40">
              <div className=" aspect-w-4 aspect-h-3 sm:aspect-h-4 rounded-2xl overflow-hidden">
                <NcImage src={scheduleData?.data.serviceThumbnail ?? scheduleData?.data.workoutThumbnail} />
              </div>
            </div>
            <div className="pt-5  sm:pb-5 sm:px-5 space-y-3">
              <div>
                {/* <Badge name="Online" color="green" /> */}
                {
                  scheduleData?.data.serviceType === ServiceTypeValue.GROUP ? <Badge name={ServiceTypeLabel.GROUP} color="green" /> :
                    scheduleData?.data.serviceType === ServiceTypeValue.ONLINE ? <Badge name={ServiceTypeLabel.ONLINE} color="green" /> :
                      scheduleData?.data.bookingTrainerName ? <Badge name={ServiceTypeLabel.PRIVATE} color="green" /> :
                        <Badge name={ServiceTypeLabel.SELF} color="green" />
                }
                <span className="text-base sm:text-lg font-medium mt-1 block">
                  {scheduleData?.data.serviceName ?? scheduleData?.data.workoutName}
                </span>
              </div>
              <span className="block  text-sm text-neutral-500 dark:text-neutral-400">
                Thời gian tập luyện: {convertMinuteToHour(Number(scheduleData?.data.serviceDuration) || Number(scheduleData?.data.workoutDuration))}
              </span>
              <div className="w-10 border-b border-neutral-200  dark:border-neutral-700"></div>
              <span className="text-base sm:text-lg font-medium mt-1 block">
                Giáo viên : {scheduleData?.data.trainerName ?? scheduleData?.data.bookingTrainerName}
              </span>

            </div>
          </div>
          <div className="mt-6 border border-neutral-200 dark:border-neutral-700 rounded-3xl flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-neutral-200 dark:divide-neutral-700">
            <div className="flex-1 p-5 flex space-x-4">
              <svg
                className="w-8 h-8 text-neutral-300 dark:text-neutral-6000"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.33333 8.16667V3.5M18.6667 8.16667V3.5M8.16667 12.8333H19.8333M5.83333 24.5H22.1667C23.4553 24.5 24.5 23.4553 24.5 22.1667V8.16667C24.5 6.878 23.4553 5.83333 22.1667 5.83333H5.83333C4.54467 5.83333 3.5 6.878 3.5 8.16667V22.1667C3.5 23.4553 4.54467 24.5 5.83333 24.5Z"
                  stroke="#D1D5DB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col">
                <span className="text-sm text-neutral-400">Ngày</span>
                <span className="mt-1.5 text-lg font-semibold">
                  {scheduleData?.data.date} : {scheduleData?.data.time}
                </span>
              </div>
            </div>
            <div className="flex-1 p-5 flex space-x-4">
              <svg
                className="w-8 h-8 text-neutral-300 dark:text-neutral-6000"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 5.07987C14.8551 4.11105 16.1062 3.5 17.5 3.5C20.0773 3.5 22.1667 5.58934 22.1667 8.16667C22.1667 10.744 20.0773 12.8333 17.5 12.8333C16.1062 12.8333 14.8551 12.2223 14 11.2535M17.5 24.5H3.5V23.3333C3.5 19.4673 6.63401 16.3333 10.5 16.3333C14.366 16.3333 17.5 19.4673 17.5 23.3333V24.5ZM17.5 24.5H24.5V23.3333C24.5 19.4673 21.366 16.3333 17.5 16.3333C16.225 16.3333 15.0296 16.6742 14 17.2698M15.1667 8.16667C15.1667 10.744 13.0773 12.8333 10.5 12.8333C7.92267 12.8333 5.83333 10.744 5.83333 8.16667C5.83333 5.58934 7.92267 3.5 10.5 3.5C13.0773 3.5 15.1667 5.58934 15.1667 8.16667Z"
                  stroke="#D1D5DB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="flex flex-col">
                <span className="text-sm text-neutral-400">Số người tham gia</span>
                <span className="mt-1.5 text-lg font-semibold">{scheduleData?.data.participants}</span>
              </div>
            </div>
          </div>
        </div>
        {
          scheduleData?.data.serviceType === ServiceTypeValue.ONLINE && (
            <div className="ml-auto">
              <ButtonPrimary href="/">Tham gia lớp online</ButtonPrimary>
            </div>
          )
        }

        {/* ------------------------ */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Danh sách hội viên cùng tham gia</h3>
          {/* thong tin cac ban cung lop */}
          {/* for 10 */}
          {
            Array(4).fill(0).map((_, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden">
                  <NcImage src="https://source.unsplash.com/100x100" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">Name</span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    Role
                  </span>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    );
  };

  return (
    <div className={`nc-PayPage ${className}`} data-nc-id="PayPage">
      <main className="container mt-11 mb-24 lg:mb-32 ">
        <div className="max-w-4xl mx-auto">{
          isLoading ? <LoadingIcon size={30} /> :
            isError ? <div>Có lỗi xảy ra vui lòng thử lại sau</div> :
              renderContent()
        }</div>
      </main>
    </div>
  );
};

export default ScheduleDetailPage;
