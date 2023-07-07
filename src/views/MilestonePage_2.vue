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
        <h3 class="text-center text-white pt-3 pb-4">Our 2022</h3>
        <div class="container-fluid">
            <div class="row mb-3 ms-5 me-5">
                <div class="container d-flex justify-content-center align-items-center pb-3">
                    <div class="row">
                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2022/covid_hit.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title font-bold">When Covid hit</h5>
                                    <p class="card-text justified pb-5 pt-4">
                                        In the midst of the unexpected storm brought by Covid, 
                                        you became my shelter, offering solace and comfort that made the darkest 
                                        nights feel lighter.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2022/your_cute_face.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title font-bold">Your cute face</h5>
                                    <p class="card-text justified pb-4">
                                        In this picture, devoid of context, your adorable face captivated me in a 
                                        way that defied words. I was overwhelmed by an irresistible urge to both 
                                        shower you with kisses and gently nibble on your enticing charm. 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2022/virtual_kisses.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title">Virtual Kisses</h5>
                                    <p class="card-text justified">
                                        Though distance may separate us by kilometers, the ethereal connection we 
                                        share bridges the gap between our hearts. In the realm of virtual embraces, 
                                        I can feel the gentle brush of your virtual kisses upon my skin, igniting a 
                                        fire within me that transcends physical boundaries.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2022/NMAT_cake.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title">Your NMAT cake</h5>
                                    <p class="card-text justified">
                                        I beamed with pride as I witnessed your exceptional NMAT scores. 
                                        To honor your hard work, I surprised you with a simple cake, celebrating 
                                        your success and the bright future ahead. In that sweet moment, 
                                        I couldn't help but marvel at your dedication and feel blessed to be 
                                        part of your journey.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2022/your_birthday_gift.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title">Your birthday gift to me</h5>
                                    <p class="card-text justified pb-4">
                                        Your thoughtful gesture caught me off guard, for I am not one to seek 
                                        surprises or gifts. Yet, in your loving way, you found a way to show me 
                                        how much my birthday meant to you. Your effort and thoughtfulness touched 
                                        my heart, and I couldn't help but feel cherished in your presence.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2022/grad_manifestation.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title">Your graduation manifestation</h5>
                                    <p class="card-text justified">
                                        In the midst of diligently crafting your thesis paper, I witnessed your 
                                        anticipation building for the day of your graduation. It warmed my heart 
                                        to see you express your excitement through filters, a playful manifestation 
                                        of the joy and pride that will soon fill the air as you accomplish this 
                                        significant milestone.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2022/grad_shoot.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title">Graduation Shoot</h5>
                                    <p class="card-text justified">
                                        I am eternally grateful for the privilege of being your personal assistant 
                                        during your graduation shoot. It was a moment filled with love and pride 
                                        as we worked together, capturing memories that made others envious of our 
                                        connection. Being there by your side, supporting and cheering you on, 
                                        brought me immeasurable joy and a deep sense of fulfillment.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2022/movie_date_with_sibs.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title">Movie date (Fantastic Beast)</h5>
                                    <p class="card-text justified pb-4">
                                        On that unforgettable day, you met my family. As they laid eyes on you, 
                                        they recognized the magic I had always cherished. Your beauty captivated 
                                        them, and they saw the depth of your sweetness. In that moment, it became 
                                        clear to all that I had found someone extraordinary, someone who made me 
                                        feel like the luckiest person in the world.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2022/1st_sundo.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title">1st sundo sa med school</h5>
                                    <p class="card-text justified pb-4">
                                        Underneath the warm glow of the sun, I waited outside your school, 
                                        eagerly anticipating the moment I could see your radiant smile. 
                                        As the minutes ticked by, I immersed myself in writing lines of code, 
                                        but my heart was solely focused on you. 
                                        Brought you a cup of coffee to warm your stomach.
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
  background-image: url('../assets/2022.png');
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  height: 80vh; /* Adjust the height as desired */
}


body{
    overflow-x:hidden;
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