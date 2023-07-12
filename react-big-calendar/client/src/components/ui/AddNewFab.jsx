
import '../../styles/calendar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CalendarModal from '../calendar/CalendarModal';

const AddNewFab = ({
 
  
  modalIsOpen,
  setmodalIsOpen,
  setActiveEvent,
  activeEvent,
}) => {
  return (
    <>
      <button
        className="btn btn-primary fab"
        onClick={() => setmodalIsOpen(!modalIsOpen)}
      >
        <FontAwesomeIcon icon={faPlus} style={{ color: 'white' }} size="xl" />
      </button>
      
      {modalIsOpen ? (
        <CalendarModal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setmodalIsOpen}
      
         
          onClose={() => setModalIsOpen(false)}
          setActiveEvent={setActiveEvent}
          activeEvent={activeEvent}
        />
      ) : null}
    </>
  );
};

export default AddNewFab