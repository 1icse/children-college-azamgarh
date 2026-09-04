document.addEventListener("DOMContentLoaded", function () {

    /*
     * The actual notice data is stored in:
     * ../data/notices.js
     *
     * That file creates:
     * window.schoolNotices
     */

    const notices =
        window.schoolNotices || [];


    /* ================================
       HOME PAGE NOTICES
    ================================= */

    const homeContainer =
        document.querySelector("#homeNotices");

    if (homeContainer) {

        const latestNotices =
            notices.slice(0, 3);

        if (latestNotices.length === 0) {

            homeContainer.innerHTML =
                '<p class="empty-message">No notices available.</p>';

        } else {

            homeContainer.innerHTML =
                latestNotices.map(createNoticeCard).join("");
        }
    }


    /* ================================
       NOTICES PAGE
    ================================= */

    const noticesContainer =
        document.querySelector("#noticesList");

    if (noticesContainer) {

        if (notices.length === 0) {

            noticesContainer.innerHTML =
                '<p class="empty-message">No notices available.</p>';

        } else {

            noticesContainer.innerHTML =
                notices.map(createNoticeCard).join("");
        }
    }


    /* ================================
       NOTICE CARD
    ================================= */

    function createNoticeCard(notice) {

        return `
            <article class="notice-card">

                <div class="notice-card-header">

                    <span class="notice-date">
                        ${escapeHTML(notice.date || "")}
                    </span>

                </div>

                <h3>
                    ${escapeHTML(notice.title || "School Notice")}
                </h3>

                <p>
                    ${escapeHTML(notice.description || "")}
                </p>

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
