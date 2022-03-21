<template>
  <div class="maincontainer">
    <div class="cringe">
      <div>
        <div class="message" v-for="obj in all" :key="obj">
          <p>{{ obj.name }}</p>
          <p class="message-text" v-html="obj.message"></p>
        </div>
      </div>
    </div>
    <div class="aboba">
      <div class="aboba-input container">
        <textarea
          id="input"
          ref="input"
          style="resize: none"
          v-model="message"
          name="message"
          placeholder="Напишите сообщение..."
          @keyup.enter.exact="tmp(message, true)"
        />
        <div class="aboba-input-icon" @click="tmp(message, false)">
          <font-awesome-icon icon="cannabis" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { useStore } from '../store/index'
import { w3cwebsocket } from 'websocket'

const Websocket = w3cwebsocket
const client = new Websocket('ws://localhost:30/', 'echo-protocol')
client.onopen = () => {
  console.log('connected')
}
let succ = false

@Options({
  props: {},
  components: {},
  computed: {}
})
export default class Main extends Vue {
  mounted () {
    const store = useStore()
    const smth = document.getElementById('input') as HTMLElement
    smth.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        succ = true
      }
    })
    client.onmessage = (res) => {
      console.log(res)
      const firstParse = JSON.parse(res.data as string)
      console.log(firstParse)
      const secondParse = JSON.parse(firstParse.toString())
      console.log(secondParse)

      // console.log("action: ", smt.message.replace("\n", "</br>"));
      secondParse.message = secondParse.message.replaceAll('\n', '</br>')
      store.pushNewMessage(secondParse)
    }
  }

  public message!: string;

  private store = useStore();
  private all = this.store.getMessages;

  private tmp (msg: string, variable: boolean) {
    if ((msg !== undefined && succ) || !variable) {
      const temp = {
        name: this.store.getName + ': ',
        message: msg
      }
      if (temp.message.length !== 0) {
        const jsonString = JSON.stringify(temp)
        client.send(jsonString)
      }

      succ = false
      this.message = ''
    }
  }
}
</script>

<style lang="scss">
.container {
  display: flex;
  width: 70%;
}
.maincontainer {
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
}
.cringe {
  width: 100%;
  scrollbar-width: thin;
  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .message {
      padding: 0px 20px 0px 20px;
      display: flex;
      flex-direction: row;
      gap: 15px;
      list-style: none;
      p {
        margin: 0;
      }
      &-text {
        word-break: break-word;
      }
    }
  }

  padding-top: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background-color: rgb(51, 51, 54);
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(129, 140, 153);
  }
}
.aboba {
  margin-top: auto;
  display: flex;
  justify-content: center;
  background-color: rgb(68, 68, 70) !important;
  width: 100%;
  &-input {
    width: 80%;
    background-color: rgb(68, 68, 70) !important;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px;
    textarea {
      padding: 11px 15px 13px 15px;
      width: 100%;
      height: 100px;
      border: 1px solid rgb(129, 140, 153);
      background-color: rgb(68, 68, 70);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      color: white;
      font-size: 16px;
      outline: none;
      &::-webkit-scrollbar {
        background-color: rgb(68, 68, 70);
        width: 5px;
      }
      &::-webkit-scrollbar-thumb {
        background: rgb(129, 140, 153);
      }
    }
    input {
      color: white;
      font-size: 14px;
      padding: 10px;
      max-width: 80%;
      width: 100%;
      background-color: rgb(68, 68, 70) !important;
      border-radius: 6px;
      word-wrap: break-word;
    }
    &-icon {
      color: #222226;
      font-size: 100px;
      transition: ease-in-out 0.15s;
      &:hover {
        color: rgb(129, 140, 153);
      }
    }
  }
}
</style>
