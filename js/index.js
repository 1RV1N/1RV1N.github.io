var directionH = "";
var directionV = "";
var oldx = 0;
var oldy = 0;
var cursor = document.getElementById("follower");
    mousemovemethod = function (e) {
    
        if (e.pageX < oldx) {
            directionH = "left"
        } else if (e.pageX > oldx) {
            directionH = "right"
        }
        if (e.pageY < oldy) {
            directionV = "top"
        } else if (e.pageY > oldy) {
            directionV = "down"
        }
        
        oldy = e.pageY;
        oldx = e.pageX;
        direction = directionH +" "+directionV;
        // console.log("La direction est:"+direction);

        if (direction == "right top" || direction == "left top"){
          cursor.className=" ";
        }else if(direction == "right down"){
          cursor.className=" ";
            cursor.classList.add("CursorPointerRight");
        }else{
          cursor.className=" ";
            cursor.classList.add("CursorPointerLeft");
        }
        
}

document.addEventListener('mousemove', mousemovemethod);


//////////////////////////////////////////


(function() {
  var follower, init, mouseX, mouseY, positionElement, timer;

  follower = document.getElementById('follower');

  mouseX = (event) => {
    return event.clientX;
  };

  mouseY = (event) => {
    return event.clientY;
  };

  positionElement = (event) => {
    var mouse;
    mouse = {
      x: mouseX(event),
      y: mouseY(event)
    };
    follower.style.top = mouse.y + 'px';
    return follower.style.left = mouse.x + 'px';
  };

  timer = false;

  window.onmousemove = init = (event) => {
    var _event;
    _event = event;
    return timer = setTimeout(() => {
      return positionElement(_event);
    }, 1);
  };

}).call(this);

/////////////////////////////////////////////////////////

