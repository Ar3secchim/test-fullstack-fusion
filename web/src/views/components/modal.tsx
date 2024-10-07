import modalStore from "@app/store/modalStore";
import { X } from "lucide-react";

import Button from "./button";

function Modal() {
  const closeModal = modalStore.useStore((state) => state.closeModal);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/* content */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* header */}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Modal Title</h3>

              <Button onClick={closeModal}>
                <X size={24} />
              </Button>
            </div>
            {/* body */}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                oi
              </p>
            </div>

            {/* footer */}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <Button onClick={closeModal}>Cancelar</Button>
              <Button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold"
                onClick={closeModal}
              >
                Salvar
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  );
}

export default Modal;
