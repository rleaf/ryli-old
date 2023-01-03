<template>
  <div class="landingDesign">
     <backdropFade />
     <div class="designHero">
         <div class="designContainerHeader">
            <div class="textDesignContainer">
               Steam
               <div class="textDesignSubHeader">
                  2022
                  <br><br>
                  Case Study
               </div>
            </div>
         </div>
      </div>

      <div class="designBodyContainer">
         <div class="designContainerBox">
            <div class="designContainerBoxPadding">
               <nav>
                  <ul class="casenav">
                     <li><a class="anav" href="#introduction">Introduction</a></li>
                     <li><a class="anav" href="#problem">Problem</a></li>
                     <li><a class="anav" href="#goal">Goals</a></li>
                     <li><a class="anav" href="#research">Research</a></li>
                     <li><a class="anav" href="#earlyideation">Early Ideation</a></li>
                     <ul>
                        <li><a class="anav" href="#navigation">Navigation</a></li>
                        <li><a class="anav" href="#store">Store</a></li>
                        <li><a class="anav" href="#library">Library</a></li>
                     </ul>
                     <li><a class="anav" href="#finaldesigns">Final Designs</a></li>
                     <ul>
                        <li><a class="anav" href="#overview">An Overview</a></li>
                        <li><a class="anav" href="#closerlook">A Closer Look</a></li>
                     </ul>
                     <li><a class="anav" href="#conclusion">Conclusion</a></li>
                  </ul>
               </nav>
               <div class="caseStudyBody">
                  <div class="caseMeta">
                     <div>
                        <p class="metaKey">timeline</p>
                        <p class="metaValue">Oct - Nov 2022</p>
                        <p class="metaValue">(2 months)</p>
                     </div>
                     <div>
                        <p class="metaKey">deliverable</p>
                        <p class="metaValue">Desktop Application</p>
                     </div>
                     <div>
                        <p class="metaKey">role</p>
                        <p class="metaValue">UX Design</p>
                     </div>
                     <div>
                        <p class="metaKey">tools used</p>
                        <p class="metaValue">Figma</p>
                     </div>
                     <div class="metaLinks">
                        <p class="metaKey">links</p>
                        <a href="https://www.figma.com/file/IhXLtsI57GP0gw1iMC4snL/Steam?node-id=0%3A1&t=Oen9lS4G9X8Klnyi-1" target="_blank">Figma Project</a>
                        <br>
                        <a href="https://www.figma.com/proto/IhXLtsI57GP0gw1iMC4snL/Steam?page-id=0%3A1&node-id=11%3A5&viewport=2309%2C-2416%2C1.28&scaling=min-zoom&starting-point-node-id=11%3A5&show-proto-sidebar=1" target="_blank">Figma Prototype</a>
                        <br>
                        <a href="https://www.figma.com/file/V7X0RJJZQ2zZwF4b4QCPB2/Steam?node-id=0%3A1&t=XgTeE8vkVg5GRuX7-1" target="_blank">FigJam File</a>
                     </div>
                  </div>

                  <section id="introduction">
                     <div class="sectionWrapper">
                        <h2 class="designSubTitle">Introduction</h2>
                        <p class="bodyText">
                           Steam is a video game distribution service and storefront developed by <a href="https://www.valvesoftware.com/en/" target="_blank">Valve</a> that, in 2021, has been used by over
                           an estimated <a href="https://store.steampowered.com/news/group/4145017/view/3133946090937137590" target="_blank">132 million people</a>. Embedded with an abundance of features
                           such as social networking, game streaming, digital rights management, an API for game developers, and much more, Steam is viewed by many as the default platform for gaming.

                        </p>
                     </div>
                  </section>
                  
                  <section id="problem">
                     <div class="sectionWrapper">
                        <h2 class="designSubTitle">Problem</h2>
                        <p class="bodyText">
                           Steam is notoriously dense with information. Although this can be a great benefit, when paired with a cluttered UI the usability quickly deteriorates detrimenting UX. With the amount
                           of features provided on Steam, basic navigation through the desktop application can be confusing at times and this is particularly evident within the Steam store.
                           Because of the nature of the Steam store, which also acts as a stand-alone web app, information presented to users who use the desktop application can be redundant at times.
                        </p>
                        <img class="caseImage" src="../../assets/case/steam/steampic.webp" alt="">
                        <p class="bodyText">
                           In the above example the "Discovery Queue" is accessable through three different navigations on the same page. Another, arguably more glaring, issue is that there are three navigations.
                        </p>
                     </div>
                  </section>

                  <section id="goal">
                     <div class="sectionWrapper">
                        <h2 class="designSubTitle">Goals</h2>
                        <p class="bodyText">
                           Fundamentally, the Steam desktop application should feel like a desktop application and have its own autonomy. This can be accomplished by reducing reliance of the web app's navigation and providing
                           features local to the desktop variation.
                           The goals can be broadly summed up in three main points:
                           <ul>
                              <li>Reduce overall clutter such as issues with redundancy</li>
                              <li>Promote cohesion between desktop application and Steam store by homogenizing navigation</li>
                              <li>Improve organization and navigation throughout the desktop application</li>
                           </ul>
                        </p>
                     </div>
                  </section>

                  <section id="research">
                     <div class="sectionWrapper">
                        <h2 class="designSubTitle">Research</h2>
                        <p class="botyText">
                           Looking at a handful of Steam's popular competitors, I focused on two: the Epic Games Launcher and GOG because they also have web stores accessible through
                           the internet and desktop counterparts that act as a housing for the web store. Below are a handful of design observations I found.
                           <ul>
                              <li>
                                 Both desktop navigation systems for the Epic Games Launcher and GOG use column over horizontal navigation. This helps differentiate the two primary means of navigation
                                 when looking at the web store from the desktop application. Below, I use <span style="background-color: #79ef708e;">green</span> to
                                 indicate the desktop application's navigation, and <span style="background-color: #1df0e975;">cyan</span> to indicate the web store's navigation.
                              </li>
                              <Flicking class="flickingmargins" :options="{ align: 'prev', circular: true }" :plugins="plugins">
                                 <div class="panel">
                                    <img class="carouselImage" src="../../assets/case/steam/epicNav.webp" alt="">
                                    <p>Epic Games Launcher</p>
                                 </div>
                                 <div class="panel">
                                    <img class="carouselImage" src="../../assets/case/steam/gogNav.webp" alt="">
                                    <p>
                                       GOG
                                       <br>
                                       <span style="font-weight: normal;">
                                          GOG fully excludes their web store navigation on their desktop application making the UI simpler. Instead, at the top, there is a smaller navigation
                                          that pertains to what section you're currently in.
                                       </span> 
                                    </p>
                                 </div>
                                 <div class="panel">
                                    <img class="carouselImage" src="../../assets/case/steam/steamNav.webp" alt="">
                                    <p>
                                       Steam
                                       <br>
                                       <span style="font-weight: normal;">
                                          Both navigations are layered on top of one another.
                                       </span> 
                                    </p>
                                 </div>
                                 <span slot="viewport" class="flicking-arrow-prev"></span>
                                 <span slot="viewport" class="flicking-arrow-next"></span>
                              </Flicking>
                              <li>
                                 There are no immediately noticable issues, such as those with Steam's redundancy between its desktop navigation and web store navigation, in both the Epic Games Launcher and GOG.
                              </li>
                              <li>
                                 As mentioned previously, Steam is extraordinarily dense with information - much more so than both the Epic Games Launcher and GOG. Because of this, the Epic Games Launcher and GOG
                                 have simpler user flows. An example of this is with Steam's "Community" section. Although Epic Games and GOG both have community forums online,
                                 neither are accessible through their desktop counterparts.
                              </li>
                           </ul>
                        </p>
                     </div>
                  </section>

                  <section id="earlyideation" style="margin-bottom: 200px;">
                     <div class="sectionWrapper">
                        <h2 class="designSubTitle">Early Ideation</h2>
                        <p class="bodyText">
                           Because of the massive amount of information and pages in Steam, the goal during the concept phase was to restrict wireframing to the main topics to not get quickly overwhelmed.
                           These main topics focused primarily on the navigation, the store, and the library.
                        </p>
                        <img src="../../assets/case/steam/early0.webp" alt="" class="caseImage">
                        <span style="font-size: 15px; font-style: italic; display: block; text-align: center;">*All illustrations here are available to see directly in the
                           <a class="metaLinks2" href="https://www.figma.com/file/V7X0RJJZQ2zZwF4b4QCPB2/Steam?node-id=0%3A1&t=XgTeE8vkVg5GRuX7-1" target="_blank">FigJam</a> file.
                        </span>
                        <section id="navigation">
                           <div class="sectionWrapper">
                              <h4 class="caseSubTitle2">Navigation</h4>
                              <p class="bodyText" style="margin-top: 3rem;">
                                 As a point of origin, Steam's current UI looks something like this:
                              </p>
                              <img class="caseImage" src="../../assets/case/steam/early1.webp" alt="">
                              <p>
                                 I started by seeing what Steam would look like with a column navigation. An advantage of column navigation over the current horizontal "top bar" navigation is you can easily display more
                                 information to a user without things becoming too frustrating. The <span style="background-color: #b4f179;">free floating elements</span> are also moved over to the left hand side along with the new navigation.
                              </p>
                              <Flicking class="flickingmargins" :options="{ align: 'prev', circular: true }" :plugins="plugins3">
                                 <div class="panel">
                                    <img class="carouselImage" src="../../assets/case/steam/early2.webp" alt="">
                                    <p style="font-weight: normal">
                                       The main sections: Store, Library, Community, and Profile are now moved from the top to where the
                                       <span style="background-color: #f4bef0;">pink highlights are</span>.
                                    </p>   
                                 </div>
                                 <div class="panel">
                                    <img class="carouselImage" src="../../assets/case/steam/early3.webp" alt="">
                                    <p style="font-weight: normal;">
                                       Each section is <span style="background-color: #f4c997;">sub-navigable</span> allowing the user to access everything from one place.
                                    </p>
                                 </div>
                                 <span slot="viewport" class="flicking-arrow-prev"></span>
                                 <span slot="viewport" class="flicking-arrow-next"></span>
                              </Flicking>
                              <p class="bodyText" style="margin-top: 3rem;">
                                 An initial challenge for the new navigation was deciding which direction to go to present the information of 
                                 <span style="background-color: #f4c997;">sub-navigable sections</span>. With concept 1 shown below,
                                 the area used for navigating wouldn't broach into the <span style="background-color: #a8f4ef;">main window</span>, however could be difficult to use
                                 because the information would be disconnected making it unintuitive.
                              </p>
                              <img class="caseImage" src="../../assets/case/steam/early4.webp" alt="">
                              <p class="bodyText">
                                 As a comprimise I went with concept 2 however the panels will only be actionable on hovering. This way information from <span style="background-color: #f4c997;">sub-navigable sections</span> are
                                 less concrete and don't detract from the <span style="background-color: #a8f4ef;">main window</span> as much.
                              </p>
                              <Flicking class="flickingmargins" :options="{ align: 'prev', circular: true }" :plugins="plugins2">
                                 <div class="panel">
                                    <img class="carouselImage" src="../../assets/case/steam/early5.webp" alt="">
                                    <p style="font-weight: normal">
                                       How it would look when hovering over the <span style="background-color: #f4bef0;">Library</span>. The <span style="background-color: #f4eb6e;">information</span> pertaining to that section would appear to the right. 
                                    </p>   
                                 </div>
                                 <div class="panel">
                                    <img class="carouselImage" src="../../assets/case/steam/early6.webp" alt="">
                                    <p style="font-weight: normal;">
                                       Another benefit to this approach is that the hoverable tiles can be of any shape, allowing them to conform to any information they could show.
                                       An example displayed above in <span style="background-color: #bdbdbd;">gray</span>.
                                    </p>
                                 </div>
                                 <span slot="viewport" class="flicking-arrow-prev"></span>
                                 <span slot="viewport" class="flicking-arrow-next"></span>
                              </Flicking>
                           </div>
                        </section>
                        <section id="store">
                           <div class="sectionWrapper">
                              <h4 class="caseSubTitle2">Store</h4>
                              <p class="bodyText">
                                 Early concepts for the store involved primarily cutting down on the total amount of design assets used. Because the Steam store has infinite scrolling, having idiosyncrasies between
                                 different areas is visually refreshing, however if those idiosyncrasies exist in every section it can become challenging to conveniently digest the information presented.
                                 Architecturally, there are minimal changes in early concepts for the store page below. What has changed is an increased repitition of the design pattern of the
                                 <span style="background-color: #f4c997;">game carousels</span> presented below <span style="background-color: #b4f179;">Featured & Recommended</span>.
                              </p>
                              <img src="../../assets/case/steam/early7.webp" alt="" class="caseImage">
                           </div>
                        </section>
                        <section id="library">
                           <div class="sectionWrapper">
                              <h4 class="caseSubTitle2">Library</h4>
                              <p class="bodyText">
                                 Majority of the focus for the Library during the concept phase was thinking of a way to bake it into the sidebar as discussed in the <a href="#navigation">navigation</a> section.
                                 Having a column navigation allowed me to move the <span style="background-color: #f4c997;">What's New</span>- section from the <span style="background-color: #b4f179;">main window</span>
                                 of the Library to the sidebar. This allowed more breathing room to see the game tiles better.
                              </p>
                              <img src="../../assets/case/steam/early8.webp" alt="" class="caseImage">
                           </div>
                        </section>
                     </div>
                  </section>

                  <section id="finaldesigns">

                     <div class="finalpin">
                        <div class="sectionWrapper">
                           <h2 class="designSubTitle">Final Designs</h2>
                           <p class="bodyText" style="margin-top: 3rem;">
                              <i>Clicking through the <a href="https://www.figma.com/proto/IhXLtsI57GP0gw1iMC4snL/Steam?page-id=0%3A1&node-id=11%3A5&viewport=2309%2C-2416%2C1.28&scaling=min-zoom&starting-point-node-id=11%3A5&show-proto-sidebar=1" class="metaLinks2" target="_blank">Figma Prototype</a>
                              is encouraged to provide a more robust experience. The <a class="metaLinks2" href="https://www.figma.com/file/IhXLtsI57GP0gw1iMC4snL/Steam?node-id=0%3A1&t=Oen9lS4G9X8Klnyi-1" target="_blank">Figma File</a>
                              is also available to view.</i>
                           </p>

                        </div>
                     </div>

                     <div class="finalShowcase">

                        <section id="overview">
                           <h4 class="caseSubTitle2" id="overview">An Overview</h4>
                           <p class="bodyText">
                              The final designs can be categorized to five subjects:
                              <ul>
                                 <li>navigation</li>
                                 <li>the store</li>
                                 <li>the library</li>
                                 <li>friends</li>
                                 <li>miscellaneous</li>
                              </ul>
                              This section, An Overview, will focus on the first four. The following section, <a href="#closerlook">A Closer Look</a>, will highlight the various general changes.
                           </p>
                           <Flicking class="flickingmargins" :options="{ circular: true }" :plugins="plugins4">
                                    <div class="panel">
                                       <video class="finalCarouselImage" autoplay loop muted :src="storevid" alt=""></video>
                                       <p style="font-weight: normal">
                                       (1/5)
                                       <br>
                                       A brief video showcasing some of the interactions in the Store.
                                       </p>   
                                    </div>
                                    <div class="panel">
                                       <img class="finalCarouselImage" src="../../assets/case/steam/final0.webp" alt="">
                                       <p style="font-weight: normal">
                                       (2/5)
                                       <br>
                                       Landing page when you open the Steam client.
                                       </p>   
                                    </div>
                                    <div class="panel">
                                       <img class="finalCarouselImage" src="../../assets/case/steam/store1.webp" alt="">
                                       <p style="font-weight: normal;">
                                       (3/5)
                                       <br>
                                       Your Store.
                                       </p>
                                    </div>
                                    <div class="panel">
                                       <img class="finalCarouselImage" src="../../assets/case/steam/store2.webp" alt="">
                                       <p style="font-weight: normal;">
                                       (4/5)
                                       <br>
                                       Categories.
                                       </p>
                                    </div>
                                    <div class="panel">
                                       <img class="finalCarouselImage" src="../../assets/case/steam/store3.webp" alt="">
                                       <p style="font-weight: normal;">
                                       (5/5)
                                       <br>
                                       Wishlist.
                                       </p>
                                    </div>
                                    <span slot="viewport" class="flicking-arrow-prev"></span>
                                    <span slot="viewport" class="flicking-arrow-next"></span>
                           </Flicking>
                           <div class="side">
                              <div class="sideText">
                                 <h5>A Cleaner & Simpler Navigation</h5>
                                 <p class="bodyText">
                                    The Store section in the new navigation unifies both the web store's and desktop's navigation presenting a cleaner look. All relevant routing is accessable through
                                    a tile system that appears on hover.
                                 </p>
                              </div>
                                 <video autoplay loop muted :src="storevid2" alt="" class="sideMedia"></video>
                           </div>
                           
                           <Flicking class="flickingmargins" :options="{ align: 'prev', circular: true }" :plugins="plugins5" style="clear: both; margin-bottom: 4rem;">
                                    <div class="panel">
                                       <video class="finalCarouselImage" autoplay loop muted :src="libraryvid" alt=""></video>
                                       <p style="font-weight: normal">
                                       (1/5)
                                       <br>
                                       A brief video showcasing some of the interactions in the Library.
                                       </p>   
                                    </div>
                                    <div class="panel">
                                       <img class="finalCarouselImage" src="../../assets/case/steam/library0.webp" alt="">
                                       <p style="font-weight: normal">
                                       (2/5)
                                       <br>
                                       Home page of the Library. Visually, it is very similar to the current Steam UI however hovering over any game tile, as shown in the first slide, presents three buttons:
                                       "Play", "Store Page", and "Library Page".
                                       </p>   
                                    </div>
                                    <div class="panel">
                                       <img class="finalCarouselImage" src="../../assets/case/steam/library1.webp" alt="">
                                       <p style="font-weight: normal;">
                                       (3/5)
                                       <br>
                                       The What's New section is moved to the sidebar.
                                       </p>
                                    </div>
                                    <div class="panel">
                                       <img class="finalCarouselImage" src="../../assets/case/steam/library2.webp" alt="">
                                       <p style="font-weight: normal;">
                                       (4/5)
                                       <br>
                                       The "Downloads" section is also moved to the sidebar and is housed in a wider tile because of the amount of information it contains.
                                       </p>
                                    </div>
                                    <div class="panel">
                                       <video class="finalCarouselImage" autoplay loop muted :src="libraryvid2" alt=""></video>
                                       <p style="font-weight: normal;">
                                       (5/5)
                                       <br>
                                       The structure of the library page for a game is a little more clear. Sections are easily discernable and the navigation is further segregated from the content below.
                                       </p>
                                    </div>
                                    <span slot="viewport" class="flicking-arrow-prev"></span>
                                    <span slot="viewport" class="flicking-arrow-next"></span>
                           </Flicking>
                           <div class="side">
                              <div class="sideText">
                                 <h5>Improved Library Accessibility</h5>
                                 <p class="bodyText">
                                    A major goal for the Library page was to have it such that users could access their library from any page on the Steam app. As shown to the right, you can browse
                                    the Steam store and simultaneously check the games you own.
                                 </p>
                              </div>
                                 <img src="../../assets/case/steam/library5.webp" alt="" class="sideMedia">
                           </div>
                           <div class="side">
                              <div class="sideText">
                                 <h5>Chatting With Others</h5>
                                 <p class="bodyText">
                                    Socializing with friends is an important feature in Steam. Because of this, the friends list is accessible through either sub-navigation of your profile or by simply clicking the icon
                                    in the top right.  
                                 </p>
                              </div>
                              <video autoplay loop muted :src="friendsvid" alt="" class="sideMedia"></video>
                           </div>
                        </section>

                        <section id="closerlook">

                           <h4 class="caseSubTitle2" id="closerlook">A Closer Look</h4>
                           <div class="side">
                              <img src="../../assets/case/steam/status.webp" alt="" class="sideMedia" style="width: auto;">
                              <div class="sideText">
                                 <h5>Changing Your Status</h5>
                                 <p class="bodyText">
                                    Letting your friends know whether you're online, away, or unavailable is visually easier. Simply click on your profile in the top right to change status.
                                 </p>
                              </div>
                           </div>
                           <div class="side">
                              <div class="sideText">
                                 <h5>Keep an Eye on Downloads</h5>
                                 <p class="bodyText">
                                    Actively view current downloads by clicking on the downloads progress bar in the bottom left. Convenient for the impatient (me), people
                                    can drag Steam to another screen and still monitor downloads in peripheral.
                                 </p>
                              </div>
                              <video autoplay loop muted :src="downloadsvid" alt="" class="sideMedia"></video>
                           </div>
                           <div class="side">
                              <div class="sideText" style="max-width: 50%;">
                                 <h5>Dynamic Search</h5>
                                 <p class="bodyText">
                                    Instead of numerous search bars between main sections, there is only one and it is dynamic to the section you are in.
                                 </p>
                              </div>
                              <video autoplay loop muted :src="searchbarvid" alt="" class="sideMedia" style="width: auto;"></video>
                           </div>
                        </section>

                     </div>
                     
                  </section>


                  <section id="conclusion">
                     <div class="sectionWrapper">
                        <h2 class="designSubTitle">Conclusion</h2>
                        <p class="bodyText">
                           I said it initially in the <a href="#problem">Problem</a> section, but Steam truly is dense with information and at every step until the final designs I was constantly
                           reminded of that. The ubiquity of different assets and unique pages forced me to constantly ask myself the question <i>"how much is too much?"</i>. I wanted to work with
                           enough pages to provide a holistic feel towards the redesign, but not so much such that I'd lose my mind. 
                        </p>
                        <p class="bodyText">
                           A large consideration was acknowledging that the developmental side of the current Steam is excellent. Having a web app, <a href="https://store.steampowered.com/">store.steampowered.com</a>,
                           be fully autonomous and then a desktop app that acts as a wrapper is great because that allows developers to direct their efforts on a single version of the store. Despite this great benefit, I
                           believe providing a "properly robust" desktop app for users is even more awesome. To compensate both demographics, the developers and users, I tried to not mutate the core structure
                           of the Steam store. Because of this, the only structural changes are the removal of the web store's top navigation and sidebar.
                        </p>
                        <p class="bodyText">
                           Overall working on this project was a lot of fun and, as expected, I learned a lot. Frustrations were fortunately minimal, but every once in a while there was the
                           design lull - a period where I'd look at a single asset for hours thinking <i>"this doesn't look right"</i>. I'm especially proud of most of the accessibility changes:
                           being able to view your library while browsing the shop, a gauge cluster for your current download, and simplifying the user flow for navigating to a game's store page in your library.
                        </p>
                     </div>
                  </section>
                        
                  
               

               </div>
            </div>
         </div>
      </div>
      <div class="finalbg"></div>

      <toTop />
  </div>
