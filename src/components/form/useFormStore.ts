import create from 'zustand'
import { persist } from 'zustand/middleware'
import { ChangeEventHandler } from 'react'

type IProps = {
  formData: Record<string, string>,
  list: string[],
  onChangeForm: ChangeEventHandler<HTMLInputElement>
}

export const useEscolaFormStore = create(
  persist<IProps>((set) => {
    return {
      formData: {},
      list: ['isso', 'não deveria', 're-renderizar'],
      onChangeForm: (e) => {
        set((state) => {
          console.log('e.target.value =>', e.target.name)
          const key = e.target.name as keyof IProps['formData']
          state.formData[key] = e.target.value
          return { ...state }
        })
      },
    }
  }, { name: 'Ferronato' })
)
