import { IHero } from "@app/entities/IHero";
import globalStore from "@app/store/globalStore";
import modalStore from "@app/store/modalStore";
import axios from "axios";
import { MapPinCheckInside, PenLine, Swords, Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "./button";
import Label from "./label";

function HeroItem({ ...props }: IHero) {
  const removeHeroe = globalStore.useStore((state) => state.removeHero);
  const openModal = modalStore.useStore((state) => state.openModal);
  const setSelectedHero = globalStore.useStore(
    (state) => state.setSelectedHero,
  );

  const openModalWithHero = (hero: IHero) => {
    setSelectedHero(hero);
    openModal();
  };

  const removeHero = async (heroId: string) => {
    try {
      await axios.delete(`api/heroes/${heroId}`);
      removeHeroe(heroId);
      toast.warn("Herói removido com sucesso");
    } catch (error) {
      toast.error("Erro ao remover herói");
    }
  };

  const { urlImage, name, origin, skill, id } = props;
  return (
    <div className="flex flex-col w-60 p-2 rounded-xl border drop-shadow-sm gap-4">
      <div className="flex justify-between">
        <Button
          className="bg-transparent w-11"
          onClick={() => openModalWithHero(props)}
        >
          <PenLine color="#000000" />
        </Button>

        <Button className="bg-transparent w-11" onClick={() => removeHero(id)}>
          <Trash2 color="#e65555" />
        </Button>
      </div>

      <div>
        <img
          src={urlImage}
          alt={name}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>

      <h2 className="text-xl font-bold text-center">{name}</h2>

      <span className="flex justify-between">
        <Label>
          <MapPinCheckInside size={16} />
          {origin.length > 10 ? `${origin.substring(0, 10)}...` : origin}
        </Label>

        <Label>
          <Swords size={16} />

          {skill.length > 10 ? `${skill.substring(0, 10)}...` : skill}
        </Label>
      </span>
    </div>
  );
}

export default HeroItem;
