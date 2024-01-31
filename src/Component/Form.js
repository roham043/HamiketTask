import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, changeSex, changebirthday, changeage, changeImage } from '../features/data/dataSlice';
import { useForm } from 'react-hook-form';
import { DtPicker } from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/style.css';
// import * as yup from 'yup';
// import {yupResolver} from '@hookform/resolvers/yup'

const Form = () => {
    const fullname = useSelector((state) => state.data.fullname);
    const sex = useSelector((state) => state.data.sex)
    const birthday = useSelector((state) => state.data.birthday);
    const age = useSelector((state) => state.data.age);
    const image = useSelector((state) => state.data.image);

    const dispatch = useDispatch()
    // const schema = yup.object().shape({
    //     fullname: yup.string().required('این فیلد نباید خالی باشد'),
    //     age:yup.number().positive().integer().min(18,'شما اجازه دسترسی به سایت را ندارید').required(),


    // })

    // const { register, handleSubmit ,formState:{errors} } = useForm({
    //     resolver:yupResolver(schema),
    // });
    const { register, handleSubmit } = useForm({
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

    }
    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                className='mb-3'
                type="text"
                placeholder=" نام و نام خانوادگی"
                {...register('fullname')} />
            {/* <p>{errors.fullname?.message}</p> */}
            <p>جنسیت:</p>
            <input type="radio" id="male" name="male" {...register('male')} />
            <label htmlFor="html">مرد</label><br />
            <input type="radio" id="femail" name="femail" {...register('femail')} />
            <label htmlFor="css">زن</label><br />

            {/* <DtPicker onChange={true} local='fa' yearListStyle='list' {...register('brtDayfa')} /> */}
            <br />
            <label htmlFor="birthday">تاریخ تولد:</label>
            <input
                className='mb-3'
                type="date"
                id="birthday"
                name="birthday"
                local='fa'
                {...register('brtDay')} />
            <br />
            <label htmlFor="age">سن:</label>
            <input
                className='mb-3'
                type='number'
                {...register('age')} />
            {/* <p>{errors.age?.message}</p> */}
            {/* <select name="age" id="age" {...register('age')}>
                    <option value="0-18" >0-18</option>
                    <option value="19-30" >19-30</option>
                    <option value="31-45" >31-45</option>
                    <option value="46" >46</option>
                </select> */}
            <br />
            <label htmlFor="img">عکس پروفایل:</label>
            <input
                className='mb-3'
                type="file"
                id="img"
                name="img"
                accept="image/*"
                {...register('image')} />
            <br />
            <button type='submit' >ثبت نام</button>

        </form>

    )
}
export default Form;