(() => {
    // TESTIMONIAL SLIDER
    jQuery('.js-testimonial-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 6000,
        items: 1
    });

    // TESTIMONIAL
    jQuery('.js-testimonial').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 6000,
        responsive: {
            0 : {
                items: 1,
                stagePadding: 30,
                margin: 10
            },
            768 :  {
                items: 3,
                margin: 20,
                stagePadding: 0
            }
        }
    });
    
    // ANNOUNCEMENTS
    jQuery('.js-text-scroller').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 6000,
        responsive: {
            0 : {
                items: 2,
                center: true,
                margin: 10
            },
            768 :  {
                items: 3,
                margin: 20
            },
            1024 : {
                items: 4,
                stagePadding: 0,
                margin: 30
            }
        }
    });

    // IMAGE CAROUSEL
    jQuery('.js-image-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 6000,
        margin: 10,
        responsive: {
            0 : {
                items: 1,
                center: true,
                stagePadding: 50
            },
            768 :  {
                nav: false,
                loop: false,
                items: 2,
                margin: 20
            },
            1024 : {
                nav: false,
                loop: false,
                items: 3,
                stagePadding: 20,
                margin: 20
            }
        }
    });

    // ANNOUNCEMENTS
    jQuery('.js-announcement').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 6000,
        items: 1
    });

    // STEPS
    if( jQuery(window).width() < 768 ) {
        jQuery('.js-steps').owlCarousel({
            loop: true,
            nav: true,
            dots: true,
            autoplay: true,
            autoHeight: true,
            autoplayTimeout: 6000,
            items: 1
        });
    }

    // HERO SLIDER
    jQuery('.js-hero').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 6000,
        items: 1
    });

    // LOGO CAROUSEL
    jQuery('.js-logo-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 6000,
        margin: 20,
        responsive: {
            0 : {
                items: 1,
                center: true,
                stagePadding: 50,
                nav: false
            },
            768 :  {
                items: 3,
                nav: false,
            },
            1024 : {
                loop: false,
                items: 6,
                stagePadding: 0,
                margin: 40,
                nav: false
            }
        }
    });

    jQuery('.js-logo-carousel-label').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 6000,
        margin: 20,
        responsive: {
            0 : {
                items: 1,
                center: true,
                stagePadding: 50,
                nav: false
            },
            768 :  {
                items: 3,
                nav: false,
            },
            1024 : {
                loop: false,
                items: 5,
                stagePadding: 0,
                margin: 40,
                nav: false
            }
        }
    });


    // VIDEO
    jQuery('.video-wrapper svg').click(function(){
        const _parent = jQuery(this).parent();
        const _video = jQuery('video', _parent);

        _parent.addClass('playing');
        _video.trigger('play');

    });

    // COMPARISON MOBILE TOGGLE
    jQuery('.other-choices .js-toggle').click(function(){
        jQuery(this).parent().toggleClass('active');
        jQuery('.other-choices ul').toggleClass('active');
    });

    jQuery('.other-choices ul li').click(function(){
        jQuery('.other-choices').removeClass('active');
        jQuery('.other-choices ul').removeClass('active');

        const _slug = jQuery(this).attr('class');

        jQuery('.other-products__item').removeClass('active');
        jQuery('.other-products__item.' + _slug ).addClass('active');
    });

    jQuery('.js-additional-trigger').click(function(){
        jQuery('.module--additional').toggleClass('active');
    });

    // Mobile Menu
    const _mobileMenu = jQuery('.mobile-navigation');
    jQuery('.js-mobile-open').click(function(){
        _mobileMenu.addClass('open');
    });

    jQuery('.js-mobile-close').click(function(){
        _mobileMenu.removeClass('open');
    });

    const _faqs = document.querySelectorAll('.faq-list');
    if( _faqs ) {
        _faqs.forEach( _faq => {
            const _question = _faq.querySelectorAll('.faq-question');

            _question.forEach( _toggle => {
                _toggle.addEventListener('click', e => {
                    e.preventDefault();
                    const _target = e.currentTarget;
                    const _parent = _target.parentNode;

                    _parent.classList.toggle('active');
                });
            });
        });
    }

    jQuery('.js-variations').click(function(){
        jQuery('.js-variations').removeClass('active');
        jQuery(this).addClass('active');

        const _slug = jQuery(this).data('slug');
        jQuery('.variation--buttons').removeClass('active');
        jQuery( '.' + _slug ).addClass('active');
    });

    jQuery(window).scroll(function(){
        if( scrollY > 120 ) {
            jQuery('.site-header').addClass('is-sticky');
        } else {
            jQuery('.site-header').removeClass('is-sticky');
        }
    });

    jQuery('.footer-navigation li.menu-item-has-children').append('<span class="trigger"></span>');
    jQuery('.footer-navigation li.menu-item-has-children .trigger').click(function(){
        jQuery(this).parent().toggleClass('active');
    });

    // PRICE SWITCHER
    jQuery('.cart .variations select').on('change', function(){
        const _varPrice = jQuery('.woocommerce-variation-price').html();

        console.log( _varPrice );

        setTimeout( () => {
            jQuery('.woocommerce-page div.product .product-info__title--header .price').html( _varPrice );
        }, 500); 
    });

    // LAZY LOAD IMAGES
    const _images = document.querySelectorAll('img');

	[].forEach.call( _images, image => {
        let _exp    = image.getAttribute('loading');
        let _source = image.getAttribute('data-src');

        if( !_exp && !image.parentNode.classList.contains('wp-block-image') ) {
            image.setAttribute('src', _source);
        }

        image.onload = () => {

            image.removeAttribute('data-src');

        }

	});

})();