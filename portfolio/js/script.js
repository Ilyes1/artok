$(document).ready(function() {

    $('header a').each(function() {
        $(this).click(function() {
            console.log($(this).eq())
        })
    })

    //Navbar background
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 20) {
            $('header, .resNav').css('background-color', '#1a1a1d')
        } else {
            $('header, .resNav').css('background', 'none')
        }
    })

    //The responsive navbar
    $('.resNav').css('top', $('header').height() + 20)

    //Showing the responsive navbar
    $('.menuIcon').click(function() {
        $(this).toggleClass('menuIcon-active')
        $('.resNav').slideToggle(300)
    })

    //Parallax effect
    $(window).on('scroll', function() {
        $('.home').css('background-position-y', $(this).scrollTop() / 2 + 'px')
    })

    //Progress bars
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >= $('.skill').offset().top - $(this).height()) {
            $('.skill-progressBar').each(function() {
                $(this).css('width', $(this).find('span').text())
            })
        }
    })


    //Active links
    $(window).on("scroll", onScroll);
    function onScroll(){
      var scrollPos = $(window).scrollTop();
      $('header a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.nav li a').removeClass("active");
          currLink.css('color', '#a1dffb')
        }
        else{
          currLink.css('color', '#fff')
        }
      });
    }


    //popup image
    $('.project').click(function() {
        $('.popup img').attr('src', $(this).find('img').attr('src'))
        $('.popup').fadeIn()
    })
    $('.overlay').click(function() {
        $('.popup').fadeOut()
    })

    //The form
    $('.form button').click(function() {
        if ($('textarea').val() == '') {
            $('.form h4').text('You must type a message.').fadeIn().delay(2000).fadeOut()
        } else {
            $('.form h4').text('Thanks for your message.').fadeIn().delay(2000).fadeOut()
            $('.form input, .form textarea').val('')
        }
    })


})