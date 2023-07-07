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
                    <a class="nav-link text-white" href="#" @click="go_to_movies"><u>Movies</u></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#" @click="go_to_milestone">Memory</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#" @click="go_to_about">About</a>
                </li>
            </ul>
        </div>

        <h3 class="text-center text-white pt-3 pb-4">Movies</h3>
        <div class="container d-flex justify-content-center align-items-center pb-3">
            <div class="row">
                <div class="col">
                    <div class="card mb-3" style="width: 402px;">
                        <img src="../assets/movie_poster.jpg" class="custom-img"/>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">
                                In the realm of digital connection, our story began, <br>
                                Through the virtual waves, destiny had a plan. <br>
                                Bumble brought us together, a chance encounter so rare, <br>
                                Little did we know, it would be a love beyond compare.
                            </p>
                            <a href="#" class="btn btn-primary">Book a reservation</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3" style="width: 402px;">
                        <img src="../assets/movie_poster.jpg" class="custom-img"/>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">
                                In the realm of digital connection, our story began, <br>
                                Through the virtual waves, destiny had a plan. <br>
                                Bumble brought us together, a chance encounter so rare, <br>
                                Little did we know, it would be a love beyond compare.
                            </p>
                            <a href="#" class="btn btn-primary">Book a reservation</a>
                        </div>
                    </div>
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

        }
    },
    methods: {
        go_to_story(){
            this.$router.push({name: 'Home'});
        },

        go_to_about(){
            this.$router.push({name: 'About'});
        },

        go_to_milestone(){
            this.$router.push({name: 'Milestones'});
        },

        go_to_movies(){
            this.$router.push({name: 'Tickets'});
        },
    }
}
</script>
<style scoped>
/* 
body{
    overflow-x:hidden;
} */
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