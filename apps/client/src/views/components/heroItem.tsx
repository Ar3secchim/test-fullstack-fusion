import { IHero } from "@app/entities/IHero";
import globalStore from "@app/store/globalStore";
import modalStore from "@app/store/modalStore";
import axios from "axios";
import { MapPinCheckInside, PenLine, Swords, Trash2 } from "lucide-react";

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
      alert("Herói removido com sucesso");
    } catch (error) {
      alert("Error removing hero:", error.message);
    }
  };

  return (
    <div className="flex flex-col w-60 p-2 rounded-xl border drop-shadow-sm gap-4">
      <div className="flex justify-between">
        <Button
          className="bg-transparent w-11"
          onClick={() => openModalWithHero(props)}
        >
          <PenLine color="#000000" />
        </Button>

        <Button
          className="bg-transparent w-11"
          onClick={() => removeHero(props.id)}
        >
          <Trash2 color="#e65555" />
        </Button>
      </div>

      <div>
        <img
          src={`https://robohash.org/${props.name}`}
          alt={props.name}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>

      <h2 className="text-xl font-bold text-center">{props.name}</h2>

      <span className="flex justify-between">
        <Label>
          <MapPinCheckInside size={16} />
          {props.origin.length > 10
            ? `${props.origin.substring(0, 10)}...`
            : props.origin}
        </Label>

        <Label>
          <Swords size={16} />

          {props.skill.length > 10
            ? `${props.skill.substring(0, 10)}...`
            : props.skill}
        </Label>
      </span>
    </div>
  );
}

export default HeroItem;