</template>

<script>
import { Flicking } from "@egjs/vue-flicking"
import { Arrow } from "@egjs/flicking-plugins";
import '@egjs/vue-flicking/dist/flicking.css'
// import "@egjs/flicking-plugins/dist/arrow.css"
import toTop from '../../components/toTop.vue'
import backdropFade from '../../components/backdropFade.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.config({
   autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
})

export default {
   name: 'portfolioObject',
   components: {
      toTop,
      backdropFade,
      Flicking
   },
   data() {
      return {
         plugins: [new Arrow()],
         plugins2: [new Arrow()],
         plugins3: [new Arrow()],
         plugins4: [new Arrow()],
         plugins5: [new Arrow()],

         storevid: require('../../assets/case/steam/vid.webm'),
         storevid2: require('../../assets/case/steam/storevid.webm'),
         libraryvid: require('../../assets/case/steam/libraryvid0.webm'),
         libraryvid2: require('../../assets/case/steam/librarygame.webm'),
         friendsvid: require('../../assets/case/steam/friends.webm'),
         downloadsvid: require('../../assets/case/steam/downloads.webm'),
         searchbarvid: require('../../assets/case/steam/searchbar.webm'),

      }
   },

   mounted() {

      this.tl = gsap.timeline({
         scrollTrigger: {
            trigger: '.finalpin',
            start: 'top-=40%',
            end: 'bottom+=150%', 
            pin: true,
            scrub: true,
            anticipatePin: 1,
            // markers: true,
         }
      })
      .to('.finalbg', {
         opacity: 1,
      })
      .to('.finalbg', {
         width: '100%',
      })
      .to('.casenav', {
         marginLeft: '-5vw',
         delay: -0.5,
         onComplete: ScrollTrigger.refresh()
      })

      // this.$nextTick(() => {
      //    ScrollTrigger.refresh()
      //    console.log('k');
      // })
      
      // this.tl.scrollTrigger.refresh()
      // ScrollTrigger.refresh()
      
      const observer = new IntersectionObserver(entries => {
         entries.forEach(entry => {
            const id = entry.target.getAttribute('id')
            if (entry.intersectionRatio > 0) {
               document.querySelector(`nav li a[href="#${id}"]`).classList.add('active')
            } else {
               document.querySelector(`nav li a[href="#${id}"]`).classList.remove('active')
            }
         })
      },
      {
         rootMargin: "-30% 0% -50% 0%"
      })

      document.querySelectorAll('section[id]').forEach((section) => {
         observer.observe(section)
      });
     
      setTimeout(() => {
         this.tl.scrollTrigger.refresh()
      }, 800)
   },

   methods: {
      finalbgPush() {
         let x = document.querySelectorAll('.finalbg')
         console.log('toad', x)
      },

   },

   beforeDestroy() {
      this.tl.kill()
   }
}
</script>

