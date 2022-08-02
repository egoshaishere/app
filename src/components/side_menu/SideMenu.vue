<template>
  <div class="side_menu__container">
    <div class="hide_show" v-on:click="hide">
      <div class="side_menu__button" v-if="isOpen">&#9756;</div>
      <div class="side_menu__button" v-if="!isOpen">&#9758;</div>
    </div>
    <BigMenu v-if="isOpen" />
    <SmallMenu v-if="!isOpen" />
  </div>
</template>

<script>
import SmallMenu from "./SmallMenu.vue";
import BigMenu from "./BigMenu.vue";

export default {
  name: "SideMenu",
  data() {
    return {
      isOpen: false,
    };
  },
  components: {
    SmallMenu,
    BigMenu,
    SmallMenu,
  },
  methods: {
    hide() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
.side_menu__container {
  padding: 5px;
  background: #42b983;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 4px 5px #00000070;
}

.hide_show {
  cursor: pointer;
  border: solid 1.5px rgb(255, 255, 255);
  border-radius: 10px;
  width: 30px;
  height: 25px;
}

.side_menu__button {
  color: #ffffff;
  font-weight: 550;
}
</style>