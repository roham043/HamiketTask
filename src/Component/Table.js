import {useSelector} from 'react-redux';

const Table = () => {
    const fullname = useSelector((state)=> state.data.fullname);
    const sex = useSelector((state)=> state.data.sex);
    const age = useSelector((state)=> state.data.age);
    const birthday = useSelector((state)=> state.data.birthday);
    // const image = useSelector((state)=> state.data.image);
    return (
        <table >
        <tr>
          <th>نام و نام خانوادگی</th>
          <td>{fullname}</td>
      
          <td>تغییرات</td>
          <td>حذف</td>
        </tr>
        <tr>
          <th>جنسیت</th>
          <td>{sex}</td>
         
          <td>تغییرات</td>
          <td>حذف</td>
        </tr>
        <tr>
          <th>سن</th>  
          <td>{age}</td>
          
          <td>تغییرات</td>
          <td>حذف</td>
        </tr>
        <tr>
          <th>تاریخ تولد</th>  
          <td>{birthday}</td>
          
          <td>تغییرات</td>
          <td>حذف</td>
        </tr>
        <tr>
          <th>عکس پروفایل</th>  
          {/* <td>{image}</td> */}
          
          <td>تغییرات</td>
          <td>حذف</td>
        </tr>
      </table>
    )
}

export default Table;