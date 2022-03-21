<template>
  <div class="auth">
    <h1>Введите ник</h1>
    <input v-model="name" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {},
  components: {},
  computed: {}
})
export default class Auth extends Vue {}
</script>

<style lang="scss">
.auth {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  font-size: 16px;
}
</style>
