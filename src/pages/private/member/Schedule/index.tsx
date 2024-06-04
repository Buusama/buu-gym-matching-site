import { getListBooking } from "api/booking";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import Calendar from "components/FullCalendar/FullCalendar";
import Heading2 from "components/Heading/Heading2";
import Label from "components/Label/Label";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import LoadingIcon from "shared/LoadingIcon/LoadingIcon";

function PageSchedule() {
    // CUSTOM THEME STYLE
    const navigate = useNavigate();
    useEffect(() => {
        const $body = document.querySelector("body");
        if (!$body) return;
        $body.classList.add("theme-purple-blueGrey");
        return () => {
            $body.classList.remove("theme-purple-blueGrey");
        };
    }, []);

    const { data: bookingData, isLoading, isError } = useQuery("bookingData", () => getListBooking());
    const events = bookingData?.data.map((item) => {
        return {
            id: item.bookingId?.toString() ?? '',
            title: item.serviceName ?? item.workoutName,
            start: item.date + "T" + item.time,
            allDay: false
        }
    });
    return (
        <div className="nc-PageHome3 relative overflow-hidden">
            {/* GLASSMOPHIN */}
            <BgGlassmorphism />

            {/* SECTION HERO */}
            <div className="container px-1 sm:px-4 mb-24 ">
            </div>

            {/* SECTION HERO */}
            <div className="container relative space-y-24 mb-24 ">
                <div className="pb-24 lg:pb-28">
                    <Heading2
                        heading="Lịch tập luyện"
                        subHeading={
                            <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
                            </span>
                        }
                    />
                    {
                        isLoading ? <LoadingIcon size={30} /> :
                            isError ? <Label className="z-999 relative">Có lỗi xảy ra vui lòng thử lại sau</Label> :
                                (
                                    <Calendar
                                        events={events}
                                        eventClick={function (arg: any) {
                                            navigate(`/member/schedules/${arg.event.id}`);
                                        }} />
                                )
                    }
                </div>

            </div>

            <div className="container relative space-y-24 mb-24 ">
                {/* SECTION */}

                {/* SECTION */}
            </div>
        </div>
    );
}

export default PageSchedule;
