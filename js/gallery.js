document.addEventListener("DOMContentLoaded", function () {

    /*
     * The actual gallery data is stored in:
     * ../data/gallery.js
     *
     * That file creates:
     * window.schoolGallery
     */

    const gallery =
        window.schoolGallery || [];

    const galleryContainer =
        document.querySelector("#galleryGrid");

    if (!galleryContainer) {
        return;
    }


    /* ================================
       EMPTY GALLERY
    ================================= */

    if (gallery.length === 0) {

        galleryContainer.innerHTML =
            '<p class="empty-message">Gallery images will be added soon.</p>';

        return;
    }


    /* ================================
       DISPLAY GALLERY
    ================================= */

    galleryContainer.innerHTML =
        gallery.map(createGalleryItem).join("");


    /* ================================
       IMAGE ERROR HANDLING
    ================================= */

    const images =
        galleryContainer.querySelectorAll("img");

    images.forEach(function (image) {

        image.addEventListener("error", function () {

            const item =
                image.closest(".gallery-item");

            if (item) {
                item.classList.add("image-error");
            }
        });
    });


    /* ================================
       GALLERY ITEM
    ================================= */

    function createGalleryItem(item) {

        return `
            <figure class="gallery-item">

                <img
                    src="${escapeAttribute(item.image || "")}"
                    alt="${escapeAttribute(item.alt || "School gallery image")}"
                    loading="lazy"
                >

                ${
                    item.caption
                        ? `
                            <figcaption>
                                ${escapeHTML(item.caption)}
                            </figcaption>
                          `
                        : ""
                }

            </figure>
        `;
    }


    /* ================================
       HTML ESCAPING
    ================================= */

    function escapeHTML(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    function escapeAttribute(value) {

        return escapeHTML(value);
    }

});
