import { IoMdStar } from "react-icons/io"
import { LuPencil } from "react-icons/lu"
import { MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineWatchLater } from "react-icons/md"
import { TbSend2 } from "react-icons/tb"
import { useDispatch } from "react-redux"
import { setOpen } from "../redux/appSlice"


const sidebarItem = [
    {
       icons:<LuPencil size={'24px'} />,
    text:"Inbox"
    },
    {
        icons:<IoMdStar size={'24px'} />,
     text:"Starred"
     },
     {
        icons:<MdOutlineWatchLater size={'24px'} />,
     text:"snoozed"
     },
     {
        icons:<TbSend2 size={'24px'} />,
     text:"Send"
     },
      {
        icons:<MdOutlineDrafts size={'24px'} />,
     text:"Drafts"
     },
     {
    icons:<MdOutlineKeyboardArrowDown size={'24px'} />,
     text:"More"
     },
]
const Sidebar = () => {
    const dispatch = useDispatch();
  return (
    <div className="w-[15%]">
        <div className="p-3">
            <button onClick={()=> dispatch(setOpen(true))} className="flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#c2e7ff]">
                <LuPencil size={'24px'} />
                compose
            </button>
            </div>
            <div className="text-gray-500">
            {
                sidebarItem.map((item) => {
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <div className="flex items-center gap-3 pl-6 pr-1 py-2 rounded-r-full hover:bg-gray-200 cursor-pointer">
                        {item.icons}
                        <p>{item.text}</p>
                        </div>
                    )
                })
            }

            </div>
    </div>
  )
}

export default Sidebar
