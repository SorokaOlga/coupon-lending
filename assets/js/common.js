$(function() {

	//CopyClipboard Code
	var codeBlock = document.getElementsByClassName('popup-code')[0];
	if(codeBlock){
		var clipboard = new Clipboard('.copy-button', {
			text: function(trigger) {
				return trigger.getAttribute('data-clipboard-text');
			}
		});
		clipboard.on('success', function(e) {
			$(e.trigger).hide();
			$('.copy-succes').addClass('copied');
			//$('.disabled').removeClass('disabled');
			var text = $('.copy-button').text();
			var cod = $('.copy-button').data('clipboard-text');
			console.log(text+" "+cod );
			e.clearSelection();
		});
		clipboard.on('error', function(e) {
			var text = $('.copy-button').text();
			var cod = $('.copy-button').data('clipboard-text');
			window.prompt(text+": Ctrl+C, Enter", cod);
			console.error('Action:', e.action);
			console.error('Trigger:', e.trigger);
		});
	}



  function initChangeLang(){
	  $('.change-lang > ul a.en').each(function () {
			var urlPathname = window.location.pathname;
			//var newUrlPathname = urlPathname.substring(0, urlPathname.length - 1);
			var iconHTML = '<i><svg class="icon svg-icons-link"><use xlink:href="../images/sprite.svg#svg-icons-arrow-down"></use></svg></i>';
	  	if (urlPathname === '/'){
		    $(this).append(iconHTML);
		    $(this).parent().addClass('current');
		    $(this).parent().appendTo($('.change-lang'));
	  	}
		});
		$('.change-lang > ul a').not('.en').each(function () {
			var urlPathname = window.location.pathname;
			var newUrlPathname = urlPathname.substring(0, urlPathname.length - 0);
			var iconHTML = '<i><svg class="icon svg-icons-link"><use xlink:href="../images/sprite.svg#svg-icons-arrow-down"></use></svg></i>';
			var langHref = $(this).attr('href');
			if (langHref == newUrlPathname){
		    $(this).append(iconHTML);
		    $(this).parent().addClass('current');
		    $(this).parent().appendTo($('.change-lang'));
			}
		});
  };
  initChangeLang();





	$('.change-lang li:not(.current) .location').click(function()
	{
		var href = $(this).attr('href');
		window.location.href = href;
	});

	$('.main-menu .change-lang').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
	});

	$(document).on('click', function(e)
	{
		var $target = $(e.target);
		var $allCountryElementsHeader = $('.main-menu .change-lang').find('*');
		if(!$target.is($allCountryElementsHeader))
		{
			 $('.main-menu .change-lang').removeClass('active');
		}
	});

	$('.star-rating-aweb a').on('click', function(e) {
		e.preventDefault();
	});

	zamenaPosition();
	window.addEventListener('resize', zamenaPosition);
	function zamenaPosition(){
	var pageShopTitle = $('.shop-header-block .section-title'),
		 logoShopSidebar = $('.about-shop'),
		 sidebarShopWidget = $('.sidebar-info'),
		 imgLogoShopSidebar = $('.shop-logo-wrap'),
		 blockShopLogo = $('.shop-logo'),
		 blockShopInfo = $('.shop-info'),
		 ratingStarsBlock = $('.shop-rating'),
		 ratingStars = $('.shop-rating .brand-rating'),
		 descShopTitle = $('.section-description'),
		 logoIndexPage = $('.logo-indexpage'),
		 mainTitleIndexPage = $('.main-title'),
		 mainToogleMenu = $('.toggle-menu'),
		shopFilter = $('.main-shop-filter .block-filter-links'),
		 siteShopUrl = $('.logo-link-wrap');
		 if(window.innerWidth <= 769){
			 blockShopLogo.insertBefore(pageShopTitle);
			 descShopTitle.insertAfter(pageShopTitle);
		 } else{
			 descShopTitle.insertBefore(blockShopInfo);
			 blockShopLogo.insertBefore(descShopTitle);
		 }
		 if(window.innerWidth <= 592){
			 ratingStarsBlock.insertAfter(descShopTitle);
			 logoIndexPage.insertBefore(mainTitleIndexPage);
		 } else{
			 imgLogoShopSidebar.append(ratingStarsBlock);
			 logoIndexPage.insertAfter(mainToogleMenu);
		 }
	}

	$(".cookie").click(function(){window.location=this.getAttribute("data-href")});
		$(document).ready(function(){
		 if(window.location.hash){
			 var popupHtml = $(window.location.hash);
			 if(popupHtml){
				 var html = popupHtml.html();
				 Popuper = new Popup();
				 $('.promo-popup').html(html);
				 Popuper.open(".promo-popup");
				}
		};
	});

});
