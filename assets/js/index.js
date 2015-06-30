/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

       
        
        $('.post__image').each(function() {
            var $this = $(this),
                img = $this.find('img'),
                url = img.attr('src');
            
            $this.css('background-image', 'url('+url+')');
            img.remove();
        });


        
        $('.post-content').each(function() {
            var $this = $(this),
                img = $this.find('img:first'),
                url = img.attr('src');
            
  /*           $(".post-image-image").css('background-image', 'url('+url+')'); */
            $(".post-image-image").css('display:block;');
            img.remove();
        }); 
        
        var $window = $(window),
            $image = $('.post-image-image');
        $window.on('scroll', function() {
            var top = $window.scrollTop();
            
            if (top < 0 || top > 1500) { return; }
            $image
                .css('transform', 'translate3d(0px, '+top/1.75+'px, 0px)')
                .css('opacity', 1-Math.max(top/700, 0));
        });
        $window.trigger('scroll');
        
    });

}(jQuery));


