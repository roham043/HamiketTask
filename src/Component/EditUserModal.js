import * as React from 'react';
import EditUserForm from './EditUserForm';
import { useSelector, useDispatch } from 'react-redux';
import { changeModal } from '../features/modal/EditFormModalSlice';
import Modal from 'react-modal';
import { FaUserEdit } from "react-icons/fa";
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

const EditUserModal = (id) => {
    let subtitle;
    
    const modalIsOpen = useSelector((state) => state.editFormModal.setIsOpen)
    const dispatch = useDispatch()

    function openModal() {
        dispatch(changeModal());
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        dispatch(changeModal());
    }
    return (
        <div>
            <FaUserEdit 
            style={{ fontSize: '30px', color: 'green', paddingRight: '5px' }}
            className='hover:cursor-pointer'
            onClick={openModal}></FaUserEdit>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>لطفا اطلاعات خود را ویرایش کنید</h2>
                <button onClick={closeModal}>بستن</button>
                
                <EditUserForm key={id} id={id}/>
               
            </Modal>
        </div>
    );
}

export default EditUserModal;
