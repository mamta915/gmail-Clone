import PropTypes from 'prop-types';  // Step 1: Import PropTypes
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlineCropSquare } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedEmail } from "../redux/appSlice";
import { motion } from 'framer-motion';

const Message = ({ email }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(setSelectedEmail(email));
    navigate(`/mail/${email.id}`);
  };

  const formattedDate = email?.createdAt?.seconds
    ? new Date(email.createdAt.seconds * 1000).toUTCString()
    : "Date not available";

  return (
    <motion.div
    initial={{ opacity: 0, y:-20 }}
    animate={{opacity:1, y:0}}
    transition={{duration:0.5}}
    onClick={openMail} className="flex items-start justify-between border border-b border-gray-200 py-2 px-2 text-sm hover:cursor-pointer hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-300">
          <MdOutlineCropSquare className="w-5 h-5" />
        </div>
        <div className="flex-none text-gray-300">
          <AiOutlineStar className="w-5 h-5" />
        </div>
        <div>
          <h1 className='font-semibold'>{email?.to}</h1>
          </div>
      </div>
      <div className="flex-1 ml-4">
        <p className="text-gray-600 truncate inline-block max-w">
          {email?.message}
        </p>
      </div>
      <div className="flex-none text-grey-400 text-sm">
        <p>{formattedDate}</p>
      </div>
    </motion.div>
  );
};

// Step 2: Define propTypes to validate email structure
Message.propTypes = {
  email: PropTypes.shape({
    id: PropTypes.string.isRequired,            // Email must have an 'id' as a string
    message: PropTypes.string.isRequired,       // Email must have a 'message' as a string
    createdAt: PropTypes.shape({                // createdAt is an object with 'seconds' and 'nanoseconds'
      seconds: PropTypes.number.isRequired,     // 'seconds' should be a number
      nanoseconds: PropTypes.number             // 'nanoseconds' should be a number
    }).isRequired                               // createdAt is required
  }).isRequired                                 // email prop is required
};

export default Message;
