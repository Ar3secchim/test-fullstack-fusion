import { IHero } from "@app/entities/IHero";
import { MapPinCheckInside, PenLine, Swords, Trash2 } from "lucide-react";

import Button from "./button";
import Label from "./label";

function HeroItem({ ...props }: IHero) {
  return (
    <div className="flex flex-col w-60 p-2 rounded-xl border drop-shadow-sm gap-4">
      <div className="flex justify-between">
        <Button className="bg-transparent w-11">
          <PenLine color="#000000" />
        </Button>

        <Button className="bg-transparent w-11">
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
          {props.origin}
        </Label>

        <Label>
          <Swords size={16} />
          {props.skill}
        </Label>
      </span>
    </div>
  );
}

export default HeroItem;
