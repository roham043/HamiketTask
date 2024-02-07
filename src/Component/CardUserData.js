import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../features/users/usersSlice';
import EditUserModal from './EditUserModal';
import { RiDeleteBinFill } from "react-icons/ri";

const CardUserData = () => {
    const usersData = useSelector((state) => state.users.usersList);

    // const usersId = useSelector((state) => state.users.usersList._id);
    const dispatch = useDispatch()
    return (
        <div className="flex">
            <div >
                {usersData.map((name) => (
                    <div
                        className="bg-slate-100 w-36 h-10 border-l-2 border-b-2 border-black "
                        key={name._id}>{name.data.fullname}</div>
                ))}
            </div>
            <div >
                {usersData.map((name) => (
                    <div
                        className="bg-slate-100 w-24 h-10 border-l-2 border-b-2 border-black "
                        key={name._id}>{name.data.sex}</div>
                ))}
            </div>
            <div >
                {usersData.map((name) => (
                    <div
                        className="bg-slate-100 w-16 h-10 border-l-2 border-b-2 border-black "
                        key={name._id}>{name.data.age}</div>
                ))}
            </div>
            <div >
                {usersData.map((name) => (
                    <div
                        className="bg-slate-100 w-28 h-10 border-l-2 border-b-2 border-black "
                        key={name._id}>{name.data.birthday}</div>
                ))}
            </div>
            <div >
                {usersData.map((name) => (
                    <div
                        className="bg-slate-100 w-28 h-10 border-l-2 border-b-2 border-black "
                        key={name._id}>{name.data.image}</div>
                ))}
            </div>
            <div >
                {usersData.map((name) => (
                    <div
                        className="bg-slate-100 w-28 h-10 border-l-2 border-b-2 border-black "
                        key={name._id}>
                        <EditUserModal key={name._id} id={name._id} />
                    </div>
                ))}
            </div>
            <div >
                {usersData.map((name) => (
                    <div
                        className="bg-slate-100 w-28 h-10  border-b-2 border-black "
                        key={name._id}>
                        <RiDeleteBinFill
                            className='hover:cursor-pointer'
                            style={{ fontSize: '30px', color: 'red', paddingRight: '5px' }}
                            onClick={() => dispatch(deleteUser(name._id))}></RiDeleteBinFill>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CardUserData;