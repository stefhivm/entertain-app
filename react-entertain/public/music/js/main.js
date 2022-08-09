    /******* Sound Engg filter javaScript Starts ********/
    
    jQuery(function ($) {
      'use strict'
      var remainSound = [
        {
          id: 36,
          category: "Vlog",
          music_title: "Earning Happiness",
          artist_name: "John Brattman",
          music_duration: "00:47",
          music_file:
            "http://c2d.comorins.com/storage/WylefP2wSTuUTWVvB2X296Q1IMO5Tg2FKF6KMowf.mp3",
          photo_album:
            "http://c2d.comorins.com/storage/bgmusics/odRZWYjxTY2n8YdX4uDGyRRp3mHZuJuml0hEJ9uW.png",
          expand: false,
        },
        {
          id: 35,
          category: "Relax",
          music_title: "Wake Up",
          artist_name: "Scandin",
          music_duration: "01:46",
          music_file:
            "http://c2d.comorins.com/storage/yUQ2W30wyGA4Qa2izqSm88uKfkZRfAWX7asFx6Is.mp3",
          photo_album:
            "http://c2d.comorins.com/storage/bgmusics/FjH9TivuINzgix7ipRzOd60OOmVot97lWNdMCNqv.png",
          expand: false,
        },
        {
          id: 34,
          category: "Motivational",
          music_title: "Beautiful-piano",
          artist_name: "LesFM",
          music_duration: "01:45",
          music_file:
            "http://c2d.comorins.com/storage/5unGu2bSrjZEiQZQsBiOv54quo9mqqlTGgtnw9Nv.mp3",
          photo_album:
            "http://c2d.comorins.com/storage/4gAf3xzULFGifWZ2wcubRbj4QGwA6hz8KoExg7PY.png",
          expand: false,
        },
        {
          id: 33,
          category: "Happy",
          music_title: "Happy-clappy",
          artist_name: "John Bartman",
          music_duration: "00:53",
          music_file:
            "http://c2d.comorins.com/storage/EXpwxAKPdxXmxrZ06oYyDksruURxradh3zSKC2tU.mp3",
          photo_album:
            "http://c2d.comorins.com/storage/uPBFlyJOwDEYvRySEVJZIKErd88VRoVDTkANHjSY.png",
          expand: false,
        },
        {
          id: 32,
          category: "Games",
          music_title: "Games-music",
          artist_name: "Miller",
          music_duration: "00:44",
          music_file:
            "http://c2d.comorins.com/storage/DvdmINqh4gAlXlAq4AgTLhTTPZzXZnVf0TSXzzI8.mp3",
          photo_album:
            "http://c2d.comorins.com/storage/h1X6WOQYSlYy5iX8UiUUA6OiSJHhq0y1SjitNxjx.png",
          expand: false,
        },
        {
          id: 31,
          category: "Cinematic",
          music_title: "Cinematic music",
          artist_name: "Wilson",
          music_duration: "00:44",
          music_file:
            "http://c2d.comorins.com/storage/ywkXla8yctACu6bIcnoPWee9hq9u6p5DlMtwMjie.mp3",
          photo_album:
            "http://c2d.comorins.com/storage/Izpjd2HuWOvcGD4cYLzjZvHDbxN1wjTyn2wAbmcO.png",
          expand: false,
        },
        {
          id: 30,
          category: "Christmas",
          music_title: "We wish you marry x-mas",
          artist_name: "Marine Band",
          music_duration: "00:52",
          music_file:
            "http://c2d.comorins.com/storage/5yKNmSo4Ogklj5zLN2v8cBgYAMVg5tIPjiYrEUt5.mp3",
          photo_album:
            "http://c2d.comorins.com/storage/yBL3Y8mUKVIqVi5y7ocrMxIObHJesmI1cXqJPVnU.png",
          expand: false,
        },
        {
          id: 29,
          category: "Calm",
          music_title: "HeartBreaking",
          artist_name: "Kevin Maclead",
          music_duration: "01:36",
          music_file:
            "http://c2d.comorins.com/storage/g7Z5JljpHivqub916z0Jjrf1ygVDH4Lu7rGgMpVI.mp3",
          photo_album:
            "http://c2d.comorins.com/storage/XEvbuJz0hW59Xb5EdiJBfCy5upJpJsMZcpvBn2ta.png",
          expand: false,
        },
  ];

      var supportsAudio = !!document.createElement("audio").canPlayType;
      if (supportsAudio) {
        // initialize plyr
        var player = new Plyr("#audio1", {
          controls: ["mute", "progress", "prev", "play", "next"],
        });
        // initialize playlist and controls
        var index = 0,
          playing = false,
          mediaPath = "https://archive.org/download/mythium/",
          tracks = remainSound,
          buildPlaylist = $.each(tracks, function (key, value) {
            var trackNumber = value.id;
          }),
          trackCount = tracks.length,
          npAction = $("#npAction"),
          npTitle = $("#npTitle"),
          audio = $("#audio1")
            .on("play", function () {
              playing = true;
              npAction.text("Now Playing...");
            })
            .on("pause", function () {
              playing = false;
              npAction.text("Paused...");
            })
            .on("ended", function () {
              npAction.text("Paused...");
              if (index + 1 < trackCount) {
                index++;
                loadTrack(index);
                audio.pause();
              } else {
                audio.pause();
                index = 0;
                loadTrack(index);
              }
            })
            .get(0),
          btnPrev = $("#btnPrev").on("click", function () {
            if (index - 1 > -1) {
              index--;
              loadTrack(index);
              if (playing) {
                audio.play();
              }
            } else {
              audio.pause();
              index = 0;
              loadTrack(index);
            }
          }),
          btnNext = $("#btnNext").on("click", function () {
            if (index + 1 < trackCount) {
              index++;
              loadTrack(index);
              if (playing) {
                audio.play();
              }
            } else {
              audio.pause();
              index = 0;
              loadTrack(index);
            }
          }),
          li = $(
            ".track-items li.track-block .track-thumbnail-widget-content"
          ).on("click", function () {
            var id = parseInt($(this).parents("li.track-block").index());
            playTrack(id);
          }),
          loadTrack = function (id) {
            $(".plSel").removeClass("plSel");
            $("#plList li:eq(" + id + ")").addClass("plSel");
            npTitle.text(tracks[id].music_title);
            index = id;
            audio.src = tracks[id].music_file;
            $(".track-photo-album").attr("src", tracks[id].photo_album);
            updateDownload(id, audio.src);
          },
          updateDownload = function (id, source) {
            player.on("loadedmetadata", function () {
              $('a[data-plyr="download"]').attr("href", source);
            });
          },
          playTrack = function (id) {
            loadTrack(id);
            audio.play();
          };
        loadTrack(index);
      } else {
        // no audio support
        $(".column").addClass("hidden");
        var noSupport = $("#audio1").text();
        $(".container").append('<p class="no-support">' + noSupport + "</p>");
      }
    });


    trackSelection("all");
    function trackSelection(c) {
      
        var x, i;
        x = document.getElementsByClassName("track-block");
        if (c == "all") c = "";
        
        for (i = 0; i < x.length; i++) {
            trackRemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) trackAddClass(x[i], "show");
        }
      
    }

    function trackAddClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
          element.className += " " + arr2[i];
        }
      }
    }

    function trackRemoveClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
      }
      element.className = arr1.join(" ");
    }
    
    $('#mytrackContainer .track-inline-item a').on('click', function(event) {
        $("#mytrackContainer .track-inline-item").removeClass("current-tab");
        $(this).parent().addClass("current-tab");
        event.preventDefault();
    });

    $(function(){
        $(".heart").on("click", function() {
          $(this).toggleClass("is-active");
        });
        $('.bt-title [data-toggle="tooltip"]').tooltip({
          template: '<div class="tooltip audio-tool-tip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
        });
        $('.widget .socialmedia_network li [data-toggle="tooltip"]').tooltip({
          template: '<div class="tooltip socialmedia-tool-tip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
        });
    });
    
    /******* Sound Engg filter javaScript End ********/

    
    /****** Careers page filter javascript Starts ******/
    filterSelection("all");
    function filterSelection(c) {

      var x, i;
      x = document.getElementsByClassName("card-block");
      if (c == "all") c = "";
      
      for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
      }
    }

    function w3AddClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
          element.className += " " + arr2[i];
        }
      }
    }

    function w3RemoveClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
      }
      element.className = arr1.join(" ");
    }
    
    $('#myBtnContainer .list-inline-item a').on('click', function(event) {
        $("#myBtnContainer .list-inline-item").removeClass("active");
        $(this).parent().addClass("active");
        event.preventDefault();
    });
    /****** Careers page filter javascript Ends ******/

