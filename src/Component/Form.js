import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeModal } from '../features/modal/modalSlice';
import { addUser } from '../features/users/usersSlice';
import { useForm } from 'react-hook-form';
import Input from '@mui/material/Input';
import ProfilePic from './ProfPic';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import useTheme from '@mui/system/useTheme';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { DtPicker } from 'react-calendar-datetime-picker'
// import 'react-calendar-datetime-picker/dist/style.css';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';


const ariaLabel = { 'aria-label': 'description' };
const Form = () => {
    // const fullname = useSelector((state) => state.data.fullname);
    // const sex = useSelector((state) => state.data.sex)
    // const birthday = useSelector((state) => state.data.birthday);
    // const age = useSelector((state) => state.data.age);
    // const image = useSelector((state) => state.data.image);
    const [fullname , setFullname] = useState('');
    const [sex , setSex] = useState('');
    const [birthday , setBirthday] = useState('');
    const [age , setAge] = useState('');
    const [image , setImage] = useState('');


    const dispatch = useDispatch()

    // const schema = yup.object().shape({
    //     fullname: yup.string().required('این فیلد نباید خالی باشد'),
    //     age: yup.number().positive().integer().min(18, 'باید بالاتر از 18 سال باشید').required(),


    // })

    // const { register, handleSubmit, formState: { errors } } = useForm({
    //     resolver: yupResolver(schema),
    //     defaultValues: { fullname, sex, birthday, age, image }
    // });
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { fullname, sex, birthday, age, image }
    });

    const onSubmit = (data) => {
        setFullname(data.fullname)
        setSex(data.sex)
        setBirthday(data.birthday)
        setAge(data.age)
        setImage(data.image)

        dispatch(changeModal())
        dispatch(addUser(
            {
                _id: Math.random(),
                data
            }
        ))
     
    }
    //----for persian date picker material ui-----
    const existingTheme = useTheme();
    const theme = React.useMemo(
        () => createTheme({ direction: 'rtl' }, existingTheme),
        [existingTheme],
    );
    //------------------------------------------------------------    

    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <div className='bg-slate-100 '>
                <Input placeholder=" نام و نام خانوادگی"
                    {...register('fullname', { required: true })}
                    sx={{ fontFamily: 'iranyekan', width: '100%' }}
                    inputProps={ariaLabel} />
                {errors.fullname &&
                    <p className='text-red-500 text-sm'
                    >این فیلد نباید خالی باشد
                    </p>}
            </div>
            {/* {-------------------------------------------------------------------------------------} */}

            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">جنسیت</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="زن" control={<Radio />} label="زن"
                        {...register('sex')}
                    />
                    <FormControlLabel value="مرد" control={<Radio />} label="مرد"
                        {...register('sex', {
                            required: {
                                value: 1,
                                message: "این فیلد نباید خالی باشد"
                            }
                        })}
                    />
                    {errors.sex &&
                        <p className='text-red-500 text-sm'>
                            {errors.sex.message}
                        </p>
                    }
                </RadioGroup>
            </FormControl>

            {/* <div className='bg-slate-100 '>
                <p className='mt-3'>جنسیت:</p>

                <input type="radio" id="male" name="male" value='مرد'
                    {...register('sex')} />
                <label htmlFor="html">مرد</label><br />


                <input type="radio" id="femail" name="femail" value='زن'
                    {...register('sex', {
                        required: {
                            value: 1,
                            message: "این فیلد نباید خالی باشد"
                        }
                    })} />
                <label htmlFor="css">زن</label><br />

                {errors.sex &&
                    <p className='text-red-500 text-sm'>
                        {errors.sex.message}
                    </p>
                }
            </div> */}
            <br />
            {/* {------------------------------------------------------------------} */}

            {/* <ThemeProvider theme={theme}>
                <div dir="rtl">
                    <LocalizationProvider dateAdapter={AdapterDateFnsJalali}
                      
                    >
                        <DateTimePicker label="تاریخ تولد" defaultValue={new Date(2022, 1, 1)} />
                        {errors.birthday &&
                            <p className='text-red-500 text-sm'>
                                {errors.birthday.message}
                            </p>
                        }
                    </LocalizationProvider >

                </div>
            </ThemeProvider> */}

            <label htmlFor="birthday">تاریخ تولد:</label>
            <input
                className=''
                type="date"
                id="birthday"
                name="birthday"
                local='fa'
                {...register('birthday', {
                    required: {
                        value: 1,
                        message: 'این فیلد نباید خالی باشد'
                    }
                })} />
            {errors.birthday &&
                <p className='text-red-500 text-sm'>
                    {errors.birthday.message}
                </p>
            }

            <br />
            {/* {------------------------------------------------------------------} */}
            <div className='bg-slate-100'>

                <Input
                    sx={{ fontFamily: 'iranyekan', width: '100%' }}
                    placeholder='سن'
                    className='mt-3'
                    type='number'
                    {...register('age',
                        {
                            required: { value: 1, message: "این فیلد نباید خالی باشد" },
                            min: { value: 18, message: "شما باید بزرگتر از 18 سال باشید" },
                            max: { value: 35, message: "شما باید کمتر از 35 سال باشید" }
                        })} />
                {errors.age &&
                    <p className='text-red-500 text-sm'
                    >{errors.age.message}
                    </p>}
            </div>
            <br />
            {/* {------------------------------------------------------------------} */}
            <p className='mt-3'>لطفا عکس پروفایل خود را انتخاب کنید :</p>

            <ProfilePic />

            <br />
            {/* {------------------------------------------------------------------} */}
            <Button variant="contained" style={{ fontFamily: 'iranyekan' }} type='submit' >ثبت نام</Button>

        </form>

    )
}
export default Form;