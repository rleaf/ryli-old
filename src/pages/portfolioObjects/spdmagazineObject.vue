design/<template>
  <div id="landing">
     <NavBar />
      <div id="centerContainer">
         <div id="textContainerHeader">
            Magazine Spread
            <div id="subHeader">
               Design / Illustration / Print
            </div>
         </div>
         <div id="textContainerBody">
            My entry to the SPD design competition composed of a four page magazine spread. I decided to go with a spread layout that had a science fiction and computer-esque aesthetic.
            I focused on illustrating "bundles" of threads together to resemble the connectionism that is frequently associated with AI while keeping them spread out enough to appear organic.
         </div>
         <img src="../../assets/design/spdmagazine/mock11.jpg" alt="" id="img1300">
         <img src="../../assets/design/spdmagazine/mock12.jpg" alt="" id="img1300">
         <img src="../../assets/design/spdmagazine/mock21.jpg" alt="" id="img1300">
         <img src="../../assets/design/spdmagazine/mock22.jpg" alt="" id="img1300">
      </div>
      <toTop />
  </div>
</template>

<script>
import NavBar from '../../components/backdrop.vue'
import toTop from '../../components/toTop.vue'

export default {
   name: 'portfolioObject',
   components: {
      NavBar,
      toTop
   }
}
</script>

<style>

</style>