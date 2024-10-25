import globalStore from "@app/store/globalStore";
import modalStore from "@app/store/modalStore";
import axios from "axios";
import {
  CircleOff,
  LayoutList,
  Leaf,
  TableCellsMerge,
  Wind,
} from "lucide-react";
import { useEffect } from "react";

import HeroItem from "./heroItem";
import Modal from "./modal";

function HeroList() {
  const stateModalOpen = modalStore.useStore((state) => state.isModalOpen);
  const heroes = globalStore.useStore((state) => state.heroes);
  const lengthHeroes = heroes.length;

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await axios.get(`api/heroes`);
        const { data } = response;
        globalStore.setState({ heroes: data });
      } catch (error) {
        console.error("Failed to get heroes:", error);
      }
    };

    fetchHeroes();
  }, [heroes]);

  return (
    <div className="flex flex-col gap-4 my-5">
      {stateModalOpen && <Modal />}
      <div className="flex items-center justify-between">
        <h2 className="text-xl my-4 inline-flex items-center gap-2 md:text-2xl font-medium ">
          <TableCellsMerge size={26} /> Quadro de Heróis
        </h2>

        {lengthHeroes === 0 && (
          <span className="text-xs flex items-center rounded-lg bg-purple-300 gap-2 p-2 h-fit">
            <CircleOff size={16} />
            Nenhuma herói encontrada
          </span>
        )}

        {lengthHeroes > 0 && (
          <span className="text-xs flex items-center rounded-lg bg-purple-300  gap-2 p-2 h-fit">
            <LayoutList size={16} />
            Total de Heróis: {lengthHeroes}
          </span>
        )}
      </div>

      {heroes.length === 0 ? (
        <span className="w-full  flex flex-col justify-center items-center h-full bg-purple-300 p-8 rounded-lg ">
          <span className="inline-flex items-end justify-center ">
            <Wind size={40} />
            <Leaf size={18} />
          </span>
          <p>Nenhuma herói encontrado</p>
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
