<template>
    <div class="galaxy">
      <div class="stars">
        <div v-for="index in 100" :key="index" class="star" :style="getRandomStarStyle" />
      </div>
    </div>
  </template>
  
  <style scoped>
  .galaxy {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #000;
    overflow: hidden;
  }
  
  .stars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    animation: starsAnimation 10s linear infinite;
  }
  
  @keyframes starsAnimation {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100vh);
    }
  }
  
  .stars::before {
    content: "";
    position: absolute;
    top: -100vh;
    left: 0;
    width: 1px;
    height: 1px;
    background-color: #fff;
    opacity: 0.8;
    animation: starAnimation 10s linear infinite;
  }
  
  @keyframes starAnimation {
    0% {
      top: -100vh;
      left: calc(100% * var(--randomX));
      width: calc(0.3rem + var(--randomSize));
      height: calc(0.3rem + var(--randomSize));
      opacity: 0.8;
    }
    100% {
      top: 100vh;
      left: calc(100% * var(--randomX));
      width: calc(0.3rem + var(--randomSize));
      height: calc(0.3rem + var(--randomSize));
      opacity: 0;
    }
  }
</style>

<script>
export default{
    computed: {
        getRandomStarStyle() {
            const randomX = Math.random();
            const randomSize = Math.random() * 2 + 0.3;
            return {
              '--randomX': randomX,
              '--randomSize': randomSize + 'rem',
            };
        },
    },
}
</script>
