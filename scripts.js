
/* Quote Carousel */

$(document).ready(function() {
    function fetchAndDisplayQuotes() {
        $.ajax({
            url: "https://smileschool-api.hbtn.info/quotes",
            method: "GET",
            beforeSend: function() {
                $("#loader-quotes").show();
            },
            success: function(response) {
                $("#loader-quotes").hide();
                const quotesCarousel = $("#quotes-carousel");

                response.forEach((quote) => {
                    console.log("Processing quote:", quote);

                    const quoteUnit = $("<div>").addClass("quoteItem").append(
                        $("<div>").addClass("row align-items-center").append(
                            $("<div>").addClass("col-12 col-lg-3 text-center").append(
                                $("<img>").addClass("d-block mx-auto").attr("src", quote.pic_url)
                            )
                        ).append(
                            $("<div>").addClass("col-12 col-lg-9").append(
                                $("<div>").addClass("quoteText").append(
                                    $("<p>").addClass("text-white").html(`&ldquo;${quote.text}&rdquo;`),
                                    $("<h4>").addClass("text-white").text(quote.name),
                                    $("<span>").addClass("text-white").text(quote.title)
                                )
                            )
                        )
                    );
                    quotesCarousel.append(quoteUnit);
                });

                quotesCarousel.removeClass("d-none");

                quotesCarousel.slick({                        
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        arrows: true,
                        prevArrow: $(".quote-arrow-left"),
                        nextArrow: $(".quote-arrow-right")
                    });
                    setTimeout(function() {
                        $(window).trigger('resize');
                    }, 300);

                    console.log("Carousel initialized..");
                },
            error: function() {
                console.error("Error with loading quotes");
                alert("Error with loading quotes");
                $("#loader-quotes").hide();
            }
        });
    }
/* Popular Tutorial Video Carousel */
     function fetchAndDisplayTutorials() {
        $.ajax({
            url: "https://smileschool-api.hbtn.info/popular-tutorials",
            method: "GET",
            beforeSend: function() {
                $("#loader-popular").show();
            },
            success: function(response) {
                console.log("Data received:", response);
                $("#loader-popular").hide();
                const tutorialCarousel = $("#popular-carousel");

                response.forEach(function(data) {
                    console.log("Adding card for video:", data.title);
                    const card = $("<div>").addClass("card mx-3").append(
                        $("<img>").addClass("card-img-top img-fluid mx-auto").attr("src", data.thumb_url),
                        $("<div>").addClass("card-img-overlay d-flex text-center").append(
                            $("<img>").addClass("play-overlay position-absolute top-50 start-50 translate-middle").attr("src", "images/play.png").attr("width", "55px")
                        ),
                      $("<div>").addClass("card-main").append(
                            $("<h5>").addClass("card-title").text(data.title),
                            $("<p>").addClass("card-text").text(data["sub-title"]),
                            $("<div>").addClass("author-info d-flex").append(
                                $("<img>").addClass("rounded-circle").attr("src", data.author_pic_url).attr("width", "25px"),
                               $("<h6>").addClass("popular-author").text(data.author)
                            ),
                            $("<div>").addClass("rating-info d-flex justify-content-between").append(
                                $("<div>").addClass("rating d-flex")
                            )
                        )
                    );

                    tutorialCarousel.append(card);
                    
                });
                
                tutorialCarousel.removeClass("d-none");

               tutorialCarousel.slick({
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: false,
                    arrows: true,
                    prevArrow: $(".tutorial-arrow-left"),
                    nextArrow: $(".tutorial-arrow-right"),
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            }
                        }
                    ]
                });
                console.log("Carousel initialized..");
            },
                error: function() {
                    console.error("Error with loading tutorial videos");
                    alert("Error with loading tutorial videos");
                    $("#loader-popular").hide();
                }
            });
        }
