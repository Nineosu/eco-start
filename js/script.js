document.addEventListener('DOMContentLoaded', () => {
    // Sliders
    const recommendationsSlider = new Swiper('.recommendations-slider', {
        direction: 'horizontal',
        slidesPerView: 1,
        loop: false,
        spaceBetween: 10,
        centeredSlides: true,

        navigation: {
          nextEl: '.recommendations-next',
          prevEl: '.recommendations-prev',
        },
        
        breakpoints: {
            769: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            481: {
                slidesPerView: 1.5,
            }
        }
    });

    const partnersSlider = new Swiper('.partners-slider', {
        direction: 'horizontal',
        slidesPerView: 1,
        loop: false,
        spaceBetween: 30,

        navigation: {
          nextEl: '.partners-next',
          prevEl: '.partners-prev',
        },

        breakpoints: {
            769: {
                slidesPerView: 4
            },
            481: {
                slidesPerView: 2,
            }
        }
    });

    const reviewsSlider = new Swiper('.reviews-slider', {
        direction: 'horizontal',
        slidesPerView: 1,
        loop: false,
        spaceBetween: 30,

        navigation: {
          nextEl: '.reviews-next',
          prevEl: '.reviews-prev',
        },
    });

    const newsSlider = new Swiper('.news-slider', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        loop: false,
        spaceBetween: 80,
        centeredSlides: true,

        navigation: {
          nextEl: '.news-next',
          prevEl: '.news-prev',
        },

        breakpoints: {
            769: {
                slidesPerView: 3,
                centeredSlides: false,
            }
        }
    });

    const videosSlider = new Swiper('.videos-slider', {
        direction: 'horizontal',
        slidesPerView: 1,
        loop: false,
        spaceBetween: 20,

        navigation: {
          nextEl: '.videos-next',
          prevEl: '.videos-prev',
        },

        breakpoints: {
            769: {
                slidesPerView: 2,
            }
        }
    });

    const studyingReviewsSlider = new Swiper('.studying-reviews-slider', {
        direction: 'horizontal',
        slidesPerView: 1,
        loop: false,
        spaceBetween: 30,

        navigation: {
          nextEl: '.studying-reviews-next',
          prevEl: '.studying-reviews-prev',
        },
    });

    const landingReviewsSlider = new Swiper('.landing-reviews-slider', {
        direction: 'horizontal',
        slidesPerView: 1,
        loop: false,
        spaceBetween: 30,

        breakpoints: {
            769: {
                slidesPerView: 2,
            }
        },

        navigation: {
          nextEl: '.landing-reviews-next',
          prevEl: '.landing-reviews-prev',
        },
    });

    // Fancybox
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

    // Services card more
    const servicesCards = document.querySelectorAll('.services__card');

    servicesCards.forEach(card => {
        const moreBtn = card.querySelector('.services__card-more')

        moreBtn.addEventListener('click', () => {
            card.classList.add('list-shown');
        });
    });

    // FAQ
    const faqBlocks = document.querySelectorAll('.faq__block');

    faqBlocks.forEach(block => {
        const blockQuestion = block.querySelector('.faq__block-question');

        blockQuestion.addEventListener('click', () => {
            block.classList.toggle('faq-open');
        });
    });

    // Tabs
    const addingTabs = (btnsClass, tabsClass) => {
        const tabsButtons = document.querySelectorAll(`.${btnsClass}`),
              tabs = document.querySelectorAll(`.${tabsClass}`);

        tabsButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                refreshElements(tabsButtons, 'btn-active');
                refreshElements(tabs, 'tab-active');

                btn.classList.add('btn-active');

                tabs.forEach(tab => {
                    if (btn.getAttribute('data-tab') == tab.getAttribute('data-tab')) {
                        tab.classList.add('tab-active');
                    }
                });
            });
        });
    };

    const refreshElements = (elements, activeClass) => {
        elements.forEach(el => {
            el.classList.remove(activeClass);
        });
    };

    addingTabs('geography__tabs-button', 'geography__tab');
    addingTabs('description__tabs-button', 'description__tab');

    // Burger
    const burger = document.querySelector('.header__burger'),
          burgerMenu = document.querySelector('.burger__menu'),
          burgerClose = burgerMenu.querySelector('.burger-close');

    burger.addEventListener('click', () => {
        burgerMenu.classList.add('burger-show')
    });

    burgerClose.addEventListener('click', () => {
        burgerMenu.classList.remove('burger-show');
    });

    const burgerMenuBlocks = document.querySelectorAll('.burger__menu-block');


    burgerMenuBlocks.forEach(block => {
        const blockTitle = block.querySelector('.burger__list-title');

        if (blockTitle) {
            blockTitle.addEventListener('click', () => {
                block.classList.toggle('menu-active');
            });
        }
    });

    // Modals
    const requestBtns = document.querySelectorAll('.btn-modal-request'),
          requestModal = document.querySelector('.request__modal'),
          requestClose = requestModal.querySelector('.modal-close');

    requestBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            requestModal.classList.add('modal-show');
        });
    });

    requestClose.addEventListener('click', () => {
        requestModal.classList.remove('modal-show');
    });

    const callbackBtns = document.querySelectorAll('.btn-modal-callback'),
          callbackModal = document.querySelector('.callback__modal'),
          callbackClose = callbackModal.querySelector('.modal-close');

    callbackBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            callbackModal.classList.add('modal-show');
        });
    });

    callbackClose.addEventListener('click', () => {
        callbackModal.classList.remove('modal-show');
    });
});