$(document).ready(function() {

    /**** Home page scripts Starts ****/
    


    
    
    /**** Home page scripts Ends ****/

    /**** Service page scripts Starts ****/
    function fixtitleHeight(){
        var Titleheight = 0;
        var Bodyheight = 0;
        jQuery('.service .service-title').height("100%");
        jQuery('.service-body .service-body--lists').height("100%");
        
        jQuery('.service .service-title').each(function($){
                                if(jQuery(this).height() > Titleheight){
                                    Titleheight = jQuery(this).height();
                                }
        });
        jQuery('.service-body .service-body--lists').each(function($){
                                if(jQuery(this).height() > Bodyheight){
                                    Bodyheight = jQuery(this).height();
                                }
        });
        
        jQuery('.service .service-title').height(Titleheight);
        jQuery('.service-body .service-body--lists').height(Bodyheight);
    }
    fixtitleHeight(); /**** Service page scripts Ends ****/

    /***** SoundEngg Page scripts starts 
    $("#tile-1 .track-tabs a").click(function() {
        var position = $(this).parent().position();
        var width = $(this).parent().width();
        var height = $(this).parent().height();
          $("#tile-1 .slider").css({"left":+ position.left,"width":width, "height":height});
      });
      var actWidth = $("#tile-1 .track-tabs").find(".current-tab").width();
      var actHeight = $("#tile-1 .track-tabs").find(".current-tab").height();
      var actPosition = $("#tile-1 .track-tabs .current-tab").position();
      $("#tile-1 .slider").css({"left":+ actPosition.left,"width": actWidth,"height": actHeight
    });*****/

    
    
  
});

