import { useSelector } from 'react-redux';

const CardUserData = () => {
    const usersData = useSelector((state) => state.users.usersList)
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
                        <button>ویرایش</button>
                    </div>
                ))}
            </div>
            <div >
                {usersData.map((name) => (
                    <div
                        className="bg-slate-100 w-28 h-10  border-b-2 border-black "
                        key={name._id}>
                        <button>حذف</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CardUserData;