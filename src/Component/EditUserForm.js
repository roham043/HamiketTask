import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editUser } from '../features/users/usersSlice';
import { changeModal } from '../features/modal/EditFormModalSlice';
import { useForm } from 'react-hook-form';
import ProfilePic from './ProfPic';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const ariaLabel = { 'aria-label': 'description' };


const EditUserForm = (id) => {

  const [fullname, setFullname] = useState('');
  const [sex, setSex] = useState('');
  const [birthday, setBirthday] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');


  const usersData = useSelector((state) => state.users.usersList);


  const dispatch = useDispatch()


  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { fullname, sex, age, birthday, image }
  })

  const onSubmit = (data) => {
    setFullname(data.fullname);
    setSex(data.sex);
    setBirthday(data.birthday);
    setAge(data.age);
    setImage(data.image);

    dispatch(editUser({
      data,
      id,
    }));
    dispatch(changeModal())
  }

  return (
    <div>
      <div>
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
          <Button
            variant="contained"
            style={{ fontFamily: 'iranyekan' }}
            type='submit' >ویرایش</Button>


        </form>
      </div>

    </div>


  );
}

export default EditUserForm;