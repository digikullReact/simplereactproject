import create from 'zustand'

const useStore = create(set => ({
  bookedSeats: [],
  addBookedSeats: (bookedSeat) => set(state => {
    debugger;
    state.bookedSeats.push(bookedSeat);
    state.bookedSeats=[...state.bookedSeats];
    
  }),
  removeAllBears: () => set({ bears: 0 })
}))

export default useStore;