<template>
    <div class="position-relative">
        <div class="image-background"></div>
        <h1 class="text-center text-white pt-5">HELLO</h1>
        <div class="d-flex justify-content-center">
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link text-white" href="#" @click="go_to_story">Story</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#" @click="go_to_movies">Movies</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#" @click="go_to_milestone"><u>Memory</u></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#" @click="go_to_about">About</a>
                </li>
            </ul>
        </div>

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 bg-image"></div>
            </div>
        </div>
        <h3 class="text-center text-white pt-3 pb-4">Our 2021</h3>
        <div class="container-fluid">
            <div class="row mb-3 ms-5 me-5">
                <div class="container d-flex justify-content-center align-items-center pb-3">
                    <div class="row">
                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2021/1st_call.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title font-bold">Our 1st Phone Call</h5>
                                    <p class="card-text justified pb-5">
                                        My heart raced as I hesitated to answer the call, a mix of fear and 
                                        anticipation coursing through me. Yet, deep down, I couldn't resist 
                                        the overwhelming curiosity to finally hear the melody of your voice.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2021/1st_vc.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title font-bold">Our 1st Video Call</h5>
                                    <p class="card-text justified">
                                        My heart fluttered with anticipation as the screen illuminated with your 
                                        presence, bridging the distance between us. In that moment, I realized that 
                                        simply catching a glimpse of you, even through the confines of a phone 
                                        screen, would be enough to fill me with joy. 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2021/her_eyes.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title">Where my heart fell</h5>
                                    <p class="card-text justified pb-4">
                                        In the depths of your gaze, I found a universe of enchantment, 
                                        where time seemed to stand still. Your eyes, like sparkling gems, 
                                        effortlessly captured my heart, becoming my most cherished view.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2021/1st_sleep.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title">First overnight video call</h5>
                                    <p class="card-text justified">
                                        Time slipped away, and fatigue embraced you. Serene and angelic, 
                                        you surrendered to slumber. In that stillness, I marveled at your 
                                        peaceful beauty, breath and lips softly moving. Fortunate to witness 
                                        such grace, even in dreams.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2021/travel_pass.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title">Travel pass to see you</h5>
                                    <p class="card-text justified">
                                        I embraced the risks, defying all odds, to see you, to be by your side. 
                                        The perils were insignificant, for the mere chance to be with you. 
                                        Distance dissolved, as love made every moment worthwhile.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2021/1st_date.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title">Our 1st Date</h5>
                                    <p class="card-text justified pb-4">
                                        Our first date surpassed my wildest dreams. It transcended all expectations, 
                                        unfolding into a cherished memory more beautiful than any fantasy.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2021/before_sleep.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title">First overnight together</h5>
                                    <p class="card-text justified">
                                        Forgive me for impulsively reaching for a kiss; 
                                        I couldn't resist the enchantment of your eyes pulling me closer.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2021/1st_beer.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title">Our 1st Beer</h5>
                                    <p class="card-text justified">
                                        With each sip of that bitter beer, it transforms into a sweet elixir, 
                                        mirroring the taste of your presence in my life.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2021/1st_morning_together.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title">Our first morning together</h5>
                                    <p class="card-text justified">
                                        Unable to resist the allure of your adorable face, I softly press my lips against your cheek, 
                                        a stolen kiss that has become our cherished morning ritual.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2021/funny_filters.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title">You and your funny filters</h5>
                                    <p class="card-text justified pb-5 pt-5">
                                        With every joke that escapes your lips, my heart dances to the rhythm of 
                                        your infectious humor. The sound of your laughter fills the air, and I 
                                        find myself swept away in a whirlwind of joy, unable to contain the laughter 
                                        that spills from my own lips.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2021/birthday_salubong.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title">Birthday Salubong</h5>
                                    <p class="card-text justified pb-4">
                                        Though I couldn't be there on your birthday, my heart was with you, 
                                        filled with love and wishes for your happiness. Seeing you surrounded 
                                        by dear friends, radiating joy and laughter, brought me immense joy. 
                                        Your smile, a precious memory, is etched in my heart. I promise to make 
                                        up for the missed moments and celebrate you every day, for you are worth 
                                        celebrating.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2021/1st_naga_night.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title">Your 1st poop in Naga City</h5>
                                    <p class="card-text justified">
                                        In the irony of it all, I found myself both worried and amused. 
                                        Even though we were just kilometers apart, leaving you alone in your room 
                                        kept me awake, restless with thoughts of you. And amidst it all, you managed
                                        to bring laughter to my heart, even calling me while you were in the most 
                                        mundane of moments. It's in these unexpected connections, even amidst the 
                                        silliness, that our bond grows stronger.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2021/jumpscare.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title">Us avoiding the ...</h5>
                                    <p class="card-text justified">
                                        In the midst of the jump scare, our hearts filled with both worry and 
                                        uncertainty about the path ahead. The idea of parenthood wasn't part of our 
                                        initial plan, yet somehow, against all odds, our prayers were answered. 
                                        It was in that moment, as we embraced the unexpected twist of fate, that we 
                                        realized the immense love and joy that awaited us on this new journey 
                                        together.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2021/replaced_shades.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title">You and your new Sunnies</h5>
                                    <p class="card-text justified pb-4">
                                        You looked amazing in my shades, and I couldn't resist getting you a pair. 
                                        We rocked the same style, different colors. When they broke, 
                                        you surprised me with a new one. It was in that simple act of replacing what 
                                        was lost that I realized the depth of your affection and the lengths you 
                                        would go to keep our shared moments alive.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2021/newyear_salubong.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title">Our first new year salubong</h5>
                                    <p class="card-text justified">
                                        Amidst the distance that separated us, we embraced the new year through a 
                                        heartfelt video call. Our screens became windows to our souls, 
                                        allowing us to share in the anticipation and excitement of the moment. 
                                        As the clock struck midnight, our virtual connection bridged the gap, 
                                        filling our hearts with love and the promise of a new chapter together.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="bg-gradient-primary text-white text-center pt-2 pb-3">
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

        }
    },
    methods: {
        go_to_story(){
            this.$router.push({name: 'Home'});
        },

        go_to_about(){
            this.$router.push({name: 'About'});
        },

        go_to_movies(){
            this.$router.push({name: 'Tickets'});
        },

        go_to_milestone(){
            this.$router.push({name: 'Milestones'});
        }
    }
}
</script>
<style scoped>
.justified {
    text-align: justify;
}

.bg-image {
  background-image: url('../assets/2021.png');
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  height: 80vh; /* Adjust the height as desired */
}


body{
    overflow-x: hidden;
}

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