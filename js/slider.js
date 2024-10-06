 $(document).ready(function () {
                $('.slider').slick({
                    dots: true, // Add dots for navigation
                    appendDots: $('.slider'), // Append dots within the slider element
                    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
                    nextArrow: '<button type="button" class="slick-next">Next</button>'
                });
            });