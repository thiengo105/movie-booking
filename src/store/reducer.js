const initialState = {
  selectedSeats: new Set(),
  bookingInfo: [],
};

export function bookingReducer(state = initialState, action) {
  switch (action.type) {
    case "booking/confirm": {
      console.log(action.payload);
      const { info } = action.payload;
      const newSelected = new Set(state.selectedSeats);
      info.seats.forEach((seat) => {
        newSelected.add(seat);
      });

      return {
        ...state,
        selectedSeats: newSelected,
        bookingInfo: [...state.bookingInfo, info],
      };
    }
    default:
      return { ...state };
  }
}
