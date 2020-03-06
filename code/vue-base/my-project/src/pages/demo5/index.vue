<template>
  <div>
    <div>Class与Style动态绑定</div><hr>
    <h4>Class绑定</h4><hr>
    <ol>
      <li>第一种绑定方式
        <div class="static" v-bind:class="{'active': isActive, 'text-danger': hasError}">
        <!-- <div class="static" v-bind:class="{'active', 'text-danger'}"> -->
          class1
        </div>
      </li>
      <li>第二种绑定方式
        <div :class="classObject">class2</div>
      </li>
      <li>第三种方式
        <div :class="[activeClass, errorClass]">class3</div>
        <!-- <div :class="['active', 'text-danger']">class3</div> -->
      </li>
    </ol>
    <hr>
    <h4>Style绑定</h4>
    <ol>
      <li>第一种
        <div :style="{color: activeColor, fontSize: fontSize + 'px'}">style1</div>
      </li>
      <li>第二种
        <div :style="styleObject">style2</div>
      </li>
      <li>第三种
        <div :style="[baseStyle, overridingStyles]">style3</div>
      </li>
    </ol>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        isActive: true,
        hasError: false,
        classObject: {
          'active': true,
          'text-danger': true
        },
        activeClass: 'active',
        errorClass: 'text-danger',

        activeColor: 'green',
        fontSize: 20,
        styleObject: {
          color: 'green',
          fontSize: '20px',
        },
        baseStyle: {
          fontSize: '22px'
        },
        overridingStyles: {
          color: 'yellow'
        }
      }
    }
  }
</script>

<style lang='scss'>
  $color-active: red;
  $color-text-danger: blue;

  .active {
    color: $color-active;
  }

  .text-danger {
    color: $color-text-danger;
  }

</style>
