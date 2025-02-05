import Modal from 'react-modal';

Modal.setAppElement('#root');

// eslint-disable-next-line react/prop-types
const ReservaModal = ({ isOpen, onRequestClose, event }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Event Details"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Detalle de la reserva</h2>
      {event ? (
        <div>
          <p><strong>Cabaña:</strong> {event.cabain}</p>
          <p><strong>Canal:</strong> {event.canal}</p>
        </div>
      ) : (
        <p>No hay información del evento.</p>
      )}
      <button onClick={onRequestClose}>Cerrar</button>
    </Modal>
  );
};

export default ReservaModal;