import { useSelector } from 'react-redux';



const Table = () => {
  const fullname = useSelector((state) => state.data.fullname);
  const sex = useSelector((state) => state.data.sex);
  const age = useSelector((state) => state.data.age);
  const birthday = useSelector((state) => state.data.birthday);
  // const image = useSelector((state)=> state.data.image);
  return (
    <table className='table-auto  p-5 bg-white w-1/2 rounded-3xl'>
      <tr className=' p-5'>
        <th className=' p-5'>نام و نام خانوادگی</th>
        <td className='border p-5'>{fullname}</td>

        <td className='border p-5'>تغییرات</td>
        <td className=' p-5'>حذف</td>
      </tr >
      <tr className=' p-5'>
        <th className='border p-5'>جنسیت</th>
        <td className='border p-5'>{sex}</td>

        <td className='border p-5'>تغییرات</td>
        <td className='border p-5'>حذف</td>
      </tr>
      <tr className=' p-5'>
        <th className='border p-5'>سن</th>
        <td className='border p-5'>{age}</td>

        <td className='border p-5'>تغییرات</td>
        <td className='border p-5'>حذف</td>
      </tr>
      <tr className=' p-5'>
        <th className='border p-5'>تاریخ تولد</th>
        <td className='border p-5'>{birthday}</td>

        <td className='border p-5'>تغییرات</td>
        <td className='border p-5'>حذف</td>
      </tr>
      <tr className=' p-5'>
        <th className=' p-5'>عکس پروفایل</th>
        <td className='border p-5'>{''}</td>

        <td className='border p-5'>تغییرات</td>
        <td className=' p-5'>حذف</td>
      </tr>
    </table>
  )
}

export default Table;