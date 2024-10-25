import { IHero } from "@app/entities/IHero";
import globalStore from "@app/store/globalStore";
import modalStore from "@app/store/modalStore";
import axios from "axios";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import Button from "./button";
import Input from "./input";

interface IHeroForm {
  name: string;
  origin: string;
  skill: string;
}

function Modal() {
  const selectedHero = globalStore.useStore((state) => state.selectedHero);
  const [heroData] = useState<IHero>(selectedHero);

  const closeModal = modalStore.useStore((state) => state.closeModal);
  const updateHero = globalStore.useStore((state) => state.updateHero);

  const useFormHeroes = useForm<IHeroForm>({
    defaultValues: {
      name: heroData.name,
      origin: heroData.origin,
      skill: heroData.skill,
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useFormHeroes;

  useEffect(() => {
    reset(heroData);
  }, [heroData, reset]);

  const onSubmit = async (data: IHeroForm) => {
    const updatedHero = {
      ...heroData,
      name: data.name,
      origin: data.origin,
      skill: data.skill,
    };

    try {
      await axios.put(`api/heroes/${heroData.id}`, updatedHero, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      updateHero(updatedHero);
      closeModal();
      alert("Herói atualizado com sucesso");
    } catch (error) {
      alert(`Error updating hero: ${error.message}`);
    }
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

            <FormProvider {...useFormHeroes}>
              <form
                className="relative p-6 flex-auto"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Input
                  type="text"
                  label="Nome"
                  placeholder="Digite o nome do herói"
                  {...register("name", {
                    required: "Campo obrigatório",
                    minLength: {
                      value: 3,
                      message: "Minimo 3 caractéres",
                    },
                  })}
                  className="my-4 text-blueGray-500 text-lg leading-relaxed"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}

                <Input
                  type="text"
                  label="Origem"
                  placeholder="Digite a origem do herói"
                  {...register("origin", { required: "Campo obrigatório" })}
                  className="my-4 text-blueGray-500 text-lg leading-relaxed"
                />
                {errors.origin && (
                  <span className="text-red-500 text-sm">
                    {errors.origin.message}
                  </span>
                )}

                <Input
                  type="text"
                  label="Habilidade"
                  {...register("skill", { required: "Campo obrigatório" })}
                  className="my-4 text-blueGray-500 text-lg leading-relaxed"
                />
                {errors.skill && (
                  <span className="text-red-500 text-sm">
                    {errors.skill.message}
                  </span>
                )}

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
            </FormProvider>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  );
}

export default Modal;
