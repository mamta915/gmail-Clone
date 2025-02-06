import { RxCross2 } from "react-icons/rx"
import { useSelector } from "react-redux"
import { setOpen } from "../redux/appSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";


const SendMail = () => {

    const [formData, setFormData] = useState({
        to: "",
        subject: "",
        message: ""
    })
    const open = useSelector(store => store.appSlice.open);
    const dispatch = useDispatch();

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "emails"), {
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            createdAt: serverTimestamp(),
        })
        dispatch(setOpen(false));
        setFormData({
            to: "",
            subject: "",
            message: "",
        })
    }
    return (
        <div className={` ${open ? 'block ' : 'hidden'} bg-white mx-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
            <div className="flex px-3 py-2 bg-[#f2f6fc] justify-between rounded-t-md">
                <h1>New Message</h1>
                <div onClick={() => dispatch(setOpen(false))} className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                    <RxCross2 size={14} />
                </div>
            </div>
            <form onSubmit={submitHandler} className="flex flex-col p-3 gap-2">
                <input onChange={changeHandler} value={formData.to} name="to" type="text" placeholder="to" className="outline-none py-1" />
                <input onChange={changeHandler} value={formData.subject} name="subject" type="text" placeholder="subject" className="outline-none py-1" />
                <textarea onChange={changeHandler} value={formData.message} name="message" cols={30} rows={10} className="outline-none py-1" ></textarea>
                <button type="submit" className="rounded-full text-white font-medium bg-[#0b57d0] w-16">Send</button>
            </form>
        </div>
    )
}

export default SendMail
