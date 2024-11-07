$(document).ready(function () {
        $('.menubtn').on({
            mouseover: function(){
                $(this).css({
                    "color" : "gray",
                })
            }
        })
        $('.menubtn').on({
            mouseleave: function(){
                $(this).css('color',"white")
            }
        })
        
});