$(document).ready(function(){

  $(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    console.log(keycode);

    if(keycode == '99' || keycode == '67' ){
       $('#pilotCardContainer').toggleClass("displayNone");
       $('#pilotCardContainer').toggleClass("display");
    }
    if(keycode == '118' || keycode == '86'){
      $link = $('.linkedin');
      $link[0].click()
    }
    if(keycode == '98' || keycode == '66'){
      $link = $('.contacter');
      $link[0].click()
    }
  });

  $(document).on('click', '.retour', function() {
    // alert('wesh gros');
    // console.log('voilaaaaaaaa');
    $('.ProjectContainer').addClass("displayNone");
  });

  $(document).on('click', '.pjs1', function() {
    $('.ProjectView').addClass("displayNone");
    $('.Pnbr1').removeClass("displayNone"); 
  });
  $(document).on('click', '.pjs2', function() {
    $('.ProjectView').addClass("displayNone");
    $('.Pnbr2').removeClass("displayNone");
  });
  $(document).on('click', '.pjs3', function() {
    $('.ProjectView').addClass("displayNone");
    $('.Pnbr3').removeClass("displayNone");
  });
  $(document).on('click', '.pjs4', function() {
    $('.ProjectView').addClass("displayNone");
    $('.Pnbr4').removeClass("displayNone");
  });

  ////////////////////////////////////////////////////////////////////////////

  $(document).on('click', '.spaceMap', function() {
    $('.asteroName').animate({'bottom': '-=900'});
    $('.spaceMap').remove();
    $('.container').css('background-position','50% 100%');
    setTimeout(function(){
      $('#inner-container').fadeOut('fast', function(){
        $("#inner-container").load("galaxy.html", function(){
          $('#inner-container').fadeIn('fast' );
        });
      });
    },400);
  });

  $(document).on('click', '.spaceMapGalaxy', function() {
    $('.spaceMapGalaxy').remove();
    $('.container').css('background-position','50% 30%');
    $('#inner-container').fadeOut('fast', function(){
      $("#inner-container").load("home.html", function(){
        $('.asteroName').hide();
        $('.asteroName').animate({'bottom': '-900'});
          $('#inner-container').fadeIn('fast' );
          $('.asteroName').fadeIn('fast');
          $('.asteroName').animate({'bottom': '+=900'});
      });
    });
  });

  $(document).on('click', '#earth3', function() {
    $('.hud').fadeOut('slow');
    setTimeout(function(){
      $('#inner-container').fadeOut('fast', function(){
        $("#inner-container").load("planeteC.html", function(){
          $('#inner-container').fadeIn('fast' );
        });
      });
      $(".followersvg").addClass('displayNone');
      $('#inner-container').css({"cursor":"auto"});
      setTimeout(function(){
        $('.avatar').removeClass('displayNone');
      },3300);
    },400);
  });

  $(document).on('click', '#earth2', function() {
    $('.hud').fadeOut('slow');
    setTimeout(function(){
      $('#inner-container').fadeOut('fast', function(){
        $("#inner-container").load("planeteD.html", function(){
          $('#inner-container').fadeIn('fast' );
        });
      });
      $(".followersvg").addClass('displayNone');
      $('#inner-container').css({"cursor":"auto"});
      setTimeout(function(){
        $('.avatar').removeClass('displayNone');
      },3200);
    },400);
  });


  

  ///////////////////////////////////////////////////////////////////////

  $(document).on('click', '.figure', function() {
    // alert("just clicked");
    tl.staggerTo(path, duration, stagger_opts_to, stagger_val);
  });

  $(document).on('mouseenter', '#galaxy2', function() {
    $('#galaxy3').css({"height":"1250px","width":"1250px"});
    $('#earth2').css({"transform":" translateX(-50px) scale(2.5,2.5) "});
  });
  $(document).on('mouseleave', '#galaxy2', function() {
    $('#galaxy3').css({"height":"750px","width":"750px"});
    $('#earth2').css({"transform":"scale(1,1)"});
  });
  $(document).on('mouseenter', '#galaxy3', function() {
    $('#galaxy3').css({"height":"1250px","width":"1250px"});
    $('#earth3').css({"transform":" translateX(-100px) scale(2.5,2.5) "});
  });
  $(document).on('mouseleave', '#galaxy3', function() {
    $('#galaxy3').css({"height":"750px","width":"750px"});
    $('#earth3').css({"transform":"scale(1,1)"});
  });

  /////////////////////////////////////////// Planete C /////////////////////////////

  $(document).on('mouseenter', '#buildingC', function() {
    $('#buildingShadow').attr("xlink:href", "asset/E7A16C90.png");
  });
  $(document).on('mouseleave', '#buildingC', function() {
    $('#buildingShadow').attr("xlink:href", "asset/E7A16C9F.png");
  });

  $(document).on('click', '.buildingPlanetC', function() {
    $('.avatarC').css({"transform":" translateX(-1000px) scaleX(-1)"});
    // $('.avatarC').css({"left":"20%"});
    $('.avatarC').addClass('walk');
    setTimeout(function(){
      $('.avatarC').removeClass('walk');
    },3000);
    setTimeout(function(){
      $('.ProjectContainer').removeClass("displayNone");
      $('.avatarC').css({"transform":" translateX(-1000px) scaleX(1)"});
      // $('.avatarC').css({"left":"20%"});
    },3200);
  });

  $(document).on('click', '#spaceShipC', function() {
    var href = 'index.html';
    $('.avatarC').css({"transform":" translateX(0px) scaleX(1)"});
    $('.avatarC').addClass('walk');
    setTimeout(function(){
      $('.avatarC').removeClass('walk');
      setTimeout(function(){
        $('#inner-container').css({"cursor":"none"});
        $('.hud').fadeIn('slow');
        $('#inner-container').fadeOut('fast', function(){
          $("#inner-container").load("galaxy.html", function(){
            $('#inner-container').fadeIn('fast' );
          });
        });
        $(".followersvg").removeClass('displayNone');

      },500);
    },3000);
  });

  /////////////////////////////////////////// Planete D /////////////////////////////

  $(document).on('mouseenter', '#buildingD' , function() {
    $('#buildingShadow').attr("xlink:href", "asset/A1AFC0E3.png");
  });
  $(document).on('mouseleave', '#buildingD' , function() {
    $('#buildingShadow').attr("xlink:href", "asset/A1AFC0E0.png");
  });

  $(document).on('click', '#buildingD', function() {
    $('.avatarD').css({"transform":" translateX(850px) scale(0.8)"});
    $('.avatarD').addClass('walk');
    setTimeout(function(){
      $('.avatarD').removeClass('walk');
    },2500);
    setTimeout(function(){
      $('.ProjectContainer').removeClass("displayNone");
      $('.avatarD').css({"transform":" translateX(850px) scaleX(-1) scale(0.8)"});
    },2800);
  });

  $(document).on('click', '#spaceShipD', function() {
    var href = 'index.html';
    $('.avatarD').css({"transform":" translateX(0px) scaleX(-1) scale(0.8)"});
    $('.avatarD').addClass('walk');
    setTimeout(function(){
      $('.avatarD').removeClass('walk');
      setTimeout(function(){
        $('#inner-container').css({"cursor":"none"});
        $('.hud').fadeIn('slow');
        $('#inner-container').fadeOut('fast', function(){
          $("#inner-container").load("galaxy.html", function(){
            $('#inner-container').fadeIn('fast' );
          });
        });
        $(".followersvg").removeClass('displayNone');

      },500);
    },2500);
  });


});