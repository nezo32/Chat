<template>
  <div class="bg"></div>
  <div class="auth">
    <input @keyup.enter.exact="hui" v-model="name" maxlength="20" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { useStore } from '../store/index'

@Options({
  props: {},
  components: {},
  computed: {}
})
export default class Auth extends Vue {
  private store = useStore();
  private name!: string;
  private hui () {
    this.store.setName(this.name)
    this.$router.push('/chat')
  }
}
</script>

<style lang="scss">
.bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #222226;
}
.auth {
  position: relative;
  top: 50%;
  display: flex;
  justify-content: center;
  input {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: white;
    font-size: 25px;
    border: 1px solid rgb(129, 140, 153);
    outline: none;
    padding: 11px 15px 13px 15px;
    font-weight: 600;
    background-color: #222226;
  }
}
</style>
