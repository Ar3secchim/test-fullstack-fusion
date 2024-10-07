import globalStore from "@app/store/globalStore";
import { PaperclipIcon } from "lucide-react";
import { FormEvent, memo, useRef } from "react";

import Button from "./button";
import Input from "./input";

export function FormHeroComponent() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const originRef = useRef<HTMLInputElement | null>(null);
  const skillRef = useRef<HTMLInputElement | null>(null);
  const addHero = globalStore.useStore((state) => state.addHero);

  const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    if (
      nameRef.current?.value &&
      originRef.current?.value &&
      skillRef.current?.value
    ) {
      const hero = {
        id: String(Math.random()),
        name: nameRef.current.value,
        origin: originRef.current.value,
        skill: skillRef.current.value,
      };

      addHero(hero);
      nameRef.current.value = "";
      originRef.current.value = "";
      skillRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handlerSubmit}>
      <h3 className="text-xl font-medium inline-flex gap-2 items-center lg:justify-start lg:text-3xl">
        <PaperclipIcon size={26} />
        Adicionar um herói
      </h3>

      <div className="flex mt-6 flex-col gap-4 items-end ">
        <Input
          label="Nome"
          placeholder="Digite o nome do herói"
          ref={nameRef}
        />

        <div className="w-full flex flex-col gap-4 justify-between md:flex-row">
          <Input
            label="Origem"
            placeholder="Digite a origem do herói"
            ref={originRef}
          />

          <Input
            label="Habilidade"
            placeholder="Digite a habilidade do herói"
            ref={skillRef}
          />
        </div>
        <Button className="md:w-48 hover:bg-purple-950">Adicionar</Button>
      </div>
    </form>
  );
}
const FormHero = memo(FormHeroComponent);
export default FormHero;
