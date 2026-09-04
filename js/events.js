document.addEventListener("DOMContentLoaded", function () {

    /*
     * The actual event data is stored in:
     * ../data/events.js
     *
     * That file creates:
     * window.schoolEvents
     */

    const events =
        window.schoolEvents || [];


    /* ================================
       HOME PAGE EVENTS
    ================================= */

    const homeContainer =
        document.querySelector("#homeEvents");

    if (homeContainer) {

        const upcomingEvents =
            events.slice(0, 3);

        if (upcomingEvents.length === 0) {

            homeContainer.innerHTML =
                '<p class="empty-message">No upcoming events.</p>';

        } else {

            homeContainer.innerHTML =
                upcomingEvents
                    .map(createEventCard)
                    .join("");
        }
    }


    /* ================================
       EVENTS PAGE
    ================================= */

    const eventsContainer =
        document.querySelector("#eventsList");

    if (eventsContainer) {

        if (events.length === 0) {

            eventsContainer.innerHTML =
                '<p class="empty-message">No upcoming events.</p>';

        } else {

            eventsContainer.innerHTML =
                events
                    .map(createEventCard)
                    .join("");
        }
    }


    /* ================================
       EVENT CARD
    ================================= */

    function createEventCard(event) {

        return `
            <article class="event-card">

                <div class="event-date">
                    <span class="event-day">
                        ${escapeHTML(event.day || "")}
                    </span>

                    <span class="event-month">
                        ${escapeHTML(event.month || "")}
                    </span>
                </div>

                <div class="event-content">

                    <h3>
                        ${escapeHTML(event.title || "School Event")}
                    </h3>

                    <p>
                        ${escapeHTML(event.description || "")}
                    </p>

                    ${
                        event.time
                            ? `
                                <span class="event-time">
                                    ${escapeHTML(event.time)}
                                </span>
                              `
                            : ""
                    }

                </div>

            </article>
        `;
    }


    /* ================================
       BASIC HTML ESCAPING
    ================================= */

    function escapeHTML(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

});
