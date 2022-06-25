import { defineStore } from 'pinia'

export interface Message { id: number, username: string, message: string }

interface State {
  name: string,
  msg: Array<Message>,
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
    },
    msgConcat (inputArray: Array<Message>) {
      this.msg = this.msg.concat(inputArray, this.msg)
    }
  }

})
