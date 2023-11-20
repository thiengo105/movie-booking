import { useState } from "react";
import { useSelector } from "react-redux";
import Seat from "../Seat/Seat";

const ROWS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const COLS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const SeatSelector = ({
  isSelecting = false,
  onCancelClick,
  onConfirmClick,
  tickets = 0,
}) => {
  const [selected, setSelected] = useState(new Set());
  const { selectedSeats } = useSelector((state) => state.booking);

  function onChange(e) {
    if (e.target.checked) {
      if (selected.size < tickets && tickets > 0) {
        setSelected((prev) => new Set(prev).add(e.target.value));
      }
    } else {
      setSelected((prev) => {
        const deleted = new Set(prev);
        deleted.delete(e.target.value);
        return deleted;
      });
    }
  }

  function onConfirm() {
    const selectedSeats = Array.from(selected);
    onConfirmClick(selectedSeats);
    onCancel();
  }

  function onCancel() {
    setSelected(new Set());
    onCancelClick();
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            {COLS.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{row}</td>
              {COLS.map((col, colIndex) => (
                <td key={rowIndex + colIndex}>
                  <Seat
                    value={row + col}
                    disabled={!isSelecting || selectedSeats.has(row + col)}
                    checked={
                      selected.has(row + col) || selectedSeats.has(row + col)
                    }
                    onChange={onChange}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {isSelecting && (
        <div>
          <button onClick={onConfirm} disabled={tickets !== selected.size}>
            Confirm
          </button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default SeatSelector;
