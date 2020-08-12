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

    if (keycode == '99' || keycode == '67' ){
       $('#pilotCardContainer').toggleClass("displayNone");
    } else if (keycode == '27'){
       $('#pilotCardContainer').addClass("displayNone");
    } else if (keycode == '118' || keycode == '86'){
      $link = $('.linkedin');
      $link[0].click()
    }else if (keycode == '98' || keycode == '66'){
      $link = $('.contacter');
      $link[0].click()
    }
  });

  $(document).on('click', '.retour', function() {
    $('.ProjectContainer').addClass("displayNone");
  });

  $(document).on('mouseenter', '.pjs', function() {
    $(this).find('.projectImg').addClass('projetImgClick');
  });
  $(document).on('mouseleave', '.pjs', function() {
    $(this).find('.projectImg').removeClass('projetImgClick');
  });

  function pjsAnim() {

    var pjsClass = ' base'; 
    var pnbrClass = ' base ';

    $(document).on('click', '.pjs', function() {

      var thisPjs = this.className;

      if (thisPjs == 'pjs1 pjs'){
          pjsClass = '.pjs1';
          pnbrClass = '.Pnbr1';
      } else if (thisPjs == 'pjs2 pjs'){
          pjsClass = '.pjs2';
          pnbrClass = '.Pnbr2';
      } else if (thisPjs == 'pjs3 pjs'){
          pjsClass = '.pjs3';
          pnbrClass = '.Pnbr3';
      } else if (thisPjs == 'pjs4 pjs'){
          pjsClass = '.pjs4';
          pnbrClass = '.Pnbr4';
      };

      $('.pjs').css({'width':'85%','margin-left':'7.5%'});
      $(pjsClass).css({'width':'95%','margin-left':'2.5%'});

      $('.projectImg').removeClass('projetImgClick2');
      $( pjsClass + '.projectImg').addClass('projetImgClick1');
      setTimeout(function(){
        $(pjsClass + ' .projectImg').removeClass('projetImgClick1');
        $(pjsClass + ' .projectImg').addClass('projetImgClick2');
      },290);

      $('.ProjectView').addClass("displayNone");
      $(pnbrClass).removeClass("displayNone"); 
      $(pnbrClass +' .pvtImg').css({'transform':'translateX(-1700px)'});
      setTimeout(function(){
        $(pnbrClass + ' .pvtImg').css({'transform':'translateX(0px)'});
      },1);

    });

  }
  pjsAnim();

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
        $('#shipLeg').css({'transform':'translateY(0px)'});
      },1000);

      setTimeout(function(){
        $('.avatar').removeClass('displayNone');
        $('#avatarSpaceship').addClass('displayNone');
      },3350);

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
        $('#shipLeg').css({'transform':'translateY(0px)'});
      },1000);
      setTimeout(function(){
        $('.avatar').removeClass('displayNone');
        $('#avatarSpaceship').addClass('displayNone');

      },3350);

    },400);
  });


  

  ///////////////////////////////////////////////////////////////////////

  function myFunction(x) {
    if (x.matches) { // If media query matches

      $(document).on('click', '.retour', function() {
        $('.hud').fadeIn('slow');
        $('#inner-container').fadeOut('fast', function(){
          $("#inner-container").load("galaxy.html", function(){
            $('#inner-container').fadeIn('fast' );
          });
        });
      });



    } else {
      
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
    }
  }
  var x = window.matchMedia("(max-width: 1000px)")
  myFunction(x) 
  x.addListener(myFunction) 

  $(document).on('click', '#pilotCard', function() {
    $('#pilotCardContainer').toggleClass("displayNone");
  });
  $(document).on('click', '#pilotCardContainer', function() {
    $('#pilotCardContainer').toggleClass("displayNone");
  });

  /////////////////////////////////////////// Planete C /////////////////////////////

  $(document).on('mouseenter', '#buildingC', function() {
    $('#buildingShadow').attr("xlink:href", "asset/E7A16C90.png");
  });
  $(document).on('mouseleave', '#buildingC', function() {
    $('#buildingShadow').attr("xlink:href", "asset/E7A16C9F.png");
  });

  $(document).on('click', '#buildingC', function() {
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

    var positionAvatar = $('.avatarC').css("transform");

    if ( positionAvatar == "matrix(-1, 0, 0, 1, 0, 0)"){
      setTimeout(function(){
        $('#inner-container').css({"cursor":"none"});
        $('.hud').fadeIn('slow');
        $('#inner-container').fadeOut('fast', function(){
          $("#inner-container").load("galaxy.html", function(){
            $('#inner-container').fadeIn('fast' );
          });
        });
        $(".followersvg").removeClass('displayNone');
      },10);
    } else {

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
    }
  });

  $(document).on('click', '.pvtImg', function() {
    $('.pvtImg').toggleClass('pvtImgAll');
    $('.pvtImg img').toggleClass('pvtImgAllImg');
    $('body').toggleClass('noJquery');
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
    
    var positionAvatar = $('.avatarD').css("transform");

    if ( positionAvatar == "matrix(0.8, 0, 0, 0.8, 0, 0)"){
      setTimeout(function(){
        $('#inner-container').css({"cursor":"none"});
        $('.hud').fadeIn('slow');
        $('#inner-container').fadeOut('fast', function(){
          $("#inner-container").load("galaxy.html", function(){
            $('#inner-container').fadeIn('fast' );
          });
        });
        $(".followersvg").removeClass('displayNone');
      },10);

    } else {

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

    };
  });


});