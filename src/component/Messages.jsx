import { useEffect, useState } from "react";
import Message from "./Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../redux/appSlice";

const Messages = () => {
  const { searchText, emails } = useSelector((store) => store.appSlice);
  const [tempEmail, setTempEmail] = useState(emails);
  const dispatch = useDispatch();

  // Fetch emails from Firestore and update the Redux store
  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(setEmails(allEmails));
    });

    // Cleanup function to unsubscribe from Firestore listener
    return () => unsubscribe();
  }, [dispatch]);

  // Filter emails based on searchText
  useEffect(() => {
    const filteredEmail = emails?.filter((email) => {
      const subject = email?.subject || "";
      const to = email?.to || "";
      const message = email?.message || "";
      const search = searchText?.toLowerCase() || ""; // Guard searchText as well

      return (
        subject.toLowerCase().includes(search) ||
        to.toLowerCase().includes(search) ||
        message.toLowerCase().includes(search)
      );
    });

    setTempEmail(filteredEmail);
  }, [searchText, emails]);

  return (
    <div>
      {tempEmail &&
        tempEmail?.map((email) => {
          return <Message key={email.id} email={email} />;
        })}
    </div>
  );
};

export default Messages;
