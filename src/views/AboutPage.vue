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
                    <a class="nav-link text-white" href="#" @click="go_to_milestone">Memory</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#" @click="go_to_about"><u>About</u></a>
                </li>
            </ul>
        </div>

        <h3 class="text-center text-white pt-3 pb-4">About Us</h3>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 bg-image"></div>
            </div>
            <div class="row mt-5 mb-3 ms-5 me-5">
                <div class="col-md-12">
                <h1 class="text-3xl font-bold text-white">Love Beyond the Virtual Waves</h1>
                    <p class="mt-4 text-white justified">
                        In the realm of digital connection, two hearts met through the serendipity of Bumble. 
                        What began as a chance encounter soon blossomed into a love story beyond compare. 
                        Conversations flowed effortlessly, laughter filled the air, and as the hours melted away, 
                        their souls intertwined through the virtual waves.
                    </p>

                    <p class="mt-4 text-white justified">
                        From pixels to pictures, their connection grew stronger, 
                        painting a vivid picture of a place they both belonged. 
                        Video calls illuminated their nights, bridging the physical distance and igniting a 
                        flame of love that burned brighter with each passing day.
                    </p>

                    <p class="mt-4 text-white justified">
                        Though lockdowns kept them apart, their love was not dampened. With hearts full of courage, 
                        they embarked on a daring journey, driving long distances to be in each other's arms. 
                        Overcoming fears and uncertainties, they navigated checkpoints and embraced fate's divine dance,
                        knowing that their love was worth every risk.
                    </p>

                    <p class="mt-4 text-white justified">
                        Through trials and tribulations, their love remained unbreakable. 
                        With trembling hearts, they declared their love, and tears mingled with laughter as they 
                        opened the doors to a future together. As their first anniversary approached, they celebrated 
                        the milestone of a year filled with love, growth, and unwavering commitment.
                    </p>

                    <p class="mt-4 text-white justified">
                        Grateful for each other's existence, they cherished the moments they shared and stood together, 
                        bound by a love so grand. Through it all, they remained by each other's side, loving fiercely 
                        and finding pride in the depths of their hearts. On this special day, they reflected on the 
                        journey they had embarked upon, knowing that their love story was meant to be, just the two of 
                        them, forever.
                    </p>

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
  background-image: url('../assets/col_car.jpeg');
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