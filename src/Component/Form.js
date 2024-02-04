import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeModal } from '../features/modal/modalSlice';
import { changeName, changeSex, changebirthday, changeage, changeImage } from '../features/data/dataSlice';
import {addUser} from '../features/users/usersSlice';
import { useForm } from 'react-hook-form';
import Input from '@mui/material/Input';
import ProfilePic from './ProfPic';
import Button from '@mui/material/Button';
// import { DtPicker } from 'react-calendar-datetime-picker'
// import 'react-calendar-datetime-picker/dist/style.css';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';


const ariaLabel = { 'aria-label': 'description' };
const Form = () => {
    const fullname = useSelector((state) => state.data.fullname);
    const sex = useSelector((state) => state.data.sex)
    const birthday = useSelector((state) => state.data.birthday);
    const age = useSelector((state) => state.data.age);
    const image = useSelector((state) => state.data.image);

   

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
        dispatch(changeName(data.fullname))
        dispatch(changeSex(data.sex))
        dispatch(changebirthday(data.birthday))
        dispatch(changeage(data.age))
        dispatch(changeImage(data.image))
        dispatch(changeModal())
        dispatch(addUser(
            {
                _id:Math.random(),
                data
            }
        ))
        dispatch(changeName(''))
        dispatch(changeSex(''))
        dispatch(changebirthday(''))
        dispatch(changeage(''))
        dispatch(changeImage(''))
    }
  
    
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
            <div className='bg-slate-100 '>
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
            </div>
            <br />
            {/* {------------------------------------------------------------------} */}
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