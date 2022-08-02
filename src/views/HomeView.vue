<template>
  <div class="home">
    <SideMenu id="menu" />
    <CardList id="list" />
    <EditModal v-if="showModal" @close="showModal = false" />
  </div>
</template>

<script>
import CardList from '@/components/CardList.vue'
import SideMenu from '@/components/side_menu/SideMenu.vue'
import EditModal from '@/components/EditModal.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    CardList,
    SideMenu,
    EditModal
  },
  methods: {
    ...mapGetters({getEditModalStatus: "edit/getEditModalStatus"})
  },
  computed: {
    showModal: function () {
      return this.getEditModalStatus()
    }
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
