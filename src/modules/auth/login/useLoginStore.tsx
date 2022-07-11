import { FormEventHandler } from 'react'
import create from 'zustand'
import produce from 'immer'
import { useAuthStore } from '../useAuthStore'

interface IUseLoginStore {
  handleSubmit: FormEventHandler<HTMLDivElement>
  errosMessage: {
    username: string
    password: string
  }
}
export const useLoginStore = create<IUseLoginStore>((set) => ({
  handleSubmit: (e) => {
    e.preventDefault()
    const { username, password } = getFormData(e.currentTarget)
    console.log('data =>', { username, password })
    let isValid = 0
    if (!username || username.length <= 3) {
      set(produce(state => { state.errosMessage.username = 'user inválido' }))
    } else {
      set(produce(state => { state.errosMessage.username = '' }))
      isValid++
    }

    if (!password || password.length <= 3) {
      set(produce(state => { state.errosMessage.password = 'pwd inválido' }))
    } else {
      set(produce(state => { state.errosMessage.password = '' }))
      isValid++
    }
    if (isValid === 2) useAuthStore.getState().signIn(username, password)
  },

  errosMessage: {
    username: '',
    password: '',
  }
}))

function getFormData(element: any) {
  const returnData: Record<string, string> = {}
  console.log(element.length);

  for (let i = 0; i < element.length; i++) {
    const data = element[i]
    if (data.name != null && data.name != "") {
      returnData[data.name] = data.value;
    }
  }
  return returnData
}
