import { useState,useEffect } from "react";
import jQuery,{$} from 'jquery';
import './../cssfiles/register.css';
import {Link} from 'react-router-dom'

function Musicplayer() {

    const [remainSound,setremainSound] = useState([
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
        
  ]);

 useEffect(() => {
    if(remainSound && remainSound.length>0){
        // jQuery(function ($) {
        
        // 'use strict'
        // var supportsAudio = !!document.createElement("audio").canPlayType;
        // if (supportsAudio) {
        //     // initialize plyr
        //     var player = new Plyr("#audio1", {
        //     controls: ["mute", "progress", "prev", "play", "next"],
        //     });
        //     // initialize playlist and controls
        //     var index = 0,
        //     playing = false,
        //     mediaPath = "https://archive.org/download/mythium/",
        //     tracks = remainSound,
        //     buildPlaylist = $.each(tracks, function (key, value) {
        //         var trackNumber = value.id;
        //     }),
        //     trackCount = tracks.length,
        //     npAction = $("#npAction"),
        //     npTitle = $("#npTitle"),
        //     audio = $("#audio1")
        //         .on("play", function () {
        //         playing = true;
        //         npAction.text("Now Playing...");
        //         })
        //         .on("pause", function () {
        //         playing = false;
        //         npAction.text("Paused...");
        //         })
        //         .on("ended", function () {
        //         npAction.text("Paused...");
        //         if (index + 1 < trackCount) {
        //             index++;
        //             loadTrack(index);
        //             audio.pause();
        //         } else {
        //             audio.pause();
        //             index = 0;
        //             loadTrack(index);
        //         }
        //         })
        //         .get(0),
        //     btnPrev = $("#btnPrev").on("click", function () {
        //         if (index - 1 > -1) {
        //         index--;
        //         loadTrack(index);
        //         if (playing) {
        //             audio.play();
        //         }
        //         } else {
        //         audio.pause();
        //         index = 0;
        //         loadTrack(index);
        //         }
        //     }),
        //     btnNext = $("#btnNext").on("click", function () {
        //         if (index + 1 < trackCount) {
        //         index++;
        //         loadTrack(index);
        //         if (playing) {
        //             audio.play();
        //         }
        //         } else {
        //         audio.pause();
        //         index = 0;
        //         loadTrack(index);
        //         }
        //     }),
        //     li = $(
        //         ".track-items li.track-block .track-thumbnail-widget-content"
        //     ).on("click", function () {
        //         var id = parseInt($(this).parents("li.track-block").index());
        //         playTrack(id);
        //     }),
        //     loadTrack = function (id) {
        //         $(".plSel").removeClass("plSel");
        //         $("#plList li:eq(" + id + ")").addClass("plSel");
        //         npTitle.text(tracks[id].music_title);
        //         index = id;
        //         audio.src = tracks[id].music_file;
        //         $(".track-photo-album").attr("src", tracks[id].photo_album);
        //         updateDownload(id, audio.src);
        //     },
        //     updateDownload = function (id, source) {
        //         player.on("loadedmetadata", function () {
        //         $('a[data-plyr="download"]').attr("href", source);
        //         });
        //     },
        //     playTrack = function (id) {
        //         loadTrack(id);
        //         audio.play();
        //     };
        //     loadTrack(index);
        // } else {
        //     // no audio support
        //     $(".column").addClass("hidden");
        //     var noSupport = $("#audio1").text();
        //     $(".container").append('<p class="no-support">' + noSupport + "</p>");
        // }
        // });
    }
  },[remainSound]);

  return (
    <>
      
        <div class="container" style={{ maxWidth:`1220px` }}>
          <section>
            <div class="audio-track-lists-section">
              <div class="row audio-track-row reset-margin">
                <div class="col-xl-6 col-lg-7 audio-track-list reset-padding">
                  <ul class="track-items reset-margin pr-2">
                    <li class="track-block all reggae show">
                      <ul class="single-track-list">
                        <li class="align-self-center">
                          <div class="heart"></div>
                        </li>
                        <li class="align-items-center">
                          <div class="track-thumbnail-box">
                            <img
                              src="http://c2d.comorins.com/storage/bgmusics/odRZWYjxTY2n8YdX4uDGyRRp3mHZuJuml0hEJ9uW.png"
                              class="track-thumbnail"
                            />
                          </div>
                          <div class="track-thumbnail-widget-content">
                            <h3>Earning Happiness</h3>
                            <span class="track-artist">John Brattman</span>
                          </div>
                        </li>
                        <li class="align-self-center">
                          <img
                            src="images/music-bar.png"
                            class="music-bar-icon"
                          />
                          <span class="track-time-stamp">00:47</span>
                        </li>
                        <li class="align-self-center trackaddlastColumn">
                          <a class="trackadd-btn" data-trackname="On the beach">
                            Add
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="track-block all reggae show">
                      <ul class="single-track-list">
                        <li class="align-self-center">
                          <div class="heart"></div>
                        </li>
                        <li class="align-items-center">
                          <div class="track-thumbnail-box">
                            <img
                              src="http://c2d.comorins.com/storage/bgmusics/FjH9TivuINzgix7ipRzOd60OOmVot97lWNdMCNqv.png"
                              class="track-thumbnail"
                            />
                          </div>
                          <div class="track-thumbnail-widget-content">
                            <h3>Wake Up</h3>
                            <span class="track-artist">Scandin</span>
                          </div>
                        </li>
                        <li class="align-self-center">
                          <img
                            src="images/music-bar.png"
                            class="music-bar-icon"
                          />
                          <span class="track-time-stamp">01:46</span>
                        </li>
                        <li class="align-self-center trackaddlastColumn">
                          <a class="trackadd-btn" data-trackname="On the beach">
                            Add
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="track-block all reggae show">
                      <ul class="single-track-list">
                        <li class="align-self-center">
                          <div class="heart"></div>
                        </li>
                        <li class="align-items-center">
                          <div class="track-thumbnail-box">
                            <img
                              src="http://c2d.comorins.com/storage/4gAf3xzULFGifWZ2wcubRbj4QGwA6hz8KoExg7PY.png"
                              class="track-thumbnail"
                            />
                          </div>
                          <div class="track-thumbnail-widget-content">
                            <h3>Beautiful-piano</h3>
                            <span class="track-artist">LesFM</span>
                          </div>
                        </li>
                        <li class="align-self-center">
                          <img
                            src="images/music-bar.png"
                            class="music-bar-icon"
                          />
                          <span class="track-time-stamp">01:45</span>
                        </li>
                        <li class="align-self-center trackaddlastColumn">
                          <a class="trackadd-btn" data-trackname="On the beach">
                            Add
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="track-block all reggae show">
                      <ul class="single-track-list">
                        <li class="align-self-center">
                          <div class="heart"></div>
                        </li>
                        <li class="align-items-center">
                          <div class="track-thumbnail-box">
                            <img
                              src="http://c2d.comorins.com/storage/uPBFlyJOwDEYvRySEVJZIKErd88VRoVDTkANHjSY.png"
                              class="track-thumbnail"
                            />
                          </div>
                          <div class="track-thumbnail-widget-content">
                            <h3>Happy-clappy</h3>
                            <span class="track-artist">John Bartman</span>
                          </div>
                        </li>
                        <li class="align-self-center">
                          <img
                            src="images/music-bar.png"
                            class="music-bar-icon"
                          />
                          <span class="track-time-stamp">00:53</span>
                        </li>
                        <li class="align-self-center trackaddlastColumn">
                          <a class="trackadd-btn" data-trackname="On the beach">
                            Add
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="track-block all reggae show">
                      <ul class="single-track-list">
                        <li class="align-self-center">
                          <div class="heart"></div>
                        </li>
                        <li class="align-items-center">
                          <div class="track-thumbnail-box">
                            <img
                              src="http://c2d.comorins.com/storage/h1X6WOQYSlYy5iX8UiUUA6OiSJHhq0y1SjitNxjx.png"
                              class="track-thumbnail"
                            />
                          </div>
                          <div class="track-thumbnail-widget-content">
                            <h3>Games-music</h3>
                            <span class="track-artist">Miller</span>
                          </div>
                        </li>
                        <li class="align-self-center">
                          <img
                            src="images/music-bar.png"
                            class="music-bar-icon"
                          />
                          <span class="track-time-stamp">00:44</span>
                        </li>
                        <li class="align-self-center trackaddlastColumn">
                          <a class="trackadd-btn" data-trackname="On the beach">
                            Add
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="track-block all reggae show">
                      <ul class="single-track-list">
                        <li class="align-self-center">
                          <div class="heart"></div>
                        </li>
                        <li class="align-items-center">
                          <div class="track-thumbnail-box">
                            <img
                              src="http://c2d.comorins.com/storage/Izpjd2HuWOvcGD4cYLzjZvHDbxN1wjTyn2wAbmcO.png"
                              class="track-thumbnail"
                            />
                          </div>
                          <div class="track-thumbnail-widget-content">
                            <h3>Cinematic music</h3>
                            <span class="track-artist">Wilson</span>
                          </div>
                        </li>
                        <li class="align-self-center">
                          <img
                            src="images/music-bar.png"
                            class="music-bar-icon"
                          />
                          <span class="track-time-stamp">00:44</span>
                        </li>
                        <li class="align-self-center trackaddlastColumn">
                          <a class="trackadd-btn" data-trackname="On the beach">
                            Add
                          </a>
                        </li>
                      </ul>
                    </li>
            <li class="track-block all reggae show">
                      <ul class="single-track-list">
                        <li class="align-self-center">
                          <div class="heart"></div>
                        </li>
                        <li class="align-items-center">
                          <div class="track-thumbnail-box">
                            <img
                              src="http://c2d.comorins.com/storage/yBL3Y8mUKVIqVi5y7ocrMxIObHJesmI1cXqJPVnU.png"
                              class="track-thumbnail"
                            />
                          </div>
                          <div class="track-thumbnail-widget-content">
                            <h3>We wish you marry x-mas</h3>
                            <span class="track-artist">Marine Band</span>
                          </div>
                        </li>
                        <li class="align-self-center">
                          <img
                            src="images/music-bar.png"
                            class="music-bar-icon"
                          />
                          <span class="track-time-stamp">00:52</span>
                        </li>

                        
                        <li class="align-self-center trackaddlastColumn">
                          <a class="trackadd-btn" data-trackname="On the beach">
                            Add
                          </a>
                        </li>
                      </ul>
            </li>
                    <li class="track-block all reggae show">
                      <ul class="single-track-list">
                        <li class="align-self-center">
                          <div class="heart"></div>
                        </li>
                        <li class="align-items-center">
                          <div class="track-thumbnail-box">
                            <img
                              src="http://c2d.comorins.com/storage/XEvbuJz0hW59Xb5EdiJBfCy5upJpJsMZcpvBn2ta.png"
                              class="track-thumbnail"
                            />
                          </div>
                          <div class="track-thumbnail-widget-content">
                            <h3>HeartBreaking</h3>
                            <span class="track-artist">Kevin Maclead</span>
                          </div>
                        </li>
                        <li class="align-self-center">
                          <img
                            src="images/music-bar.png"
                            class="music-bar-icon"
                          />
                          <span class="track-time-stamp">01:36</span>
                        </li>
                        <li class="align-self-center trackaddlastColumn">
                          <a class="trackadd-btn" data-trackname="On the beach">
                            Add
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="col-xl-6 col-lg-5 audio-track-music-player">
                  <div class="ad-track-child-wrapper">
                    <div id="mainwrap">
                      <div id="audiowrap">
                        <div id="audio0">
                          <audio id="audio1" preload controls>
                            Your browser does not support HTML5 Audio!
                          </audio>
                        </div>
                        <div id="tracks"></div>
                      </div>
                    </div>
                    <img
                      src="/music/images/trackthumbnai-thumbnail.png"
                      class="track-photo-album img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Link to="/home"><button className="btn btn-danger btnmargin mt-5">Back to home page</button></Link>
      
    </>
  );
}

export default Musicplayer;
