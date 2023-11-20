import { useState } from "react";
import BookInfo from "./components/BookInfo";
import SeatSelector from "./components/SeatSelector";
import BookResults from "./components/BookResults";
import { useDispatch } from "react-redux";
import { confirmBookingAction } from "./store";
import "./App.css";

function App() {
  const [selecting, setSelecting] = useState(false);
  const [info, setInfo] = useState({ name: "", tickets: 0 });
  const dispatch = useDispatch();

  function onStartSelecting(name, tickets) {
    const ticketsNum = parseInt(tickets);
    if (ticketsNum > 0) {
      setInfo({ name, tickets: ticketsNum });
      setSelecting(true);
    }
  }

  function onConfirmClick(seats) {
    const bookInfo = {
      name: info.name,
      seats,
    };
    dispatch(confirmBookingAction({ info: bookInfo }));
  }

  return (
    <div>
      <BookInfo isSelecting={selecting} onStartSelecting={onStartSelecting} />
      <SeatSelector
        isSelecting={selecting}
        onConfirmClick={onConfirmClick}
        onCancelClick={() => {
          setSelecting(false);
          setInfo({ name: "", tickets: 0 });
        }}
        tickets={info.tickets}
      />
      <BookResults />
    </div>
  );
}

export default App;
