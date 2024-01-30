import { DtPicker } from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/style.css'

const Form = () => {
    return (

        <form>
            <input type="text" placeholder=" نام و نام خانوادگی" />
            <p>جنسیت:</p>
            <input type="radio" id="male" name="male" />
            <label for="html">مرد</label><br />
            <input type="radio" id="femail" name="femail" />
            <label for="css">زن</label><br />

            <DtPicker local='fa' yearListStyle='list' />
            <label for="age">بازه سنی:</label>
            <select name="age" id="age">
                <option value="0-18">0-18</option>
                <option value="19-30">19-30</option>
                <option value="31-45">31-45</option>
                <option value="46">46</option>
            </select>
            <br/>
            <label for="img">عکس پروفایل:</label>
            <input type="file" id="img" name="img" accept="image/*" placeholder='gggg'  />


        </form>

    )
}
export default Form;