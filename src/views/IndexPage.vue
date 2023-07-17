<template>
  <div class="position-relative">
    <div class="image-background"></div>
    <h1 class="text-center text-white pt-5">HELLO</h1>
    <div class="d-flex justify-content-center">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link text-white" href="#" @click="go_to_story"><u>Story</u></a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#" @click="go_to_movies">Movies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#" @click="go_to_milestone">Memory</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#" @click="go_to_about">About</a>
        </li>
      </ul>
    </div>

    <h3 class="text-center text-white pt-3 pb-4">Our story</h3>
    <div class="container-fluid">
      <div class="me-3">
        <div class="d-flex justify-content-center align-items-center pb-3">
          <div class="row">
            <div class="col"></div>
              <div class="col">
                <div v-if="fetched_num == 1">
                  <div class="card mb-3" style="width: 300px;">
                    <img src="../assets/4-pcs-instax.jpg" class="custom-img"/>
                    <div class="card-body">
                      <p class="card-text">
                        In the realm of digital connection, our story began, <br>
                        Through the virtual waves, destiny had a plan. <br>
                        Bumble brought us together, a chance encounter so rare, <br>
                        Little did we know, it would be a love beyond compare.
                      </p>
                    </div>
                  </div>
                </div>

                <div v-else-if="fetched_num == 2">
                  <div class="card mb-3" style="width: 300px;">
                    <img src="../assets/car_maroon.jpeg" class="custom-img"/>
                    <div class="card-body">
                      <p class="card-text">
                        Hesitant hearts took a leap, diving into the unknown, <br>
                        Unveiling emotions, seeds of affection were sown. <br>
                        Conversations flowed effortlessly, laughter filled the air, <br>
                        Five hours on the phone, our souls laid bare. 
                      </p>
                    </div>
                  </div>
                </div>

                <div v-else-if="fetched_num == 3">
                  <div class="card mb-3" style="width: 300px;">
                    <img src="../assets/powerpuff_vc.jpeg" class="custom-img"/>
                    <div class="card-body">
                      <p class="card-text">
                        From pixels to pictures, our connection grew strong, <br>
                        Sharing moments, painting a picture, where we belong. <br>
                        Video calls illuminated our nights, bringing us close, <br>
                        Laughing till sunrise, as love's flame arose.
                      </p>
                    </div>
                  </div>
                </div>

                <div v-else-if="fetched_num == 4">
                  <div class="card mb-3" style="width: 300px;">
                    <img src="../assets/car_face_squeez.jpeg" class="custom-img"/>
                    <div class="card-body">
                      <p class="card-text">
                        Lockdown's embrace hindered our desire to meet, <br>
                        But distance couldn't dampen the love that was sweet. <br>
                        Through fears and uncertainties, we took a daring chance, <br>
                        Driving a hundred kilometers, fate's divine dance.
                      </p>
                    </div>
                  </div>
                </div>

                <div v-else-if="fetched_num == 5">
                  <div class="card mb-3" style="width: 300px;">
                    <img src="../assets/IMG_20220919_163944_055.webp" class="custom-img"/>
                    <div class="card-body">
                      <p class="card-text">
                        Navigating checkpoints, overtaking fears, <br>
                        A journey filled with courage, love's path now clear. <br>
                        Your presence, a treasure, validation so true, <br>
                        "I love you" I uttered, and you said it too. 
                      </p>
                    </div>
                  </div>
                </div>

                <div v-else-if="fetched_num == 6">
                  <div class="card mb-3" style="width: 300px;">
                    <img src="../assets/mirror_shot.jpg" class="custom-img"/>
                    <div class="card-body">
                      <p class="card-text">
                        As time unfurled, trials came and went, <br>
                        Yet our love remained, unbreakable and unbent. <br>
                        I recall the moment, trembling, I asked to be yours, <br>
                        Tears mingled with laughter, as you opened love's doors.
                      </p>
                    </div>
                  </div>
                </div>

                <div v-else-if="fetched_num == 7">
                  <div class="card mb-3" style="width: 300px;">
                    <img src="../assets/col_car.jpeg" class="custom-img"/>
                    <div class="card-body">
                      <p class="card-text">
                        A year has passed, and we've weathered the storm, <br>
                        Through fights and scares, our love takes true form. <br>
                        But here we stand, still bound by a love so grand, <br>
                        Grateful for your existence, beside me you'll always stand.
                      </p>
                    </div>
                  </div>
                </div>

                <div v-else-if="fetched_num == 8">
                  <div class="card mb-3" style="width: 300px;">
                    <img src="../assets/col_pics.jpeg" class="custom-img"/>
                    <div class="card-body">
                      <p class="card-text">
                        Thank you for everything, for being by my side, <br>
                        For loving me fiercely, in you, my heart finds pride. <br>
                        Happy anniversary, my love, forever we'll be, <br>
                        Through the highs and lows, a love story, just you and me.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            <div class="col"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center align-items-center pb-5">
      <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group mr-2" role="group" aria-label="First group">
          <button type="button" class="btn btn-secondary" value="1" @click="button_slider($event)">1</button>
          <button type="button" class="btn btn-secondary" value="2" @click="button_slider($event)">2</button>
          <button type="button" class="btn btn-secondary" value="3" @click="button_slider($event)">3</button>
          <button type="button" class="btn btn-secondary" value="4" @click="button_slider($event)">4</button>
          <button type="button" class="btn btn-secondary" value="5" @click="button_slider($event)">5</button>
          <button type="button" class="btn btn-secondary" value="6" @click="button_slider($event)">6</button>
          <button type="button" class="btn btn-secondary" value="7" @click="button_slider($event)">7</button>
          <button type="button" class="btn btn-secondary" value="8" @click="button_slider($event)">8</button>
        </div>
      </div>
    </div>

    <footer class="bg-gradient-primary text-white text-center pt-3 pb-3">
        <div class="container">
            <hr class="bg-white">
            <p class="mb-0"><smal>&copy; Copyright Justin Berdin 2023</smal></p>
        </div>
    </footer>
  </div>
</template>
<script>

export default{
  data(){
    return{
      fetched_num: '1',
      slide_one: 1,
      slide_two: 2,
      slide_three: 3,
      slide_four: 4,
      slide_five: 5,
      slide_six: 6,
      slide_seven: 7,
      slide_eight: 8,
      slide_nine: 9,
    }
  },
  methods: {
    button_slider(event){
      this.fetched_num = event.target.value;
      console.log(this.fetched_num)
    },

    go_to_story(){
        this.$router.push({name: 'Home'});
    },

    go_to_movies(){
      this.$router.push({name: 'Tickets'});
    },

    go_to_about(){
      this.$router.push({name: 'About'})
    },

    go_to_milestone(){
      this.$router.push({name: 'Milestones'});
    }
  }
}
</script>
<style scoped>
.custom-img{
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: auto;
}

.container{
  position: relative;
  z-index: 1;
}

.image-background {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background-image: linear-gradient(to right top, #2f3e46, #334950, #385459, #3e5f61, #456a68, #4c736e, #547c72, #5d8577, #668e7d, #6f9782, #79a087, #84a98c);
  background-color: black;
  background-size: contain;
  background-position: center;
  filter: blur(5px);
  z-index: -1;
}
</style>