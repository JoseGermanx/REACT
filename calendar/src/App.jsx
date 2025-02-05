import { useState } from "react";
import "./App.css";
import Calendar from "react-calendar";
import ReservaModal from "./ReservaModal";
import { Tooltip as ReactTooltip } from "react-tooltip";
// import 'react-calendar/dist/Calendar.css'
// import 'react-tooltip/dist/react-tooltip.css'
import { infoDias } from "./data/data";

// Información adicional para cada día

function App() {
  const [value, onChange] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => {
    setSelectedEvent(event);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
  };

  // Función para renderizar contenido adicional en cada día
  const renderTileContent = ({ date, view }) => {
    const dateString = date.toISOString().split("T")[0];
    return view === "month" && infoDias[dateString]
      ? infoDias[dateString].reservations.map((reservation, index) => (
          <>
            <div
              key={index}
              className={`calendar-agenda bg-${reservation.canal}`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              data-tooltip-id={index}
              onClick={() => openModal(reservation)}
            >
              <span>
                {reservation.cabain} {reservation.guest}
              </span>
            </div>
            <ReactTooltip
              id={`${index}`}
              content={`Cabaña ${reservation.cabain}, Canal ${reservation.canal}`}
            />
          </>
        ))
      : null;
  };

  return (
    <>
      <Calendar
        onChange={onChange}
        value={value}
        tileContent={renderTileContent}
      />
      <ReservaModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        event={selectedEvent}
      />
    </>
  );
}

export default App;
