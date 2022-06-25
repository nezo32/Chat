<template>
  <div class="main">
    <div class="main-inner"><router-view /></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Main from './views/Main.vue'
import { useStore } from './store/index'

@Options({
  props: {},
  components: { Main },
  computed: {}
})
export default class App extends Vue {
  private store = useStore();

  mounted () {
    const username = localStorage.getItem('username')
    if (username != null) {
      this.store.setName(username)
      this.$router.push('/chat')
    }
  }
}
</script>

<style lang="scss">
.main {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #222226;
  display: flex;
  justify-content: center;
  &-inner {
    position: relative;
    width: 75%;
    background-color: rgb(51, 51, 54);
  }
}
</style>
