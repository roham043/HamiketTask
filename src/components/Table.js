import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../feacture/userSlice';
import EditForm from './EditForm';
import { FcDeleteDatabase } from "react-icons/fc";

function Table() {
    const userDataList = useSelector((state) => state.users.UserDataList);
    const dispatch = useDispatch()
    return (
        <div>
            <table className=' table-auto border-2'>
                <thead className='border-2 '>
                    <tr className='border-2'>
                        <th className='border-2 p-4'>نام و نام خانوادگی</th>
                        <th className='border-2 p-4'>جنسیت</th>
                        <th className='border-2 p-4'>تاریخ تولد</th>
                        <th className='border-2 p-4'>سن</th>
                        <th className='border-2 p-4'>عکس پروفایل</th>
                        <th className='border-2 p-4'>ویرایش</th>
                        <th className='border-2 p-4'>حذف</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userDataList.map((user) => (
                            <tr>
                                <td className='border-2 pr-5'>{user.fullname}</td>
                                <td className='border-2 pr-5'>{user.gender}</td>
                                <td className='border-2 pr-5'>{user.birthday}</td>
                                <td className='border-2 pr-5'>{user.age}</td>
                                <td className='border-2 pr-5'><img src={user.image} alt='' width={70} height={50}></img></td>
                                <td className='border-2 pr-5'>
                                    <EditForm id={user.id} />
                                </td>
                                <td className='border-2 pr-5'>
                                    <FcDeleteDatabase
                                        onClick={() => dispatch(deleteUser(user.id))}
                                        className='text-3xl hover:cursor-pointer'
                                    />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table