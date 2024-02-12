import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../feacture/userSlice';
import ReactFileReader from 'react-file-reader';
import { useForm } from 'react-hook-form';
import { CiEdit } from "react-icons/ci";
//-----------modal import-----------------------
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import useTheme from '@mui/system/useTheme';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'white',
    borderRadius: 5,
    boxShadow: 5,
    p: 4,
};

function EditForm(id) {
    //-----------for modal----------------
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //------------------------------------------------
    const userDataList = useSelector((state) => state.users.UserDataList);
    const index = userDataList.findIndex((user) => user.id === id.id);
    // console.log(userDataList[index].fullname)
    //-------------------------------------------------------------------
    const dispatch = useDispatch();

    const [editFullname, setEditfullname] = useState('');
    const [editGender, setEditGender] = useState('');
    const [editBirthday, setEditBirthday] = useState(null);
    const [editAge, setEditAge] = useState('');
    const [editImage, setEditImage] = useState('');
    //------------for material ui date picker-------------------
    const d = new Date(editBirthday);
    let date = new Intl.DateTimeFormat('fa-IR').format(d);
    const existingTheme = useTheme();
    const theme = React.useMemo(
        () => createTheme({ direction: 'rtl' }, existingTheme),
        [existingTheme],
    );

    const handleFiles = (files) => {
        setEditImage(files.base64)
    }
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { editFullname, editAge, editBirthday, editGender, editImage }
    })
    const onSubmit = (data) => {
        dispatch(editUser({
            id,
            fullname: data.editFullname,
            gender: data.editGender,
            birthday: date,
            age: data.editAge,
            image: editImage
        }))
        setOpen(false)
    }

    return (
        <div>
            <CiEdit
                className='text-3xl hover:cursor-pointer text-green-500'
                onClick={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <TextField
                            {...register('editFullname', { required: true })}
                            className='w-full'
                            label='نام و نام خانوادگی' variant="filled"
                            type='text' placeholder='نام و نام خانوادگی' id='editFullname' /><br />
                        {errors.editFullname &&
                            <p className='text-red-500 text-sm mb-3'
                            >این فیلد نباید خالی باشد
                            </p>}
                        {/* {--------------------------------------------} */}
                        <FormControl>
                            <FormLabel
                                className='mt-3'
                                sx={{ fontFamily: 'iranyekan' }}
                                id="demo-row-radio-buttons-group-label">جنسیت:</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel
                                    value="مرد" control={<Radio />} label="مرد"
                                    {...register('editGender')}
                                />

                                <FormControlLabel
                                    value="زن" control={<Radio />} label="زن"
                                    {...register('editGender', {
                                        required: {
                                            value: 1,
                                            message: "این فیلد نباید خالی باشد"
                                        }
                                    })}
                                />
                            </RadioGroup>
                        </FormControl>
                        {
                            errors.editGender &&
                            <p className='text-red-500 text-sm mb-3'>
                                {errors.editGender.message}

                            </p>
                        }
                        <br />
                        {/* {----------------------------------------------------} */}
                        <ThemeProvider theme={theme}>
                            <div
                                className='mt-3 flex justify-between items-center'
                                dir="rtl">
                                <span>تاریخ تولد:</span>
                                <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                                    <DatePicker
                                        value={editBirthday} onChange={(newValue) => setEditBirthday(newValue)}
                                        defaultValue={new Date(2022, 1, 1)}
                                        className='bg-slate-200'
                                        />
                                </LocalizationProvider>
                            </div>
                        </ThemeProvider>
                        <bt />
                        {/* {-------------------------------------------------} */}
                        <div className=' mt-3 flex  items-center'>
                            <span className=' ml-24'>سن:</span>
                            <TextField
                                {...register('editAge', {
                                    required: { value: 1, message: 'این فیلد نباید خالی باشد' },
                                    min: { value: 18, message: 'سن شما باید بیشتر از 18 سال باشد' },
                                    max: { value: 35, message: 'سن شما باید کمتر از 35سال باشد' }
                                })}
                                sx={{ width: '390px' }}
                                className='mr-24 bg-slate-200'
                                id="outlined-size-small"
                                size="small"
                                type='number' /><br />

                        </div>
                        {
                            errors.editAge &&
                            <p className='text-red-500 text-sm'>
                                {errors.editAge.message}
                            </p>
                        }
                        <br />
                        {/* {----------------------------------------} */}

                        <div className='mt-3  flex flex-col justify-center items-center'>
                            <ReactFileReader fileTypes={[".png", ".jpg"]} base64={true} multipleFiles={true} handleFiles={handleFiles}>
                                <span className=" px-5  bg-green-400 text-white rounded-lg hover:cursor-pointer">انتخاب عکس</span>
                            </ReactFileReader>
                            <img
                                src={editImage}
                                className="w-20 h-20 mt-5"
                                alt="" />
                        </div>
                        <div className='flex justify-center'>
                            <button
                                className='mt-3 rounded-3xl text-white bg-blue-400 w-1/2 p-3 hover:bg-blue-950'
                                type='submit'>ویرایش اطلاعات</button>
                        </div>
                    </form>
                </Box>
            </Modal>

        </div>
    )
}

export default EditForm