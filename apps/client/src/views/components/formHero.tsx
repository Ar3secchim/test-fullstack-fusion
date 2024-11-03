import globalStore from "@app/store/globalStore";
import axios from "axios";
import { PaperclipIcon } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "./button";
import Input from "./input";

interface IHeroForm {
  name: string;
  origin: string;
  skill: string;
}

export function FormHeroComponent() {
  const createUseForm = useForm<IHeroForm>({
    defaultValues: {
      name: "",
      origin: "",
      skill: "",
    },
  });
  const addHero = globalStore.useStore((state) => state.addHero);

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = createUseForm;

  const onSubmit = async (data: IHeroForm) => {
    const hero = {
      name: data.name,
      origin: data.origin,
      skill: data.skill,
    };

    try {
      const response = await axios.post(`/api/heroes`, hero);
      toast.success("Herói criado com sucesso");
      addHero(response.data);
      reset();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error("Heroi não encontrado no mundo Marvel ");
      } else {
        toast.error("Desculpa.Erro ao criar herói, tente novamente!");
      }
      console.error(error);
    }
  };

  return (
    <FormProvider {...createUseForm}>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-xl font-medium inline-flex gap-2 items-center lg:justify-start lg:text-3xl">
          <PaperclipIcon size={26} />
          Adicionar um herói
        </h3>

        <div className="flex mt-6 flex-col gap-4 items-start md:items-end">
          <Input
            label="Nome"
            placeholder="Digite o nome do herói"
            {...register("name", {
              required: "Campo obrigatório",
              minLength: {
                value: 3,
                message: "Minimo 3 caractéres",
              },
            })}
          />

          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}

          <div className="w-full flex flex-col gap-2 justify-between md:flex-row ">
            <span className="flex-1">
              <Input
                label="Origem"
                placeholder="Digite a origem do herói"
                {...register("origin", { required: "Campo obrigatório" })}
              />

              {errors.origin && (
                <span className="text-red-500 text-sm">
                  {errors.origin.message}
                </span>
              )}
            </span>

            <span className="flex-1">
              <Input
                label="Habilidade"
                placeholder="Digite a habilidade do herói"
                {...register("skill", { required: "Campo obrigatório" })}
              />
              {errors.skill && (
                <span className="text-red-500 text-sm">
                  {errors.skill.message}
                </span>
              )}
            </span>
          </div>
          <Button className="md:w-48 hover:bg-purple-950">Adicionar</Button>
        </div>
      </form>
    </FormProvider>
  );
}

export default FormHeroComponent;