<style scoped>

.designContainerBox {
   padding-top: 0;
}

.active {
   /* color: var(--black); */
   color: #000;
   font-weight: bold;
}

nav {
   position: sticky;
   margin-top: 10vw;
   top: 8rem;
   float: left;
}

nav > ul {
   padding-left: 0;
}

nav ul {
   list-style-type: none;
   /* font-family: 'Lora', serif; */
   font-family: var(--type2), sans-serif;
   text-align: left;
   margin: 0;
}

nav ul a {
   color: var(--shadeWhite2);
   /* font-family: 'Lora', serif; */
   font-family: var(--type2), sans-serif;
   line-height: 1.5;
}

nav ul a:hover {
   color: var(--black);
}

.metaKey {
   font-family: var(--type2), sans-serif;
   font-weight: bold;
   font-size: 13px;
   margin: 0;
   text-transform: uppercase;
}

.metaValue {
   font-family: var(--type2), serif;
   font-size: 16px;
   line-height: 1.5;
   margin: 0;
   /* margin-top: -10px;
   margin-bottom: 0 */
}

.caseStudyBody {
   /* background-color: var(--white); */
   text-align: left;
   margin-left: 150px;
   padding: 10vw;
   color: var(--black);
   font-family: var(--type2), serif;
   font-size: 16px;
   line-height: 1.9;
}

