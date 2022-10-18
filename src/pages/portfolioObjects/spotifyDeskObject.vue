<template>
  <div class="landingDesign">
     <backdropFade />
     <div class="designHero">
         <div class="designContainerHeader">
            <div class="textDesignContainer">
               Spotify Desktop
               <div class="textDesignSubHeader">
                  2022
                  <br><br>
                  UI / UX
               </div>
            </div>
         </div>
      </div>

      <div class="designBodyContainer">
         <div class="designContainerBox">
            <div class="designContainerBoxPadding">
               <div class="designTextContainerBody">
                  <h2 class="designSubTitle">About The Project</h2>
                  <!-- <h3 class="designUsedSkills">Affiliated Tech: Figma</h3> -->
                  The motivation behind this project was to improve user experience with the current Spotify design. As much of a fan (since 2013) I am of Spotify,
                  there are a lot of issues when it comes to the desktop and web app. Presented below are design changes, along with the reasons why, that incorporate functional
                  benefits to the user. The changes can be categorized to improve two concerns with the current UX: the "destructive" nature of a user's experience and the organization
                  of information.
               </div>
               <div class="designTextContainerBody">
                  The "destructive" nature refers to the inability for a user to be able to look back on their musical journey or simply their past actions. The current Recently Played and Recent Searches
                  mechanisms serve as partial examples and are discussed further below. Organizational changes are simple improvements how information is displayed to the user. In this current iteration,
                  a lot of media produced by Spotify for a user seems "arbitrarily scattered", content can be difficult to find unless specifically searched out by the user. 
                  <!-- <br> <br> -->
                  Both a <a href="https://www.figma.com/file/8qIHquloDrsgra2YFiTX5O/Spotify?node-id=0%3A1" target="_blank">design</a> and 
                  <a href="https://www.figma.com/proto/8qIHquloDrsgra2YFiTX5O/Spotify?node-id=1%3A7&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A7" target="_blank">prototype</a> are available
                  to click through.
               </div>
               <div class="designTextContainerBody">
                  <h2 class="designSubTitle">Overview</h2>
                  In total there are about 10 changes (as of 9/9/22) that resulted in the assets below. Throughout this explanation I will discuss the changes by referring to the
                  numbers in the following visuals. Un-notated visuals are shown throughout the explanation and are available through Figma link just above.
               </div>
               <img src="../../assets/design/spotifyDesktop/1.webp" class="designImg1300">
               <div class="designImageSubText">
                     <p>Assets.</p>
               </div>

               <div class="designSpace"></div>
               <div class="designTextContainerBody">
                  <h2 class="designSubTitle">Home Page</h2>
               </div>
               <img src="../../assets/design/spotifyDesktop/111.webp" class="designImg1300">
               <div class="designImageSubText">
                     <p>Home page. Discussing changes #1-5.</p>
               </div>
               <div class="designSpace"></div>

               <div class="designOffsetImageLeft">
                     <div class="designOffsetContainer">
                        <div class="designOffsetImgContainer">
                           <img src="../../assets/design/spotifyDesktop/21.webp" alt="" class="offsetImg800">
                        </div>
                     </div>
                     <div class="designOffsetContainer">
                        <div class="offsetImgText">
                           <h2 class="designSubTitle">Making Home More Homey</h2>
                           [1]: The first change was to make the home page of Spotify feel like an actual home page. This is accomplished by making the welcome message Spotify currently
                           has more personable and enlarging your profile. Just beneath the name, the graphics present on mobile version of Spotify were brought over to ease cross platform experience
                           and add functionality.
                           <br><br>
                           [2]: Minor changes were done to the side bar to better organize information and reduce the total amount of floating elements. First, the navigation buttons, "back" and
                           "forward", along with the user profile were pulled inside the sidebar. Second, the graphic element next to a page is highlighted along with the text to better
                           indicate to the user what page they are immediately in. Third, a new page named Your Experience is added which will be discussed in [7]. Fourth,
                           "Liked Songs" and "Your Episodes" have been removed from the sidebar. Even though they provided immediate access, they are awkwardly placed as they've no relationship
                           with their surrounding elements. Fifth, the "Create Playlist" option has been changed to a simple "+" sign and is moved to be below the row. 
                        </div>
                     </div>
               </div>
               <div class="designOffsetImageLeft">
                     <div class="designOffsetContainer">
                        <div class="offsetImgText">
                           <!-- <h2 class="designSubTitle">Making Home More Homey</h2> -->
                           [3]: To compensate for the negative space from introducing [1], some eye candy is added to the right hand side of the home page.
                           <br><br>
                           [4]: A Pinned section is added just below the Recently Played tiles and is customizable  by the user [4.1]. A user can pin anything in their library and have it on display
                           in ther home page. Clicking on "Customize" [4.1] inside the prototype will open up a UI for customizing pins.
                           <br><br>
                           [5]: Allow for sections of tiles to be truncated. A lot of what Spotify offers is nested deep into the scroll wheel, so by allowing truncating
                           sections of tiles the user is offered more capability for discovery by reducing work. Clicking on the truncating arrow [4] inside the prototype will offer a visualization for this.
                        </div>
                     </div>
                     <div class="designOffsetContainer">
                        <div class="designOffsetImgContainer">
                           <img src="../../assets/design/spotifyDesktop/3.webp" alt="" class="offsetImg800">
                        </div>
                     </div>
               </div>

               <div class="designSpace"></div>
               <div class="designTextContainerBody">
                  <h2 class="designSubTitle">Search Page</h2>
                  The Search Page [6] is the first change to make the Spotify experience for the user more non-destructive. In the current build of Spotify, Recent Searches only displays the artists, albums, and
                  podcasts that were immediately clicked on after searching a query. The change, visualized below, offers four times the information in a more succint manner. In the redesign below 
                  the user is shown the query that was inputted into the search, the time the search occured, a response (what the user clicked on, if they did), and the data type of that response
                  (song, artist, album, podcast). Everything is organized by time (your most recent search shows at the top) and each section is truncatable. Clicking on Recent Search's "See All"
                  in the prototype expands the search allowing users for a better viewing experience.
               </div>
               <img src="../../assets/design/spotifyDesktop/4.webp" class="designImg1300">
               <div class="designImageSubText">
                     <p>Search Page. Discussing change #6.</p>
               </div>

               <div class="designSpace"></div>
               <div class="designTextContainerBody">
                  <h2 class="designSubTitle">Your Experience Page</h2>
                  The Your Experience Page [7] is a newly introduced page and is the second change to making Spotify more non-destructive while also improving organization.
                  The purpose of this page is to house a user's musical experience.
                  On this page a user can sort, by periods of time, their most listened to media and can get an accurate feel for their past preferences or trends.
                  Below that is an aggregation of all of Spotify's generated playlists curated for a user. The aforementioned "Liked Songs" and "Your Episodes" that were previously appended to the sidebar
                  have been moved here. 
               </div>
               <img src="../../assets/design/spotifyDesktop/5.webp" class="designImg1300">
               <div class="designImageSubText">
                     <p>Your Experience Page. Discussing change #7.</p>
               </div>

               <div class="designSpace"></div>
               <div class="designTextContainerBody">
                  <h2 class="designSubTitle">History (Recently Played)</h2>
                  The History Page [8-10] is segregated into two sub-sections: Recently Played and Recent Actions [8], and is accessed by clicking on the prior named Recently Played graphic located below the
                  welcome message on the Home Page [1]. The new Recently Played sub-section [9] adopts the corresponding archetype present on mobile devices and further improves cross platform experience
                  between desktop and mobile devices. Similar to the new Recent Searches [6], information is organized temporally and each section of time can be truncated. The visual nesting of the media
                  illustrates whether a user was listening to a playlist or whether a user was listening to just one song.
               </div>
               <img src="../../assets/design/spotifyDesktop/6.webp" class="designImg1300">
               <div class="designImageSubText">
                     <p>Your Experience Page. Discussing change #8-9.</p>
               </div>
               
               <div class="designSpace"></div>
               <div class="designTextContainerBody">
                  <h2 class="designSubTitle">History (Recent Actions)</h2>
                  Recent Actions [10] serves as a scribe and records all of a users actions that have resulted in creating, updating, or deleting information. It follows a similar layout to Recent Searches [6] and
                  its accompanied page Recently Played [9]. Currently, if a user accidentally unlikes a song causing it to be removed from their "Liked Songs" playlist, it can be very difficult or even impossible to re-like
                  that song because Spotify offers limited ways to fix this issue. Although illustrated with one example, this problem is ubiquitous and extends to any "folder" such as a playlist or saved episodes
                  from podcasts. Recent Actions trivialize these problems and enable users a means to reliably undo any accident. Hovering over the top most recent action, "You created playlist Melodica ✨", in the
                  prototype will make visible an "undo" graphic on the right hand side near the time.
               </div>
               <img src="../../assets/design/spotifyDesktop/7.webp" class="designImg1300">
               <div class="designImageSubText">
                     <p>Your Experience Page. Discussing change #10.</p>
               </div>
               <div class="designSpace"></div>
               
            </div>
         </div>
      </div>
      <toTop />
  </div>
</template>

<script>
import toTop from '../../components/toTop.vue'
import backdropFade from '../../components/backdropFade.vue'

export default {
   name: 'portfolioObject',
   components: {
      toTop,
      backdropFade,
   },
}
</script>

<style scoped>
   
::selection {
  background: var(--designSelection) !important; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: var(--designSelection) !important; /* Gecko Browsers */
}

</style>