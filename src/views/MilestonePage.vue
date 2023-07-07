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

        <h3 class="text-center text-white pt-3 pb-4">Memories</h3>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 bg-image"></div>
            </div>
            <div class="row mt-5 mb-3 ms-5 me-5">
                <div class="col-md-12">
                    <h1 class="text-3xl font-bold text-white text-center pb-5">Through the years</h1>
                </div>
                <div class="container d-flex justify-content-center align-items-center pb-3">
                    <div class="row">
                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/img_2021.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title font-bold">Year 2021</h5>
                                    <p class="card-text justified pb-4">
                                        On this page, we revisit where we started and how we grow as a couple.
                                    </p>
                                    <a href="#" @click="go_to_2021" class="btn btn-primary">Check this out</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/img_2022.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title font-bold">Year 2022</h5>
                                    <p class="card-text justified">
                                        On this page, we revisit the milestones that have enriched our relationship 
                                        and helped us achieve our personal goals.
                                    </p>
                                    <a href="#" @click="go_to_2022" class="btn btn-primary">Check this out</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/img_2023.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title">Year 2023</h5>
                                    <p class="card-text justified pb-4">
                                        On this page, we are in the process of outlining what will take place throughout the year.
                                    </p>
                                    <a href="#" @click="go_to_2023" class="btn btn-primary">Check this out</a>
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
        },

        go_to_2021(){
            this.$router.push({name: '2021'});
        },

        go_to_2022(){
            this.$router.push({name: '2022'});
        },

        go_to_2023(){
            this.$router.push({name: '2023'});
        },
    }
}
</script>
<style scoped>
.justified {
    text-align: justify;
}

.bg-image {
  background-image: url('../assets/mirror_leg.jpeg');
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  height: 80vh; /* Adjust the height as desired */
}

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