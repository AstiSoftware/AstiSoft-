
    $(document).ready(function(){
        $("#header").removeClass("default");
        $(window).scroll(function(){
            if($(this).scrollTop() > 920) {
                $("#header").addClass("default").fadeIn(1500);

            } else {
                $("#header").removeClass("default").fadeIn('slow');
            };
        });
    });