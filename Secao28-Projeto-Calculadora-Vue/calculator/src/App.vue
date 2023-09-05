<template>
  <div id="app">
    <h1>Calculadora</h1>
    <CalculatorVue />
  </div>
</template>

<script>
import CalculatorVue from './main/CalculatorVue'

export default {
  name: 'App',
  components: { CalculatorVue }
}
</script>

<style>
@font-face {
  font-family: "RobotoMono";
  src: url("./fonts/RobotoMono-Thin.ttf");
}

* {
  font-family: "RobotoMono", monospace;
}

body {
  display: flex;
  margin: 0; 
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;

  color: #fff;
  background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
}
</style>
