import globalStore from "@app/store/globalStore";
import { PaperclipIcon } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";

import Button from "./button";
import Input from "./input";

// Nova interface sem o campo `id`
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

  const onSubmit = async (data: IHeroForm) => {
    const hero = {
      name: data.name,
      origin: data.origin,
      skill: data.skill,
    };

    try {
      const response = await fetch(`/api/heroes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hero),
      });
      const savedHero = await response.json();
      addHero(savedHero);
    } catch (error) {
      console.log(error);
    }
  };

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = createUseForm;

  return (
    <FormProvider {...createUseForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-xl font-medium inline-flex gap-2 items-center lg:justify-start lg:text-3xl">
          <PaperclipIcon size={26} />
          Adicionar um herói
        </h3>

        <div className="flex mt-6 flex-col gap-4 items-end ">
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

          <div className="w-full flex flex-col gap-4 justify-between md:flex-row">
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
          </div>
          <Button className="md:w-48 hover:bg-purple-950">Adicionar</Button>
        </div>
      </form>
    </FormProvider>
  );
}

export default FormHeroComponent;
