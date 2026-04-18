import {  AiFillBug } from "react-icons/ai";

const NotFoundContact = () => {
  return (
    <div className="flex h-[80vh] items-center justify-center gap-4">
      <div>
        <AiFillBug size={25} color="white"/>
      </div>
      <h3 className="text-2xl font-semibold text-white"> Contact Not Found</h3>
    </div>
  );
};

export default NotFoundContact;
