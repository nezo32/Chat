import { defineStore } from 'pinia'

interface Message { name: string, message: string }

interface State {
  name: string,
  msg: Array<{ name: string, message: string }>,
}

export const useStore = defineStore('main', {
  state: (): State => ({
    name: '',
    msg: []
  }),
  getters: {
    getName: (state) => state.name,
    getMessages: (state) => state.msg
  },
  actions: {
    setName (name: string) {
      this.name = name
    },
    pushNewMessage (obj: Message) {
      this.msg.push(obj)
    }
  }

})
