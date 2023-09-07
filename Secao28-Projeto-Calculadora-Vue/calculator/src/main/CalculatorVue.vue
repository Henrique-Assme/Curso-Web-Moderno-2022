<template>
  <div class="calculator">
    <DisplayVue :value="displayValue"/>
    <ButtonVue label="AC" triple @onClick="clearMemory"/>
    <ButtonVue label="/" operation @onClick="setOperation"/>
    <ButtonVue label="7" @onClick="setDigit"/>
    <ButtonVue label="8" @onClick="setDigit"/>
    <ButtonVue label="9" @onClick="setDigit"/>
    <ButtonVue label="*" operation @onClick="setOperation"/>
    <ButtonVue label="4" @onClick="setDigit"/>
    <ButtonVue label="5" @onClick="setDigit"/>
    <ButtonVue label="6" @onClick="setDigit"/>
    <ButtonVue label="-" operation @onClick="setOperation"/>
    <ButtonVue label="1" @onClick="setDigit"/>
    <ButtonVue label="2" @onClick="setDigit"/>
    <ButtonVue label="3" @onClick="setDigit"/>
    <ButtonVue label="+" operation @onClick="setOperation"/>
    <ButtonVue label="0" double @onClick="setDigit"/>
    <ButtonVue label="." @onClick="setDigit"/>
    <ButtonVue label="=" operation @onClick="equalOperation"/>
  </div>
</template>


<script>
import DisplayVue from "../components/DisplayVue.vue"
import ButtonVue from "../components/ButtonVue.vue"

export default {
  data: function() {
    return {
      displayValue: '0',
      clearDisplay: false,
      operation: null,
      lastOperation: null,
      values: [0, 0],
      current: 0
    }
  },
  components: { ButtonVue, DisplayVue },
  methods: {
    clearMemory() {
      Object.assign(this.$data, this.$options.data())
    },
    equalOperation(equals){
        if(this.lastOperation === '=' || this.lastOperation === null){
          this.setOperation(this.operation)
          this.lastOperation = equals
          this.clearDisplay = false
        } else {
          this.setOperation(this.operation)
        }
        this.current = 0
    },
    setOperation(operation) {
      this.lastOperation = this.operation
      if (this.current === 0) {
        this.operation = operation
        this.current = 1
        this.clearDisplay = true
      } else {
          const currentOperation = this.operation

          const values = [...this.values]
          if(currentOperation === '/') {
              values[0] = values[0] / values[1]
          }else if(currentOperation === '-') {
              values[0] = values[0] - values[1]
          }else if(currentOperation === '*') {
              values[0] = values[0] * values[1]
          }else if(currentOperation === '+') {
              values[0] = values[0] + values[1]
          }
          this.operation = operation
          this.current = 1
          this.clearDisplay = true
          this.values = values
          this.displayValue = `${values[0]}`
      }
    },
    setDigit(digit) {
      if(digit === '.' && this.displayValue.includes('.')) {
          return
      }

      const lastEquals = this.lastOperation === '='
      const clearDisplay = 
          (this.displayValue === '0' && digit !== '.') 
          || lastEquals
          || this.clearDisplay
      const currentValue = clearDisplay ? '' : this.displayValue
      const displayValue = currentValue + digit
      this.displayValue = displayValue === '.' ? '0.' : displayValue
      this.clearDisplay = false
      this.current = lastEquals ? 0 : this.current
      const i = this.current
      const newValue = parseFloat(displayValue)
      this.values[i] = newValue
    }
  }
}
</script>

<style>
.calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>