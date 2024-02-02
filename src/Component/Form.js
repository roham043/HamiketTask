import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeModal } from '../features/modal/modalSlice';
import { changeName, changeSex, changebirthday, changeage, changeImage } from '../features/data/dataSlice';
import { useForm } from 'react-hook-form';
import Input from '@mui/material/Input';
import ProfilePic from './ProfPic';
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
        console.log(data.fullname)
        console.log(data.sex)
        console.log(data.birthday)
        console.log(data.age)
        console.log(data.image)

        dispatch(changeModal())

    }
    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <Input placeholder=" نام و نام خانوادگی"
                {...register('fullname', { required: true })}
                sx={{ fontFamily: 'iranyekan', mb: 3}}
                inputProps={ariaLabel} />
            {errors.fullname &&
                <p className='text-red-500 text-sm'
                >این فیلد نباید خالی باشد
                </p>}
            {/* {-------------------------------------------------------------------------------------} */}
            <p>جنسیت:</p>
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
            <br />
            {/* {------------------------------------------------------------------} */}
            <label htmlFor="birthday">تاریخ تولد:</label>
            <input
                className='mb-3'
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
            <label htmlFor="age">سن:</label>
            <input
                className='mb-3'
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
            <br />
            {/* {------------------------------------------------------------------} */}
            <label htmlFor="img">عکس پروفایل:</label>
            {/* <input
                className='mb-3'
                type="file"
                id="img"
                name="img"
                accept="image/*"
                {...register('image')} /> */}
                <ProfilePic
                
                />
            <br />
            <button type='submit' >ثبت نام</button>

        </form>

    )
}
export default Form;