/* Latest Videos Carousel */

    function fetchAndDisplayLatestVideos() {
        $.ajax({
            url: "https://smileschool-api.hbtn.info/latest-videos",
            method: "GET",
            beforeSend: function() {
                $("#loader-latest").show();
            },
            success: function(response) {
                console.log("Data received:", response);
                $("#loader-latest").hide();
                const latestVideoCarousel = $("#latest-videos-carousel");

                response.forEach(function(data) {
                    console.log("Adding card for video:", data.title);
                    const card = $("<div>").addClass("card mx-3").append(
                        $("<img>").addClass("card-img-top img-fluid mx-auto").attr("src", data.thumb_url),
                        $("<div>").addClass("card-img-overlay d-flex text-center").append(
                            $("<img>").addClass("play-overlay position-absolute top-50 start-50 translate-middle").attr("src", "images/play.png").attr("width", "55px")
                        ),
                      $("<div>").addClass("card-main").append(
                            $("<h5>").addClass("card-title").text(data.title),
                            $("<p>").addClass("card-text").text(data["sub-title"]),
                            $("<div>").addClass("author-info d-flex").append(
                                $("<img>").addClass("rounded-circle").attr("src", data.author_pic_url).attr("width", "25px"),
                               $("<h6>").addClass("popular-author").text(data.author)
                            ),
                            $("<div>").addClass("rating-info d-flex justify-content-between").append(
                                $("<div>").addClass("rating d-flex")
                            )
                        )
                    );

                    latestVideoCarousel.append(card);
                    
                });
               latestVideoCarousel.slick({
                    infinite: true,
                    slidesToShow: 3.99,
                    slidesToScroll: 1,
                    autoplay: false,
                    arrows: true,
                    prevArrow: $(".latest-arrow-left"),
                    nextArrow: $(".latest-arrow-right"),
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 1,
                            }
                        }
                    ]
                });
                latestVideoCarousel.removeClass("d-none");
                console.log("Carousel initialized..");
            },
            error: function() {
                console.error("Error with loading latest videos");
                alert("Error with loading latest videos");
                $("#loader-latest").hide();
            }
        });
    }

    function courseFilters() {
        $.ajax({
            url: "https://smileschool-api.hbtn.info/courses",
            method: "GET",
            success: function(course) {
                const courseTopics = course.topics;
                const courseSort = course.sorts;
            
            // Populate topic dropdown
            const topicDropdownMenu = $("#topicDropdown + .dropdown-menu");
            topicDropdownMenu.empty();
            courseTopics.forEach(function(topic) {
                const newDropdownItem = $(`<a class="dropdown-item" href="#" data-value="${topic}">${topic}</a>`);
                topicDropdownMenu.append(newDropdownItem);
            });

            topicDropdownMenu.on("click", ".dropdown-item", function(e) {
                e.preventDefault();
                const topic = $(this).text();
                $("#topicDropdown span").first().text(topic);
                $("#topicDropdown").data("value", topic);
                fetchAndDisplayCourses();
            });

            // Populate sort dropdown
            const sortDropdownMenu = $("#sortDropdown + .dropdown-menu");
            sortDropdownMenu.empty(); 
            courseSort.forEach(function(sort) {
                const newDropdownItem = $(`<a class="dropdown-item" href="#" data-value="${sort}">${sort}</a>`);
                sortDropdownMenu.append(newDropdownItem);
            });
            
            sortDropdownMenu.on("click", ".dropdown-item", function(e) {
                e.preventDefault();
                const sort = $(this).text();
                $("#sortDropdown span").first().text(sort);
                $("#sortDropdown").data("value", sort);
                fetchAndDisplayCourses();
            });
        },
        error: function() {
            alert("Error loading course filters");
        }
    });
}

function fetchAndDisplayCourses() {
    const query = $("#search-input").val();
    const topic = $("#topicDropdown").data("value");
    const sort = $("#sortDropdown").data("value");

    $("#loader-courses").show();
    $("#course-list").empty();
    $("#course-container").addClass("d-none");

    $.ajax({
        url: "https://smileschool-api.hbtn.info/courses",
        method: "GET",
        data: {
            q: query,
            topic: topic,
            sort: sort
        },
        success: function(response) {
            $("#loader-courses").hide();
            $("#course-container").removeClass("d-none");

            const courses = response.courses.slice(0, 11);
            $(".video-count").text(`${courses.length} videos`);

            courses.forEach(function(course) {
                console.log("Adding card for video:", course.title);
                const card = $("<div>").addClass("col-12 col-md-4 col-lg-3 mb-4").append(
                    $("<img>").addClass("card-img-top img-fluid mx-auto").attr("src", course.thumb_url),
                    $("<div>").addClass("card-img-overlay d-flex text-center").append(
                        $("<img>").addClass("play-overlay position-absolute top-50 start-50 translate-middle").attr("src", "images/play.png").attr("width", "55px")
                    ),
                    $("<div>").addClass("card-main").append(
                        $("<h5>").addClass("card-title").text(course.title),
                        $("<p>").addClass("card-text").text(course["sub-title"]),
                        $("<div>").addClass("author-info d-flex").append(
                            $("<img>").addClass("rounded-circle").attr("src", course.author_pic_url).attr("width", "25px"),
                            $("<h6>").addClass("popular-author").text(course.author)
                        ),
                        $("<div>").addClass("rating-info d-flex justify-content-between").append(
                            $("<div>").addClass("rating d-flex")
                        )
                    )
                );

                $("#course-list").append(card);
            });
        },
        error: function() {
            $("#loader-courses").hide();
            alert("Error loading courses");
        }
    });
}

// Call functions on page load
courseFilters();
fetchAndDisplayCourses();

// Fetch and display courses on input change
$('#search-input').on('input', fetchAndDisplayCourses);

 /* Bootup function to determine path and appropriate function calls */
    
    function bootUp() {
        const path = window.location.pathname;
        const basePath = "/smileschool-java/";

        if (path === basePath || path === `${basePath}index.html`) {
            fetchAndDisplayQuotes();
            fetchAndDisplayTutorials();
            fetchAndDisplayLatestVideos();
        } else if (path === `${basePath}pricing.html`) {
            fetchAndDisplayQuotes();
        } else if (path === `${basePath}courses.html`) {
            courseFilters();
            fetchAndDisplayCourses();
        }
    }
    
    bootUp();
});

/*
function bootUp() {

    const path = window.location.pathname;
    if (path.includes("index.html")) {
        fetchAndDisplayQuotes();
        fetchAndDisplayTutorials();
        fetchAndDisplayLatestVideos();
    } else if (path.includes("pricing.html")) {
        fetchAndDisplayQuotes();
    } else if (path.includes("courses.html")) {
        courseFilters();
        fetchAndDisplayCourses();
    }
}
bootUp();
});
*/
