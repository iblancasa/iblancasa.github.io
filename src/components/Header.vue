<template>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> show()"
        />
      </a-layout-header>
</template>

<script>


export default {
  name: 'Header',
  data() {
    return {collapsed: false};
  },
  methods : {
        show() {
            this.collapsed = !this.collapsed;
            this.$emit("showMenu", this.collapsed);
        }
}
}
</script>

<style>
    #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color .3s;
    }

    #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
    }

    #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255,255,255,.2);
    margin: 16px;
    }
</style>