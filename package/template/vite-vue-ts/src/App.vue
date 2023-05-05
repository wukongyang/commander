

<template>
  <div class="loading">
    <div class='loader-container'>
      <div class='loader-child' />
      <div class='loader-child' />
      <div class='loader-child' />
    </div>
    <h1 class="platform">Vite Vue Ts</h1>
  </div>
</template>

<style scoped lang="less">
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.platform{
  background-image: -webkit-linear-gradient(bottom, rgb(38, 0, 255), #fd0303, rgb(255, 123, 0));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.loader-container {
  position: relative;
  perspective: 780px;
  width: 100px;
  height: 100px;
}

.loader-child {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 50%;

  &:nth-of-type(1) {
    top: 0%;
    left: 0%;
    animation: rotate-one 1.15s linear infinite;
    border-bottom: 3px solid #5c5edc;
  }

  &:nth-of-type(2) {
    top: 0%;
    right: 0%;
    animation: rotate-two 1.15s linear infinite;
    border-right: 3px solid #9e85c3;
  }

  &:nth-of-type(3) {
    right: 0%;
    bottom: 0%;
    animation: rotate-three 1.15s linear infinite;
    border-top: 3px solid #e9908a;
  }
}

@keyframes rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }

  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }

  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }

  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>
