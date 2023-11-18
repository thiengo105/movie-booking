export const confirmBookingAction = (info) => {
  return {
    type: "booking/confirm",
    payload: info,
  };
};
