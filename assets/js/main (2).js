$(function(){
    $(document).scroll(function(){
        var $nav=$(".navbar");
        if($(this).scrollTop() > $nav.height()){
            $nav.addClass('scrolled');
            $nav.removedClass("navbar-dark");
            $nav.addClass("navbar-light");
        }else{
            $nav.removeClass('scrolled');
            $nav.removedClass("navbar-light");
            $nav.addClass("navbar-dark");
        }
    });
});