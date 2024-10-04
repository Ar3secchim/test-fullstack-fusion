import { IHero } from "@app/entities/IHero";
import {
  CircleOff,
  LayoutList,
  Leaf,
  TableCellsMerge,
  Wind,
} from "lucide-react";

import HeroItem from "./heroItem";

const heroes: IHero[] = [
  { id: 1, name: "Superman", skill: "Super Força", origin: "Krypton" },
  { id: 2, name: "Batman", skill: "Inteligência", origin: "Terra" },
  { id: 3, name: "Wonder", skill: "Velocidade", origin: "Terra" },
];
const lengthHeroes = heroes.length;

function HeroList() {
  return (
    <div className="flex flex-col gap-4 my-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl my-4 inline-flex items-center gap-2 md:text-2xl font-medium ">
          <TableCellsMerge size={26} /> Quadro de Herois
        </h2>

        {lengthHeroes === 0 && (
          <span className="text-xs flex items-center rounded-lg bg-purple-300 gap-2 p-2 h-fit">
            <CircleOff size={16} />
            Nenhuma tarefa encontrada
          </span>
        )}

        {lengthHeroes > 0 && (
          <span className="text-xs flex items-center rounded-lg bg-purple-300  gap-2 p-2 h-fit">
            <LayoutList size={16} />
            Total de herois: {lengthHeroes}
          </span>
        )}
      </div>

      {heroes.length === 0 ? (
        <span className="w-full  flex flex-col justify-center items-center h-full bg-purple-300 p-8 rounded-lg ">
          <span className="inline-flex items-end justify-center ">
            <Wind size={40} />
            <Leaf size={18} />
          </span>
          <p>Nenhuma heroi encontrado</p>
        </span>
      ) : (
        <div className="flex flex-wrap gap-3 min-[420px]:justify-center">
          {heroes.map((hero) => (
            <HeroItem key={hero.id} {...hero} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HeroList;
