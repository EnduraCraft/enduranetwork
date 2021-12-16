(function($) {
	
	"use strict";

  // Preloader
  $("#page").hide();
	$(window).on('load', function() {
    setTimeout(function() {
      $('#loader').addClass('loaded');
      $('#index').removeAttr('style');
    }, 5000);
    setTimeout(function() {
      $("#page").show();
    }, 1000);
  });

  // Cookies
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if(c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  if(getCookie('cookie-consent') != "") {
    $('#cookie-popup').attr('style', 'display: none;');
  } else {
    $('#cookie-popup').removeAttr('style');
    $('#btn-cookie').click(function () {
      let date = new Date();
      date.setTime(date.getTime() + 31536000000);
      document.cookie = 'cookie-consent=true; expires=' + date.toUTCString() + 'path=/;';
      $('#cookie-popup').fadeOut(300);
    });
  }

  // Navbar
  $(window).scroll(function () {
    let top = $(window).scrollTop() + 1;
    if(top > 90) {
      $('#navbar').addClass('fixed-top animated fadeInDown navbar-bg-color');
      $('#navbar').attr('style', 'position: fixed;');
      if(document.getElementById('header-arrow')) document.getElementById('header-arrow').setAttribute('style', 'visibility: hidden;');
    } else {
      $('#navbar').removeClass('fixed-top animated fadeInDown navbar-bg-color');
      $('#navbar').attr('style', '');
      if(document.getElementById('header-arrow')) document.getElementById('header-arrow').removeAttribute('style');
    }
  });

  // Vote Switch
  let $frame = $('.voteFrame');

	$('.voteFrame').on('load', function() {
		$('.iframe-house').addClass('loaded');
	});
	
	$('.voteLink').click(function(e) {
		openVoteLink(this, e);
	});

	$(function() {
		openVoteLink($('.voteLink:first-child'));
	});
	
	function openVoteLink(el, e=null) {
		if(e && e.target.tagName === 'A') return;
		if($(el).hasClass('active')) return;
		$('.iframe-house').removeClass('loaded');
		let url = $(el).attr('data-url');
		$('.voteFrame').attr('src', url);
		$('.voteLink.active').removeClass('active');
		$(el).addClass('active');
	}

})(window.jQuery);
