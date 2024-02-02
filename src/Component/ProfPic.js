import { useState } from "react";
import ReactFileReader from 'react-file-reader';
import {useSelector,useDispatch} from 'react-redux';
import {changeSrcImage} from '../features/image/imageSlice';

export default function ProfilePic() {
    // const [src, setSrc] = useState(null);
    const imageSrc = useSelector(state => state.image.imageSrc);
    const dispatch = useDispatch()

    const handleFiles = (files) => {
        // setSrc(files.base64);
        dispatch(changeSrcImage(files.base64))
    }

    return (
        <div>
            <ReactFileReader fileTypes={[".png", ".jpg"]} base64={true} multipleFiles={true} handleFiles={handleFiles}>
                <span className="border px-1 my-5 bg-slate-200 hover:cursor-pointer">انتخاب عکس</span>
            </ReactFileReader>
            <img
                src={imageSrc}
                className="w-10 h-10"
                alt="" />
        </div>
    );
}
