import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from "react-avatar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { setSearchText, setuser } from "../../redux/appSlice";
import { motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";


const Navbar = () => {
  const [input, setInput] = useState();
  const [toggle, setToggle] = useState(false);

const dispatch = useDispatch();
const signOutHandler = () =>{
  signOut(auth).then(()=>{
    dispatch(setuser(null));
  }).catch((err)=>{
    console.log(err);
  })
}


  useEffect(()=>{
dispatch(setSearchText(input));
  },[input])
  return (
    <div className="flex items-center justify-between mx-2 h-16">
      <div className="flex items-center gap-3">
        <div className="p-0 m-0 rounded-full hover:bg-gray-300 cursor-pointer">
          <  RxHamburgerMenu size={20} />

        </div>
        <img className="w-8" src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="gmaillogo" />
        <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
      </div>
      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
          <IoIosSearch size={"24px"} className="text-gray-700" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search mail"
            className="rounded-full w-full bg-transparent outline-none px-1" />
        </div>
      </div>
      <div className="md:block hidden">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-400 cursor-pointer">
            <CiCircleQuestion size={20} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-400 cursor-pointer">
            <IoSettingsOutline size={20} />

          </div>
          <div className="p-3 rounded-full hover:bg-gray-400 cursor-pointer">
            <PiDotsNineBold size={20} />
          </div>

          <div className="relative cursor-pointer">
            <Avatar onClick={()=>setToggle(!toggle)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQUXqMrzrmkxd3QpxGL5bzgxELsztrL1AgQ&s" size="40" round={true} />
            <AnimatePresence>
              {
toggle && (
  <motion.div
  initial={{opacity:0, scale:0.8}}
  animate={{opacity:1, scale:1}}
  exit={{opacity:0, scale:0.8}}
  transition={{duration: 0.1}}
  className="absolute right-2 shadow-lg z-20 rounded-md"
  >
    <p onClick={signOutHandler} className="p-2 underline">LogOut</p>

  </motion.div>
)
              }
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