/****** How we work Scroll Active class jquery Starts *******/



/****** How we work Scroll Active class jquery Ends *******/

/**** Home office & Smallbusiness scripts Starts ****/
function resizeBannerOverlays(){
  $('.ob-icon-row-1').each(function(){
      $w = $('.ob-icon-row-1 .ob-icon-innerrow').width();
      $(this).css( "maxWidth", ( $w ) + "px" );
      $(this).width("100%");
  });
  $('.ob-icon-row-2').each(function(){
      $w = $('.ob-icon-row-2 .ob-icon-innerrow').width();
      $( this ).css( "maxWidth", ( $w ) + "px" );
      $(this).width("100%");
  });
  $('.ob-icon-row-3').each(function(){
      $w = $('.ob-icon-row-3 .ob-icon-innerrow').width();
      $(this).width($w);
  });
}
$(document).ready(function() {
  if ($(window).width() > 1199) {
    resizeBannerOverlays();
  }
});
$(window).resize(function(){ 
  if ($(window).width() > 1199) {
    resizeBannerOverlays();
  }
})

$(document).on('click', '.banner-left-col a[href^=\\#]', function () {
    $('html, body').animate({ scrollTop:  $('section[data-target="'+this.hash.slice(1)+'"]').offset().top }, 1000 );
    return false;
}); /**** Home office & Smallbusiness scripts Ends ****/

