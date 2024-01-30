import { useForm } from 'react-hook-form';
import { DtPicker } from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/style.css';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

const Form = () => {
    const schema = yup.object().shape({
        fullname: yup.string().required('این فیلد نباید خالی باشد'),
        age:yup.number().positive().integer().min(18,'شما اجازه دسترسی به سایت را ندارید').required(),
      
        
    })

    const { register, handleSubmit ,formState:{errors} } = useForm({
        resolver:yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data)
    }
    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder=" نام و نام خانوادگی" {...register('fullname')} />
            <p>{errors.fullname?.message}</p>
            <p>جنسیت:</p>
            <input type="radio" id="male" name="male" {...register('male')} />
            <label for="html">مرد</label><br />
            <input type="radio" id="femail" name="femail" {...register('femail')} />
            <label for="css">زن</label><br />

            {/* <DtPicker onChange={true} local='fa' yearListStyle='list' {...register('brtDayfa')} /> */}
            <br/>
            <label for="birthday">Birthday:</label>
            <input type="date" id="birthday" name="birthday" local='fa' {...register('brtDay')}/>
            <br/>
                <label for="age">بازه سنی:</label>
                <input type='number' {...register('age')}/>
                <p>{errors.age?.message}</p>
                {/* <select name="age" id="age" {...register('age')}>
                    <option value="0-18" >0-18</option>
                    <option value="19-30" >19-30</option>
                    <option value="31-45" >31-45</option>
                    <option value="46" >46</option>
                </select> */}
                <br />
                <label for="img">عکس پروفایل:</label>
                <input type="file" id="img" name="img" accept="image/*" placeholder='gggg'  {...register('image')} />
                <br />
                <input type='submit' />

        </form>

    )
}
export default Form;