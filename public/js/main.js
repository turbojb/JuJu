class SectionsWithPages {
    constructor(sections) {
        this.sections = sections

        const imageToShow = images => {
            const filtered = images.filter(image => image.top < 260)
            const sorted = filtered.sort((a, b) => b.top - a.top)
            if(sorted.length) {
                return sorted[0]
            }
        }

        for(const section of sections) {
            $(`#project-image-wrapper-${section.id}`).on("scroll", () => {
                const images =
                    $(`#project-image-wrapper-${section.id}`)
                        .find(".project-image")
                        .toArray()
                        .map((image, index) => {
                            return {
                                index: index,
                                image: image,
                                top: $(image).position().top
                            }
                        });

                const showImage = imageToShow(images)

                if(showImage) {
                    $(`#image-section-${section.id}`).find(".image-info").hide()
                    const infoToShow =
                        $(`#image-section-${section.id}`)
                            .find(".image-info")
                            .toArray()[showImage.index]
                    $(infoToShow).show()
                }
            })
        }
    }

    listenForClicks() {
        for(const section of this.sections) {
            $(`#link-for-${section.id}`).on("click", () => {
              const refresh = window.location.protocol + "//" + window.location.host + window.location.pathname + '?active=' + encodeURI(section.name);
              window.history.pushState({ path: refresh }, '', refresh);
              this.switchSection(section)
            });
        }
    }

    switchSection(section) {
        $(".links .link").removeClass("active")
        $(`#link-for-${section.id}`).addClass("active")
        $(".section").hide()
        $(`#image-section-${section.id}`).show()
    }
}

function showLogin() {
    $("body").removeClass("gray-bg")
    $("#show-login").hide()
    $("#intro").hide()
    $("#login").show()
}

function login() {
    const pw = $("#password").val()

    $.ajax({
        type: "POST",
        url: "/login",
        data: JSON.stringify({pw: pw}),
        dataType: "json",
        contentType: "application/json",
        statusCode: {
            200: () => { window.location = "/" },
            400: () => { alert("Incorrect password") }
        }
    });
}