/**** Sound Engg page scripts Starts ****/
$(document).ready(function() {
  let inputTagValue = $('input.tag-trap').val();
  let trackLists  = [];
  
  $(".trackadd-btn").on("click", function() {
    if(inputTagValue != null ){
      trackLists = jQuery.makeArray( $('input.tag-trap').val() );
    }
    
    trackLists.push( $(this).attr("data-trackname") );
    track = trackLists.toString();
    $("input[data-role=tagsinput]").tagsinput('add', track );
  });

  $('.per-buttonIn-Voice .voice-selection-arrow').on('click', function(event) {
    $(".per-buttonIn-finalVoice input:text").val($('input.tag-trap').val());
    $("input[data-role=tagsinput]").tagsinput('removeAll');
    event.preventDefault();
  });

/**** Make a wish page's scripts starts ****/

  let make_a_wishinputTagValue = $('input.make_a_wishtag-trap').val();
  let make_a_wishtrackLists  = [];

  $(".stage li a").on("click", function() {
    if(make_a_wishinputTagValue != null ){
      make_a_wishtrackLists = jQuery.makeArray( $('input.make_a_wishtag-trap').val() );
    }
    
    make_a_wishtrackLists.push( $(this).attr("data-wishname") );
    wish = make_a_wishtrackLists.toString();
    $("input[data-role=tagsinput]").tagsinput('add', wish );
    
    $('html, body').animate({ scrollTop:  $('div[data-target="myfillContainer"]').offset().top }, 250 );
    event.preventDefault();
  });

  $(".stage li").on("click", function(){
    $(this).hide();
  });
  
  $(".dragdrop-wrapper .bootstrap-tagsinput").on("click",".tag [data-role]", function(){
    var wishLists = $("[data-wishname]");
    var wishListsarr = [];
    for(let i=0; i<wishLists.length; i++){
      data = wishLists[i].innerText
      wishListsarr.push(data);
    }
    wishType=$(this).parent();
    wishName = wishType[0].innerText;
    
    var indexWishname = wishListsarr.indexOf(wishName);
    var indexWishnameincrement = indexWishname+1;   
    $(".dragdrop-text .stage li:nth-child("+ indexWishnameincrement +")").show();
  });

/**** Make a wish page's scripts end ****/

  $( ".page-home .rectangle-151").on('click', function(event) {
    alert('151');
    var offset = $(this).offset();
    var relativeX = (event.pageX - offset.left);
    var relativeY = (event.pageY - offset.top);
    var searchBar = $(".page-home .rectangle-151 .searchhoverPopup");
    var siblingsBar = $(".page-home .rectangle-152 .searchhoverPopup");
    
    siblingsBar.css( {
      display:"none"
    });
    $(this).css( {
      cursor:"inherit"
    });
    $(".page-home .rectangle-152").css( {
      cursor: "url(images/home-page-search.png),auto",
    });
    if($('.page-home .rectangle-151 .searchhoverPopup').css('display') == 'none'){
        searchBar.css( {
          display:"block",
          position:"absolute",
          "z-index": 2,
          "opacity": 1,
          transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
          top:relativeY, 
          left: relativeX
    }).show('explode', { pieces: 150 }, 700);
    return false;
      
    }
  });
    
  
  $(".page-home .rectangle-152").click(function(e) {
  
    alert('152');
    var offset = $(this).offset();
    var relativeX = (event.pageX - offset.left);
    var relativeY = (event.pageY - offset.top);
    var searchBar = $(".page-home .rectangle-152 .searchhoverPopup");
    var siblingsBar = $(".page-home .rectangle-151 .searchhoverPopup");
    
    siblingsBar.css( {
      display:"none"
    });
    $(this).css( {
      cursor:"inherit"
    });
    $(".page-home .rectangle-151").css( {
      cursor: "url(images/home-page-search.png),auto",
    });
    if($('.page-home .rectangle-152 .searchhoverPopup').css('display') == 'none' ){
      
      searchBar.css( {
        display:"block",
        position:"absolute",
        "z-index": 2,
        "opacity": 1,
        transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        top:relativeY, 
        left: relativeX
      }).show('explode', { pieces: 150 }, 700)
     return false;
    }
    
    e.stopPropagation();
  });
  
  $(".page-home img.plushover-icon").click(function(e) {
    e.stopPropagation();
  });
  
  
  $(".page-home").click(function(e) {
    var searchBar = $(".page-home .rectangle-152 .searchhoverPopup");
    searchBar.css( {
      display:"none"
    });
  });
  
  

  /*****  Landing page banner slider round robin fashion******/
  $('.carousel-fade-1').carousel({
    interval: 6000
  });
  $('.carousel-fade-2').carousel({
    interval: 6000
  });
  
  /******  Go to top scroll options ******/
  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
    $('#scrollBtn').fadeIn();
    } else {
    $('#scrollBtn').fadeOut();
    }
  });
    
  $('#scrollBtn').click(function() {
      $("html, body").animate({
      scrollTop: 0
      }, 1000);
      return false;
  });


  
  
});

function handleClick(cb) {
  var condition = cb.checked;
  if(condition == true){
    jQuery(".btn-audio-step-validate").removeAttr("disabled");
  }
  else{
    jQuery(".btn-audio-step-validate").prop('disabled', true);
  }
}

/**** Sound Engg page scripts Starts ****/
