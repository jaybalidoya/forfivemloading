jQuery(window).load(function(){document.documentElement.scrollHeight!==document.documentElement.clientHeight&&$(".secContScorll").show()}),$(window).scroll(function(){$(".secContScorll").fadeOut()}),$(function(){var t="#imgItem01";$("#itmImgs img").hide(),$("#itmImgs img").first().show(),$("#itemListing a").click(function(){$(this).children(".imgHolder").toggleClass("expand"),event.preventDefault();var e=$(this).attr("href");t!=e&&($("#itmImgs img").fadeOut(),$(e).fadeIn(),t=e)}),$("#itemListing a").mouseover(function(){event.preventDefault();var e=$(this).attr("href");t!=e&&($("#itmImgs img").fadeOut(),$(e).fadeIn(),t=e)}),$(".colExpand .btnHolder").click(function(){$(this).toggleClass("active"),$(this).prev(".contentHolder").toggle()})});