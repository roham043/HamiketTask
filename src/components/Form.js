import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../feacture/userSlice';
import ReactFileReader from 'react-file-reader';
import { useForm } from 'react-hook-form';
//--------- material ui import----------------------
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
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
    width: 400,
    bgcolor: 'white',
    borderRadius: 5,
    boxShadow: 4,
    p: 3,
    fontFamily:'iranyekan'

};

function Form() {

    //----------fro material ui modal-----------
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //-------------------------------------------------------
    const dispatch = useDispatch();

    const [fullname, setFullname] = useState('');
    const [gender, setGender] = useState('');
    const [birthday, setBirthday] = useState(null);
    const [age, setAge] = useState('');
    const [image, setImage] = useState('')
    //------------for material ui date picker-------------------
    const d = new Date(birthday);
    let date = new Intl.DateTimeFormat('fa-IR').format(d);
    const existingTheme = useTheme();
    const theme = React.useMemo(
        () => createTheme({ direction: 'rtl' }, existingTheme),
        [existingTheme],
    );
    //--------------for data reader---------------
    const handleFiles = (files) => {
        setImage(files.base64)
    }

    //-------------------------------------------
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { fullname, gender, birthday, age, image }
    })
    const onSubmit = (data) => {
        dispatch(addUser({
            id: Math.random(),
            fullname: data.fullname,
            gender: data.gender,
            birthday: date,
            age: data.age,
            image: image,

        }))
        setOpen(false)
    }

    return (
        <div>
            <Button variant='contained'
                sx={{ fontFamily: 'iranyekan' }}
                onClick={handleOpen}>ثبت نام</Button>
            <Modal
                sx={{ backgroundColor: 'white' }}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <h1
                            className=' flex justify-center mb-4'
                        >لطفا اطلاعات خود را تکمیل نمایید</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <TextField
                            {...register('fullname', { required: true })}
                            sx={{ fontFamily: 'iranyekan', width: '100%', }}
                            className='bg-slate-100'
                            id="outlined-basic" label="نام و نام خانوادگی"
                            variant="outlined"
                            // onChange={(e) => setFullname(e.target.value)}
                            type='text' placeholder='نام و نام خانوادگی' /><br />
                        {errors.fullname &&
                            <p className='text-red-500 text-sm'
                            >این فیلد نباید خالی باشد
                            </p>}
                        {/* {--------------------------------------------------------------}*/}
                        <FormControl>
                            <FormLabel
                                sx={{ fontFamily: 'iranyekan', marginTop: '10px' }}
                                id="demo-row-radio-buttons-group-label">جنسیت:</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel
                                    value="مرد" control={<Radio />} label="مرد"
                                    {...register('gender')}
                                />

                                <FormControlLabel
                                    value="زن" control={<Radio />} label="زن"
                                    {...register('gender', {
                                        required: {
                                            value: 1,
                                            message: "این فیلد نباید خالی باشد"
                                        }
                                    })}
                                />
                            </RadioGroup>
                        </FormControl>
                        {
                            errors.gender &&
                            <p className='text-red-500 text-sm'>
                                {errors.gender.message}
                            </p>
                        }
                        <br />
                        {/* {----------------------------------------------------} */}
                        <ThemeProvider theme={theme}>
                            <div
                                className=' mt-5 mb-5 flex justify-between items-center'
                                dir="rtl">
                                <span>تاریخ تولد : </span>
                                <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                                    <DatePicker
                                        sx={{ fontFamily: 'iranyekan' }}
                                        className='bg-slate-100'
                                        value={birthday} onChange={(newValue) => setBirthday(newValue)}
                                        defaultValue={new Date(2022, 1, 1)} />
                                </LocalizationProvider>
                            </div>
                        </ThemeProvider>

                        {/* {-------------------------------------------------} */}
                        <div className='w-full flex  justify-between items-center'>
                            <span>سن :</span>
                            <TextField
                                // onChange={(e) => setAge(e.target.value)}
                                {...register('age', {
                                    required: { value: 1, message: 'این فیلد نباید خالی باشد' },
                                    min: { value: 18, message: 'سن شما باید بیشتر از 18 سال باشد' },
                                    max: { value: 35, message: 'سن شما باید کمتر از 35سال باشد' }
                                })}
                                sx={{ width: '258px' }}
                                className='bg-slate-100 '
                                id="outlined-size-small"
                                size="small"
                                type='number' />

                        </div>
                        {
                            errors.age &&
                            <p className='text-red-500 text-sm'>
                                {errors.age.message}
                            </p>
                        }
                        {/* {----------------------------------------} */}
                        <div className='mt-5 flex flex-col justify-center items-center'>
                            <ReactFileReader fileTypes={[".png", ".jpg"]} base64={true} multipleFiles={true} handleFiles={handleFiles}>
                                <span className=" px-5  bg-green-400 text-white rounded-lg hover:cursor-pointer">انتخاب عکس</span>
                            </ReactFileReader>
                            <img
                                src={image}
                                className="w-20 h-20 mt-4 "
                                alt="" />
                        </div>
                        <div className=' flex justify-center items-center mt-5  	'>
                            <button
                                className='bg-blue-700 text-white w-72  p-2   rounded-full	hover:cursor-pointer hover:bg-blue-950'
                                type="submit" >ثبت نام</button>
                        </div>
                    </form>
                </Box>
            </Modal>

        </div>
    )
}

export default Form;