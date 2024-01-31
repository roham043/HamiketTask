import { useSelector, useDispatch } from 'react-redux';
import { changeModal } from '../features/modal/modalSlice';
import { changeName,changeImage,changeSex,changeage,changebirthday } from '../features/data/dataSlice';

import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";

const Table = () => {
  const fullname = useSelector((state) => state.data.fullname);
  const sex = useSelector((state) => state.data.sex);
  const age = useSelector((state) => state.data.age);
  const birthday = useSelector((state) => state.data.birthday);

  const dispatch = useDispatch()
  // const image = useSelector((state)=> state.data.image);
  return (
    <table className=' p-5 bg-white w-1/2 rounded-3xl justify-start'>
      <tr className=' p-5'>
        <th className=' p-5 justify-start'>نام و نام خانوادگی</th>
        <td className='border p-5'>{fullname}</td>

        <td className='border p-5'>
          {<FaUserEdit
            className='hover:cursor-pointer'
            onClick={() => dispatch(changeModal())}
            style={{ fontSize: '30px', color: 'green' }} />}
        </td>
        <td className=' p-5'>
          {<RiDeleteBinFill
            className='hover:cursor-pointer'
            onClick={() => dispatch(changeName(''))}
            style={{ fontSize: '25px', color: 'red' }} />}
        </td>
      </tr >
      <tr className=' p-5 bg-slate-100'>
        <th className='border p-5'>جنسیت</th>
        <td className='border p-5'>{sex}</td>

        <td className='border p-5'>
          {<FaUserEdit
            className='hover:cursor-pointer'
            onClick={() => dispatch(changeModal())}
            style={{ fontSize: '30px', color: 'green' }} />}
        </td>
        <td className='border p-5'>
          {<RiDeleteBinFill
            className='hover:cursor-pointer'
            onClick={() => dispatch(changeSex(''))}
            style={{ fontSize: '25px', color: 'red' }} />}
        </td>
      </tr>
      <tr className=' p-5'>
        <th className='border p-5'>سن</th>
        <td className='border p-5'>{age}</td>

        <td className='border p-5'>
          {<FaUserEdit
            className='hover:cursor-pointer'
            onClick={() => dispatch(changeModal())}
            style={{ fontSize: '30px', color: 'green' }} />}
        </td>
        <td className='border p-5'>
          {<RiDeleteBinFill
            className='hover:cursor-pointer'
            onClick={() => dispatch(changeage(''))}
            style={{ fontSize: '25px', color: 'red' }} />}
        </td>
      </tr>
      <tr className=' p-5 bg-slate-100'>
        <th className='border p-5'>تاریخ تولد</th>
        <td className='border p-5'>{birthday}</td>

        <td className='border p-5'>
          {<FaUserEdit
            className='hover:cursor-pointer'
            onClick={() => dispatch(changeModal())}
            style={{ fontSize: '30px', color: 'green' }} />}
        </td>
        <td className='border p-5'>
          {<RiDeleteBinFill
            className='hover:cursor-pointer'
            onClick={() => dispatch(changebirthday(''))}
            style={{ fontSize: '25px', color: 'red' }} />}
        </td>
      </tr>
      <tr className=' p-5'>
        <th className=' p-5'>عکس پروفایل</th>
        <td className='border p-5'>{''}</td>

        <td className='border p-5'>
          {<FaUserEdit
            className='hover:cursor-pointer'
            onClick={() => dispatch(changeModal())}
            style={{ fontSize: '30px', color: 'green' }} />}
        </td>
        <td className=' p-5'>
          {<RiDeleteBinFill
            className='hover:cursor-pointer'
            onClick={() => dispatch(changeImage(''))}
            style={{ fontSize: '25px', color: 'red' }} />}
        </td>
      </tr>
    </table>
  )
}

export default Table;