.caseMeta {
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   /* grid-template-columns: repeat(4, minmax(190px ,1fr)); */
   justify-items: center;
   padding-top: 50px;
   padding-bottom: 50px;
   border-top: 1px solid;
   border-bottom: 1px solid;
   margin-bottom: 10rem;
}

@media screen and (max-width: 1183px) {
   .caseMeta {
      grid-template-columns: repeat(2, 1fr);
      padding-top: 20px;
      padding-bottom: 20px;
   }
   .metaKey {
      margin-top: 30px;
   }
}

.metaLinks > a {
   color: var(--white);
   font-size: 15px;
   /* color: linear-gradient(#0fc24b, #9198e5); */
   /* background: -webkit-linear-gradient(#eee, #333); */
   /* background: var(--black); */
   background: linear-gradient(to right, #000, transparent);
   background-color: #7a7a7a;
   padding: 3px 11px;
   border-radius: 15px;
}

.metaLinks2 {
   color: var(--white);
   font-size: 15px;
   background: linear-gradient(to right, #000, transparent);
   background-color: #7a7a7a;
   padding: 2px 8px;
   border-radius: 15px;

}

.metaLinks > a:hover {
   background-color: var(--shadeWhite2);
   transition: 0.3s;
}

.metaLinks2:hover {
   background-color: var(--shadeWhite2);
   transition: 0.3s;
}

h2.designSubTitle {
   margin-bottom: 1.5rem;
   /* font-family: var(--type2), sans-serif; */
}

h4.caseSubTitle2 {
   font-family: var(--type), serif;
   font-size: 32px;
   margin-left: 40px;
   font-weight: normal;
}

.sectionWrapper {
   padding-top: 3rem;
   /* margin-bottom: 8rem; */
}

.bodyText {
   margin-bottom: 3rem;
}

.caseImage {
   display: block;
   margin-left: auto;
   margin-right: auto;
   margin-bottom: 3rem;
   max-width: 80%; 
   /* max-height: 90%; */
}

.finalImage {
   display: block;
   margin-left: auto;
   margin-right: auto;
   margin-bottom: 3rem;
   max-width: 100%;
}

.panel {
   width: 100%;
}

.panel > p {
   margin-top: 5px;
   font-weight: bold;
   font-size: 14px;
   text-align: center;
}

.flicking-arrow-prev::before, .flicking-arrow-prev::after {
   background-color: var(--shadeWhite2);
}

.flicking-arrow-next::before, .flicking-arrow-next::after {
   background-color: var(--shadeWhite2);
}

.carouselImage {
   display: block;
   margin-left: auto;
   margin-right: auto;
   width: 80%;
   /* pointer-events: none; */
}

.finalCarouselImage {
   display: block;
   margin-left: auto;
   margin-right: auto;
   width: 100%;
}



.flickingmargins {
   margin-top: 2rem;
   /* margin-bottom: 3rem; */
}

.sectionWrapper ul {
   margin-left: 1rem;
}

.finalbg {
   background: #fff;
   margin: auto;
   top: 0;
   left: 0;
   right: 0;
   width: 90vw;
   opacity: 0;
   height: 100vh;
   position: fixed;
   z-index: 3;
}

.side {
   /* display: grid;
   justify-items: center;
   grid-template-columns: 30% 70%; */
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   margin-bottom: 3rem;
   /* gap: 12px; */
}

.sideMedia {
   width: 70%;

   /* For wrapping */
   /* min-width: 700px;
   max-width: 70%; */
}

.sideText {
   text-align: center;
   padding-right: 1rem;
   padding-left: 1rem;
   max-width: 20%;
}

.finalMedia {
   width: 100%;
   margin-bottom: 3rem;
}

.finalShowcase {
   margin-top: 70vh;
   width: 75vw;
   position: relative;
   /* left: calc(-60vw + 100%) */
   left: calc(-58vw + 90%);
}

h5 {
   font-size: 20px;
}

::selection {
  background: var(--designSelection) !important; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: var(--designSelection) !important; /* Gecko Browsers */
}

.flicking-arrow-prev,
.flicking-arrow-next {
  position: absolute;
  top: 50%;
  width: 64px;
  height: 64px;
  cursor: pointer;
  transform: translateY(-50%);
  z-index: 2;
}

.flicking-arrow-prev.is-circle,
.flicking-arrow-next.is-circle {
  background-color: var(--shadeWhite2);
  border-radius: 50%;
}

.flicking-arrow-disabled.is-circle {
  background-color: rgb(10 10 10 / 10%);
}

.flicking-arrow-prev.is-circle::before,
.flicking-arrow-prev.is-circle::after,
.flicking-arrow-next.is-circle::before,
.flicking-arrow-next.is-circle::after {
  background-color: white;
}

.flicking-arrow-prev {
  left: 10px;
}
.flicking-arrow-next {
  right: 10px;
}

.flicking-arrow-prev.is-outside {
  left: -74px;
}
.flicking-arrow-next.is-outside {
  right: -74px;
}

.flicking-arrow-prev::before,
.flicking-arrow-prev::after,
.flicking-arrow-next::before,
.flicking-arrow-next::after {
  content: "";
  width: 24px;
  height: 6px;
  position: absolute;
  background-color: var(--shadeWhite2);
}
.flicking-arrow-prev::before {
  top: 50%;
  left: 22px;
  transform: rotate(-45deg);
  transform-origin: 0% 50%;
}
.flicking-arrow-prev::after {
  top: calc(50% - 4px);
  left: 22px;
  transform: rotate(45deg);
  transform-origin: 0% 50%;
}
.flicking-arrow-next::before {
  top: 50%;
  right: 22px;
  transform: rotate(45deg);
  transform-origin: 100% 50%;
}
.flicking-arrow-next::after {
  top: calc(50% - 4px);
  right: 22px;
  transform: rotate(-45deg);
  transform-origin: 100% 50%;
}

.flicking-arrow-disabled,
.flicking-arrow-disabled {
  cursor: default;
}

.flicking-arrow-disabled::before,
.flicking-arrow-disabled::after,
.flicking-arrow-disabled::before,
.flicking-arrow-disabled::after {
  background-color: #e6e6e6;
}

.flicking-arrow-prev.is-thin::before,
.flicking-arrow-prev.is-thin::after,
.flicking-arrow-next.is-thin::before,
.flicking-arrow-next.is-thin::after{
  height: 3px;
}

.flicking-arrow-prev.is-thin::after,
.flicking-arrow-next.is-thin::after{
  top: calc(50% - 2px);
}

</style>