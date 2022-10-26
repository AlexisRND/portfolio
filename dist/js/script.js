const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active')
});

const counters = document.querySelectorAll('.ghraph__item-digit'),
    lines = document.querySelectorAll('.ghraph__item-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
})


$(document).ready(function(){
    $('.contacts__form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
              },
            email: {
                required: true,
                email: true
            },
            checkbox: {
                required: true
            }
        },
        messages: {
            name: {
                required:  "Пожалуйста, введите своё имя",
                minlength: jQuery.validator.format("Введите минимум {0} символа!")
              },
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адрес почты"
            },
            checkbox: {
                required: "Ознакомьтесь с политикой конфиденциальности"
            }
          }
    });


    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid())
        return;
        
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.overlay, .modal').fadeIn('slow');
            $('.modal__close').on('click', function() {
                $('.overlay, modal').fadeOut('slow')
            });

            $('form').trigger('reset');
        })
        
        return false;
    });
    

    //modal

    $('.modal__close').on('click', function() {
        $('.overlay, modal').fadeOut('slow')
    })




});
