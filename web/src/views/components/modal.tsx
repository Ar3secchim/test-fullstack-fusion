import { IHero } from "@app/entities/IHero";
import globalStore from "@app/store/globalStore";
import modalStore from "@app/store/modalStore";
import { X } from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import Button from "./button";
import Input from "./input";

function Modal() {
  const selectedHero = globalStore.useStore((state) => state.selectedHero);
  const [heroData, setHeroData] = useState<IHero>(selectedHero);

  const closeModal = modalStore.useStore((state) => state.closeModal);
  const updateHero = globalStore.useStore((state) => state.updateHero);

  useEffect(() => {
    setHeroData(selectedHero);
  }, [selectedHero]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setHeroData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    updateHero(heroData);
    closeModal();
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative min-w-96 my-6 mx-auto  ">
          <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none border border-solid border-gray-300">
            <div className="flex items-start justify-between p-5  rounded-t">
              <h3 className="text-3xl font-semibold">Editar Herói</h3>
              <Button className="w-fit bg-transparent" onClick={closeModal}>
                <X size={24} color="#000000" />
              </Button>
            </div>

            <form className="relative p-6 flex-auto" onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                label="Nome"
                value={heroData.name}
                onChange={handleChange}
                className="my-4 text-blueGray-500 text-lg leading-relaxed"
              />
              <Input
                type="text"
                name="origin"
                label="Origem"
                value={heroData.origin}
                onChange={handleChange}
                className="my-4 text-blueGray-500 text-lg leading-relaxed"
              />
              <Input
                type="text"
                name="skill"
                label="Habilidade"
                value={heroData.skill}
                onChange={handleChange}
                className="my-4 text-blueGray-500 text-lg leading-relaxed"
              />
              <div className="flex gap-4">
                <Button
                  onClick={closeModal}
                  className="bg-red-400 hover:bg-red-950"
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold hover:bg-emerald-700"
                >
                  Salvar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  );
}

export default Modal;
