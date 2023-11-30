// all
$('.toggler').click(function(e){
  e.preventDefault();
  $(this).toggleClass('active');
});

// pane
$('.pane-open').click(function(e){
  e.preventDefault();
  $('body').addClass('overflow-none');
  let paneId = $($(this)).attr('href');
  let currentPane = document.querySelector(paneId)
  if(!currentPane.classList.contains('show')){
    $('.pane').removeClass('show');
    $(currentPane).addClass('show');
  } else{
    $(currentPane).removeClass('show');
    $('body').removeClass('overflow-none');
  }
})

// dropdown
$('.dropdown-toggle').click(function(e) {
  e.preventDefault();
  let dropdownContainer = $(this).parent();

  dropdownContainer.toggleClass('open');
  $(this).toggleClass('active');

  dropdownContainer.find('.dropdown-menu__close').click(function(e) {
    e.preventDefault();
    dropdownContainer.removeClass('open');
    $(dropdownContainer).find('.dropdown-toggle').removeClass('active');
    dropdownContainer.find('.dropdown-menu__close').off('click');
  });

  $(document).mouseup(function(e) {
    if (dropdownContainer.has(e.target).length === 0) {
      dropdownContainer.removeClass('open');
      $(dropdownContainer).find('.dropdown-toggle').removeClass('active');
      dropdownContainer.find('.dropdown-menu__close').off('click');
    }
  });
});

// fake-select
$('.fake-select__item').click(function(){
  $(this).parents(".fake-select").find('.fake-select__item').removeClass('active');
  $(this).addClass('active');
  $(this).parents('.fake-select').find('.fake-select__value').html(this.innerHTML)
  $(this).parents('.fake-select').removeClass('open');
});

// collapse
$(".collapse-link").click(function(e){
  e.preventDefault();

  if($(this).hasClass("active")){
    $(this.getAttribute("href")).slideUp(300);
  } else{
    $(this.getAttribute("href")).slideDown(300);
  }

  $(this).toggleClass("active");
});

// tabs
$('.tab-link').click(function(e){
  e.preventDefault();
  $(".through-tab").find('.tab-link').removeClass('active');
  $(this).addClass('active');
  $(".through-tab").find(`.tab-link[href="${this.getAttribute("href")}"]`).addClass('active');
  $(".through-tab").find('.fake-select__value').html(this.innerHTML);
  $(this).closest('.tab-section').find('.tab-pane').removeClass('active');
  $(this.getAttribute("href")).addClass('active');
});

// tabs
$('.tab-link-js').click(function(e){
  e.preventDefault();
  $(this).parents(".tab-nav").find('.tab-link-js').removeClass('active');
  $(this).addClass('active');
  $(this).closest('.tab-section').find('.tab-pane').removeClass('active');
  $(this.getAttribute("href")).addClass('active');
});

// up-link
let $page = $('html, body');
$('.up-link').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

// modal
$(".modal-open").click(function(e){
  e.preventDefault();
  $(".modal").removeClass("show");
  $(this.getAttribute("href")).addClass("show");
  $('body').removeClass('overflow-none');
  $('body').addClass('overflow-none');
})
$(".modal").mousedown(function(e){
  let closeLinks = document.querySelectorAll(".modal-close");
  let modalsGroup = document.querySelectorAll(".modal");

  for(let elem of closeLinks){
    if(e.target == elem){
      $(this).removeClass("show");
      $('body').removeClass('overflow-none');
      $('.login__mobile-link').removeClass('active');
    }
  }
  for(let elem of modalsGroup){
    if(e.target == elem){
      $(this).removeClass("show");
      $('body').removeClass('overflow-none');
      $('.login__mobile-link').removeClass('active');
    }
  }
})

// checkResolution
function checkResolution() {
  if (window.innerWidth < 768) {

  }
}

window.addEventListener('load', checkResolution);
window.addEventListener('resize', checkResolution);



// home
let priceSlider = document.getElementById('price-range');

if(priceSlider){
  noUiSlider.create(priceSlider, {
    start: '0',
    connect: true,
    range: {
      'min': 0,
      'max': 30
    },
  });

  var formatValues = [
    document.getElementById('price-value'),
  ];

  priceSlider.noUiSlider.on('update', function (values, handle, unencoded) {
      formatValues[handle].value = Math.ceil(values[handle]);
  });

  formatValues.forEach((input, handle) => {
    input.addEventListener('change', function () {
      priceSlider.noUiSlider.setHandle(handle, this.value);
    });
  })
}
