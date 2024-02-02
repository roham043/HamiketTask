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
                <span className=" px-5  bg-green-400 text-white rounded-lg hover:cursor-pointer">انتخاب عکس</span>
            </ReactFileReader>
            <img
                src={imageSrc}
                className="w-10 h-10 mt-5 mr-10"
                alt="" />
        </div>
    );
}
