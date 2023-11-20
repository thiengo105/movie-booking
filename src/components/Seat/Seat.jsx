import { forwardRef } from "react";
import { clsx } from "clsx";
import "./Seat.css";

const Seat = forwardRef((props, ref) => {
  const className = clsx("seat", {
    "seat--disabled": props.disabled,
    "seat--booked": props.disabled && props.checked,
    "seat--selected": !props.disabled && props.checked,
  });
  return (
    <label className={className}>
      <input type="checkbox" hidden ref={ref} {...props} />
    </label>
  );
});

Seat.displayName = "Seat";

export default Seat;
