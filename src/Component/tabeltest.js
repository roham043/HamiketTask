import { useSelector, useDispatch } from 'react-redux';
import { changeModal } from '../features/modal/modalSlice';
import { changeName, changeSex, changeage, changebirthday } from '../features/data/dataSlice';
import { changeSrcImage } from '../features/image/imageSlice';
import { deleteUser } from '../features/users/usersSlice';
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import CardUserData from './CardUserData';

const Tabletest = () => {
    const fullname = useSelector((state) => state.data.fullname);
    const sex = useSelector((state) => state.data.sex);
    const age = useSelector((state) => state.data.age);
    const birthday = useSelector((state) => state.data.birthday);
    const imageSrc = useSelector((state) => state.image.imageSrc);

    const usersData = useSelector((state) => state.users.usersList)
    const dispatch = useDispatch()
    return (
        <table className='  bg-white w-1/2 rounded-3xl justify-start'>
            <tr className=' '>
                <th className='py-5 justify-start'>نام و نام خانوادگی</th>
                <td className='border pr-4'>{fullname}</td>

                <td className='border '>
                    {<FaUserEdit
                        className='hover:cursor-pointer'
                        onClick={() => dispatch(changeModal())}
                        style={{ fontSize: '30px', color: 'green', paddingRight: '5px' }} />}
                </td>
                <td className=''>
                    {<RiDeleteBinFill
                        className='hover:cursor-pointer'
                        onClick={() => dispatch(changeName(''))}
                        style={{ fontSize: '30px', color: 'red', paddingRight: '5px' }} />}
                </td>
            </tr >
            <tr className='  bg-slate-100'>
                <th className='border py-5'>جنسیت</th>
                <td className='border pr-4'>{sex}</td>

                <td className='border '>
                    {<FaUserEdit
                        className='hover:cursor-pointer'
                        onClick={() => dispatch(changeModal())}
                        style={{ fontSize: '30px', color: 'green', paddingRight: '5px' }} />}
                </td>
                <td className='border '>
                    {<RiDeleteBinFill
                        className='hover:cursor-pointer'
                        onClick={() => dispatch(changeSex(''))}
                        style={{ fontSize: '30px', color: 'red', paddingRight: '5px' }} />}
                </td>
            </tr>
            <tr className=' '>
                <th className='border py-5'>سن</th>
                <td className='border pr-4'>{age}</td>

                <td className='border'>
                    {<FaUserEdit
                        className='hover:cursor-pointer'
                        onClick={() => dispatch(changeModal())}
                        style={{ fontSize: '30px', color: 'green', paddingRight: '5px' }} />}
                </td>
                <td className='border'>
                    {<RiDeleteBinFill
                        className='hover:cursor-pointer'
                        onClick={() => dispatch(changeage(''))}
                        style={{ fontSize: '30px', color: 'red', paddingRight: '5px' }} />}
                </td>
            </tr>
            <tr className=' bg-slate-100'>
                <th className='border py-5'>تاریخ تولد</th>
                <td className='border pr-4'>{birthday}</td>

                <td className='border'>
                    {<FaUserEdit
                        className='hover:cursor-pointer'
                        onClick={() => dispatch(changeModal())}
                        style={{ fontSize: '30px', color: 'green', paddingRight: '5px' }} />}
                </td>
                <td className='border'>
                    {<RiDeleteBinFill
                        className='hover:cursor-pointer'
                        onClick={() => dispatch(changebirthday(''))}
                        style={{ fontSize: '30px', color: 'red', paddingRight: '5px' }} />}
                </td>
            </tr>
            <tr className=''>
                <th className='py-5'>عکس پروفایل</th>
                <td className='border pr-4'>
                    {<img src={imageSrc} alt='' width={60} height={60} />}
                </td>

                <td className='border'>
                    {<FaUserEdit
                        className='hover:cursor-pointer'
                        onClick={() => dispatch(changeModal())}
                        style={{ fontSize: '30px', color: 'green', paddingRight: '5px' }} />}
                </td>
                <td className=''>
                    {<RiDeleteBinFill
                        className='hover:cursor-pointer'
                        onClick={() => dispatch(changeSrcImage(''))}
                        style={{ fontSize: '30px', color: 'red', paddingRight: '5px' }} />}
                </td>
            </tr>
        </table>
    )
}