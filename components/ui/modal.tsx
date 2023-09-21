import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineClose } from "react-icons/ai";
import IconButton from "./icon_button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <Transition show={open} appear as={Fragment}>
      <Dialog onClose={onClose} as="div" className="relative z-30">
        <div className="fixed bg-black bg-opacity-50 inset-0" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center p-4 text-center min-h-full">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
                <Dialog.Panel className="w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle">
                    <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                        <div className="absolute right-4 top-4">
                            <IconButton onClick={onClose}  icon={<AiOutlineClose  size={30}/>}/>
                                   
                            
                        </div>
                        
                            {children}
                        
                    </div>
                </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
