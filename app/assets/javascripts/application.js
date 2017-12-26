// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap.min
//= require tinymce
//= require_tree .
window.mobilecheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };
var timeoutId;
var currentImage;
var currentVideo;
var currentState;
var numTags;
var prevTag;
var changeToNext = function()
{
    var e = $('#tag_cloud').children().eq( Math.floor(Math.random() * numTags))
    console.log("Next Tag: " + e[0])
    
    if(prevTag)
    {
        if(prevTag[0] != e[0])
        {
        // prevTag.css("display", "none")
        prevTag.animate({top: "-2em"}, 600, function() {
            // Animation complete.
            
            // e.slideDown('slow')
            // prevTag.css("display", "none");

          });
          e.css("display", "block")
          e.animate({top: "0em"}, 800, function(){
            prevTag.css("top", "2em");

            prevTag.css("display", "none");
            prevTag = e;}
        )
    }
    else
    {
        changeToNext()
    }


    }
    else
    {
        e.css("display", "block")
        e.animate({top: "0em"}, 800, function(){    prevTag = e;
        })
        // e.slideDown('slow')
    }
    
    // e.css("display", "block")
}

var hoverFunctionStart = function(e) {
    if (!timeoutId) {
        currentImage = this;

        timeoutId = window.setTimeout(function() {
            $( ".vid-card[toggle='" + $(currentImage).attr('target') + "']" )[0].play()  
            timeoutId = null; // EDIT: added this line
            $(currentImage).css("display", "none");
            $( ".vid-card[toggle='" + $(currentImage).attr('target') + "']" ).css("display", "block");  
            // console.log($(currentImage).attr('toggle'));
            // $('.vid-card').css("display", "block");  
    }, 700);
    }
}

var hoverFunctionEnd = function () {
    if (timeoutId) {
        window.clearTimeout(timeoutId);
        timeoutId = null;
    }
    else {
    // $("#SeeAllEvents").slideUp('slow');
    }
}

var clickFunctionImage = function(e) {
    currentImage = this;
    $(currentImage).css("display", "none");
    $( ".vid-card[toggle='" + $(currentImage).attr('target') + "']" ).css("display", "block");  
    $( ".vid-card[toggle='" + $(currentImage).attr('target') + "']" )[0].play()
}

var clickFunctionVideo = function(e) {
    currentVideo = this;
    $(currentVideo).css("display", "none");
    $( ".img-card[toggle='" + $(currentVideo).attr('target') + "']" ).css("display", "block");  
}

$(document).on('turbolinks:load', function () {
    console.log("Inside")
    numTags = $('#tag_cloud').children().length;
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    
    $('.vid-card').on('mouseout', function () {
        $(this).css("display", "none");
        $(this)[0].pause();
        $(this)[0].currentTime = 0;
        $('.img-card').css("display", "block");    
    });


    $(".img-card").hover(hoverFunctionStart, hoverFunctionEnd);

        // $(".content").on('mousewheel', function(event, delta) {
        //     // console.log(event.originalEvent.deltaY)
        // this.scrollLeft += (event.originalEvent.deltaY);
        // event.preventDefault();
        // });

        $(".content").on('wheel', function(event, delta) {
        var scrollBy = 100*Math.abs(event.originalEvent.deltaY)/event.originalEvent.deltaY
        console.log(scrollBy)
        this.scrollLeft += (scrollBy);
        event.preventDefault();
        });

        
        var mq = window.matchMedia('@media screen and (max-width: 700px)');
        var mq2 = window.matchMedia('(max-width: 700px)');
        
        if(window.mobilecheck())
        {
            if(mq.matches ) {
                // the width of browser is more then 700px
                console.log("More than 700px")
                $(".img-card").hover(hoverFunctionStart, hoverFunctionEnd);
            
                
            } else {
                // the width of browser is less then 700px
                console.log("Less than 700px")
                $(".img-card").unbind('hover mouseenter mouseleave');
                $(".img-card").click(clickFunctionImage);
                $(".vid-card").click(clickFunctionVideo);
            }
        
        
            mq2.addListener(function(changed) {
                if(changed.matches) {
                    // the width of browser is more then 700px
                    console.log("Changed to Less than 700px")
                    $(".img-card").unbind('hover mouseenter mouseleave');
                    $(".img-card").click(clickFunctionImage);
                    $(".vid-card").click(clickFunctionVideo);
            
            
                } else {
                    // the width of browser is less then 700px
                    console.log("Changed to More than 700px")
                    $(".img-card").hover(hoverFunctionStart, hoverFunctionEnd);
            
                }
            });
        }
        changeToNext()

});

setInterval(changeToNext, 3000)




