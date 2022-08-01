<template>
  <div class="home">
    <SideMenu id="menu" />
    <CardList id="list"/>
  </div>
</template>

<script>
import CardList from '@/components/CardList.vue'
import SideMenu from '@/components/side_menu/SideMenu.vue'

export default {
  name: 'HomeView',
  components: {
    CardList,
    SideMenu
  }
}
</script>

<style>
#menu {
  position: absolute;
  z-index: 100;
}

#list {
  position: relative;
  z-index: 1;
}
</style>
