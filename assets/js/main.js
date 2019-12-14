$(document).ready(function(){
    $('.menu-button').click(function(){
        $('.section-side-header').toggleClass('open-sidebar');
    })
})
$(document).ready(function(){
    $('.menu-button').click(function(){
        $('.main-wrapper').toggleClass('margin-sidebar');
    })
})



/*
jQuery(document).ready(function () {

	jQuery('.progress-bar').each(function () {
		jQuery(this).find('.progress-content').animate({
			width: jQuery(this).attr('data-percentage')
		}, 2000);

		jQuery(this).find('.progress-number-mark').animate({
			left: jQuery(this).attr('data-percentage')
		}, {
			duration: 2000,
			step: function (now, fx) {
				var data = Math.round(now);
				jQuery(this).find('.percent').html(data + '%');
			}
		});
	});
});

*/

var offsetTop = $(".section-skill").offset().top;
$(window).scroll(function() {
  var height = $(window).height();
  if ($(window).scrollTop() + height > offsetTop) {
    jQuery(".progress-bar-custom").each(function() {
      jQuery(this).find(".progress-content").animate(
        {
          width: jQuery(this).attr("data-percentage")
        },
        2000
      );

      jQuery(this).find(".progress-number-mark").animate(
        {
          left: jQuery(this).attr("data-percentage")
        },
        {
          duration: 2000,
          step: function(now, fx) {
            var data = Math.round(now);
            jQuery(this).find(".percent").html(data + "%");
          }
        }
      );
    });
  }
});
//end skills progress bar

//achivement counter
$('.counter').counterUp({
  delay: 10,
  time: 2000
});
//end achivement counter



//isotop

$(document).ready(function(){
	var $grid = $('.grid-group').isotope({
		itemSelector: '.grid',
		masonry: {
		  columnWidth:1,
		}
	  });
	
	  // filter items on button click
	  $('.filter-button').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
});
//isotop