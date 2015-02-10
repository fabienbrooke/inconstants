/**
 * Main JS file for Echo behaviours
 */

/*globals jQuery, document */
(function ($) {

    $(document).ready(function(){
        
    	/* Off Canvas Navigation */
        $('.menu-btn, .sidebar a, .close-btn').click(function() {
            $('main, .cover-photo, header, footer').toggleClass('content-open disable-scroll');
            $('.sidebar').toggleClass('sidebar-open');
        });

    	/* Get contents of .social-media and append to .echo-sidebar */
    	$(".sidebar").append( "<div class='social-media'></div>" );
    	$('.social-media').html($('.social-media').html());

        /* Make Videos Responsive */
        function fitVidInit(){
            $(".post").fitVids();
        }
        
        fitVidInit();

        /* Disqus Comments */
        if(disqus){
            $('.show-comments').on('click', function(){
              var disqus_shortname = disqus;
              var disqus_identifier = '{{post.id}}'; //avoid any issues caused by post URLs changing
            
              //ajax request to load the disqus javascript
              $.ajax({
                      type: "GET",
                      url: "http://" + disqus_shortname + ".disqus.com/embed.js",
                      dataType: "script",
                      cache: true
              });
              //hide the button once comments load
              $(this).fadeOut();
            });
        }else{
            $('.comments').css('display', 'none');
        }

        /* Image lightbox */
        if(lightbox == true && !Modernizr.touch){
            $('.post-template .post-content-output img').each(function (){
                var currentImg = $(this);
                currentImg.wrap("<a href='" + currentImg.attr("src") + "' />");
            });
            $('.post-template .post-content-output a').fluidbox();
        }

        /* Infinite Scroll */
        if(infinite_scroll == 'scroll'){

            var ias = $.ias({
                container:  "#main",
                item:       ".post",
                pagination: "#pagination",
                next:       ".older-posts"
            });

            ias.extension(new IASSpinnerExtension()); 
            ias.extension(new IASPagingExtension());
            ias.extension(new IASHistoryExtension());

            ias.on('rendered', function(items) {
                fitVidInit();
            })

        }else if(infinite_scroll == 'click'){

            var ias = $.ias({
                container:  "#main",
                item:       ".post",
                pagination: "#pagination",
                next:       ".older-posts"
            });

            ias.extension(new IASTriggerExtension({
                text: 'Load More Posts',
                html: '<div class="ias-trigger ias-trigger-next"><a class="read-more-posts">{text}</a></div>'
            }));

            ias.extension(new IASPagingExtension());
            ias.extension(new IASHistoryExtension());

            ias.on('rendered', function(items) {
                fitVidInit();
            })

        }

        /* Cover Photo Text */

        $( ".cover-photo h2" ).html(cover_photo_text);

        /* Social Media Icons */

        //show icons once JS has loaded
        $(".social-media").css('visibility', 'visible');

        if(email_link){
            $(".social-media .email").attr("href", email_link);
        }else{
            $(".social-media .email").css("display", "none");
        }

        if(facebook_link){
            $(".social-media .facebook").attr("href", facebook_link);
        }else{
            $(".social-media .facebook").css("display", "none");
        }

        if(twitter_link){
            $(".social-media .twitter").attr("href", twitter_link);
        }else{
            $(".social-media .twitter").css("display", "none");
        }

        if(google_plus_link){
            $(".social-media .google-plus").attr("href", google_plus_link);
        }else{
            $(".social-media .google-plus").css("display", "none");
        }

        if(dribbble_link){
            $(".social-media .dribbble").attr("href", dribbble_link);
        }else{
            $(".social-media .dribbble").css("display", "none");
        }

        if(instagram_link){
            $(".social-media .instagram").attr("href", instagram_link);
        }else{
            $(".social-media .instagram").css("display", "none");
        }

        if(tumblr_link){
            $(".social-media .tumblr").attr("href", tumblr_link);
        }else{
            $(".social-media .tumblr").css("display", "none");
        }

        if(youtube_link){
            $(".social-media .youtube").attr("href", youtube_link);
        }else{
            $(".social-media .youtube").css("display", "none");
        }

        if(vimeo_link){
            $(".social-media .vimeo").attr("href", vimeo_link);
        }else{
            $(".social-media .vimeo").css("display", "none");
        }

        if(pinterest_link){
            $(".social-media .pinterest").attr("href", pinterest_link);
        }else{
            $(".social-media .pinterest").css("display", "none");
        }

        if(flickr_link){
            $(".social-media .flickr").attr("href", flickr_link);
        }else{
            $(".social-media .flickr").css("display", "none");
        }

        if(linkedin_link){
            $(".social-media .linkedin").attr("href", linkedin_link);
        }else{
            $(".social-media .linkedin").css("display", "none");
        }

        if(github_link){
            $(".social-media .github").attr("href", github_link);
        }else{
            $(".social-media .github").css("display", "none");
        }

        if(rss_link == false){
            $(".social-media .rss").css("display", "none");
        }

    });

}(jQuery));