import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import { useEffect } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import Heading2 from "components/Heading/Heading2";
import { useQuery } from "react-query";
import { getListBooking } from "api/booking";
import LoadingIcon from "shared/LoadingIcon/LoadingIcon";
import Label from "components/Label/Label";
import { useNavigate } from "react-router-dom";
import { getListScheduleMember } from "api/schedule";

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

    const { data: bookingData, isLoading, isError } = useQuery("scheduleMemberData", () => getListScheduleMember());

    const events = bookingData?.data.map((item) => {
        return {
            id: item.id.toString(),
            title: item.serviceName,
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
                                    <div className="full-calendar">
                                        <FullCalendar
                                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin,]}
                                            initialView="dayGridMonth"
                                            weekends={false}
                                            headerToolbar={
                                                {
                                                    left: "prev,next today",
                                                    center: "title",
                                                    right: "dayGridMonth,timeGridWeek,timeGridDay"
                                                }
                                            }
                                            events={events}
                                            editable={false}
                                            selectable={false}
                                            selectMirror={false}
                                            dayMaxEvents={true}
                                            eventClick={function (arg) {
                                                navigate(`/member/schedules/${arg.event.id}`);
                                            }}

                                        />
                                    </div>
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
