import create from 'zustand'

type IProps = {
  bears: number,
  increasePopulation(): void
  removeAllBears(): void
}

export const useEscolaStore2 = create<IProps>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
