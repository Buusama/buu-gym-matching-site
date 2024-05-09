import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import { useEffect } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import Heading2 from "components/Heading/Heading2";

function PageSchedule() {
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
                            events={[
                                { title: 'event 1', date: '2024-05-09' },
                                { title: 'event 2', date: '2024-05-09' }
                            ]}
                            editable={false}
                            selectable={false}
                            selectMirror={false}
                            dayMaxEvents={true}
                            select={function (arg) {
                                console.log(arg);
                            }}
                            eventClick={function (arg) {
                                console.log(arg);
                            }}
                            eventsSet={function (arg) {
                                console.log(arg);
                            }}
                        />
                    </div>
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
