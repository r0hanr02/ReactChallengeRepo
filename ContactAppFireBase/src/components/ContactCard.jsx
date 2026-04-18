import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
// import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
// import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";
import { db } from "../config/firebase.config";
import useDisclose from "../hooks/useDisclose";

const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclose();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="flex items-center justify-between rounded-lg bg-yellow p-2 bg-red-400"
      >
        <div className="flex gap-1 ">
          <HiOutlineUserCircle
          color="white"
          className="text-4xl text-orange" />
          <div className="">
            <h2 className="font-bold text-white font-mono ">{contact.name}</h2>
            <p className="text-sm text-white">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl">
          <RiEditCircleLine 
          color="white"
          onClick={onOpen} className="cursor-pointer" />
          <IoMdTrash
          color="white"
            onClick={() => deleteContact(contact.id)}
            className="cursor-pointer text-orange"
          />
        </div>
      </div>
      <AddAndUpdateContact
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ContactCard;
