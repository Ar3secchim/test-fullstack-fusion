import { PaperclipIcon } from "lucide-react";
import { FormEvent, memo, useRef } from "react";

import Button from "./button";
import Input from "./input";

export function FormHeroComponent() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    if (inputRef.current?.value) {
      inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handlerSubmit}>
      <h3 className="text-xl font-medium inline-flex gap-2 items-center lg:justify-start lg:text-3xl">
        <PaperclipIcon size={26} />
        Adicionar um heroi
      </h3>

      <div className="flex mt-6 justify-between flex-col gap-3  md:flex-row ">
        <Input
          className="w-full"
          placeholder="Digite o nome do heroi"
          ref={inputRef}
        />
        <Button className="md:w-60">Adicionar herois</Button>
      </div>
    </form>
  );
}
const FormHero = memo(FormHeroComponent);
export default FormHero;
