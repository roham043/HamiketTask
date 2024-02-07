import CardUserData from './CardUserData';


const Table = () => {

  return (
    <div className='w-screen flex justify-center items-center'>
      <div className='w-auto h-auto bg-white mr-10 border border-b-0 border-black '>

        <div className='flex h-auto'>
          <div className='bg-slate-200 w-36  h-10 border-l-2 border-b-2 border-black'>
            <p className='p-2'> نام و نام خانوادگی</p>
          </div>
          <div className='bg-slate-200 w-24 h-10 border-l-2 border-b-2 border-black'>
            <p className='p-2 px-5 '>جنسیت</p>
          </div>
          <div className='bg-slate-200 w-16 h-10 border-l-2 border-b-2 border-black'>
            <p className='p-2 px-5 '>سن</p>
          </div>
          <div className='bg-slate-200 w-28 h-10 border-l-2 border-b-2 border-black'>
            <p className='p-2 px-5 '>تاریخ تولد</p>
          </div>
          <div className='bg-slate-200 w-28 h-10 border-l-2 border-b-2 border-black'>
            <p className='p-2  '>عکس پروفایل</p>
          </div><div className='bg-slate-200 w-28 h-10 border-l-2 border-b-2 border-black'>
            <p className='p-2  '>ویرایش</p>
          </div><div className='bg-slate-200 w-28 h-10  border-b-2 border-black'>
            <p className='p-2  '>حذف</p>
          </div>
        </div>
        <CardUserData />
      </div>

    </div>
  )
}

export default Table;


