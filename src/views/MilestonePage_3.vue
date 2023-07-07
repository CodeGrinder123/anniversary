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
        <h3 class="text-center text-white pt-3 pb-4">Our 2023</h3>
        <div class="container-fluid">
            <div class="row mb-3 ms-5 me-5">
                <div class="container d-flex justify-content-center align-items-center pb-3">
                    <div class="row">
                        <div class="col">
                            <div class="card mb-3">
                                <!-- <img src="../assets/img_holder.png" class="custom-img"/> -->
                                <div class="text-center">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/hqrgkqvs.json"
                                        trigger="loop"
                                        colors="outline:#121331,primary:#f28ba8,secondary:#ebe6ef"
                                        style="width:250px;height:250px">
                                    </lord-icon>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title font-bold text-center">Work in progress</h5>
                                    <p class="card-text justified">
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2022/your_cute_face.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title font-bold">Your cute face</h5>
                                    <p class="card-text justified">
                                        On this page, we revisit the milestones that have enriched our relationship 
                                        and helped us achieve our personal goals.
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
                                        On this page, we revisit the milestones that have enriched our relationship 
                                        and helped us achieve our personal goals.
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
                                        On this page, we revisit the milestones that have enriched our relationship 
                                        and helped us achieve our personal goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2022/your_birthday_gift.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title">Your birthday gift to me</h5>
                                    <p class="card-text justified">
                                        On this page, we revisit the milestones that have enriched our relationship 
                                        and helped us achieve our personal goals.
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
                                        On this page, we revisit the milestones that have enriched our relationship 
                                        and helped us achieve our personal goals.
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
                                        On this page, we revisit the milestones that have enriched our relationship 
                                        and helped us achieve our personal goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2022/movie_date_with_sibs.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title">Movie date (Fantastic Beast)</h5>
                                    <p class="card-text justified">
                                        On this page, we revisit the milestones that have enriched our relationship 
                                        and helped us achieve our personal goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-3">
                                <img src="../assets/milestone_2022/1st_sundo.png" class="custom-img"/>
                                <div class="card-body">
                                    <h5 class="card-title">1st sundo sa med school</h5>
                                    <p class="card-text justified">
                                        On this page, we revisit the milestones that have enriched our relationship 
                                        and helped us achieve our personal goals.
                                    </p>
                                </div>
                            </div>
                        </div> -->
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
  background-image: url('../assets/2023.png');
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
  filter: blur(5px);
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