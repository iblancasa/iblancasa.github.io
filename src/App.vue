<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      breakpoint="lg"
      collapsedWidth="0"
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
    <div class="logo" />
    <SideMenu/>
    </a-layout-sider>

    <a-layout>
      <Header @showMenu="showSideMenu"/>

      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        Content
      </a-layout-content>

    </a-layout>
  </a-layout>
</template>

<script>

import SideMenu from "./components/SideMenu.vue";
import Header from "./components/Header.vue";

export default {
  components: {
    SideMenu,
    Header
  },
  data(){
    return {collapsed: false};
  },
  methods:{
    showSideMenu(collapsed){
      this.collapsed = collapsed;
    }
  }

}
</script>
