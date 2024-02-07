import * as React from 'react';
import Form from './Component/Form';
import {useSelector,useDispatch} from 'react-redux';
import {changeModal} from './features/modal/modalSlice';
import Modal from 'react-modal';
import TableMaterialUI from './Component/Table';
import Button from '@mui/material/Button';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Modal.setAppElement('#yourAppElement');

function App(props) {
  const openModal1 = useSelector((state) => state.modal.setIsOpen);
  const dispatch = useDispatch()
  let subtitle;
  // const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    dispatch(changeModal());
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#00ff00';
  }

  function closeModal() {
    dispatch(changeModal());
  }
  return (
    <div className='flex flex-col justify-around items-center bg-slate-300 w-full h-screen'>
    <Button variant="contained" onClick={openModal} style={{fontFamily:'iranyekan'}}>ثبت نام</Button>
    <Modal
      isOpen={openModal1}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2 className=' pb-4' ref={(_subtitle) => (subtitle = _subtitle)}>سلام لطفا برای ثبت نام اطلاعات خود را تکمیل نمایید</h2>
      <Button sx={{mb:2}} variant="contained" color="error" onClick={closeModal} 
         style={{fontFamily:'iranyekan'}}
      >بستن</Button>
      <Form />
      {/* <form>
        <input />
        <button>بازگشت</button>
      
      </form> */}
    </Modal>
    
    <TableMaterialUI/>
  </div>
  );
}

export default App;
