import create from 'zustand'

type IProps = {
  bears: number,
  group: boolean,
  increasePopulation(): void
  removeAllBears(): void
}

export const useEscolaStore = create<IProps>((set) => ({
  bears: 0,
  group: false,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
