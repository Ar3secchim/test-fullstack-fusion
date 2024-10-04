import { IHero } from "@app/entities/IHero";
import { PenLine, Trash2 } from "lucide-react";

import Button from "./button";

function HeroItem({ ...props }: IHero) {
  return (
    <div
      className={`flex justify-between itens-center p-2  rounded-xl border drop-shadow-sm `}
    >
      <div className="flex gap-4 items-center">
        <div>
          <Button className="bg-transparent">
            <PenLine color="#000000" />
          </Button>
        </div>
        <h3 className="text-lg font-medium">{props.name}</h3>
      </div>
      <div>
        <Button className="bg-transparent ">
          <Trash2 color="#e65555" />
        </Button>
      </div>
    </div>
  );
}

export default HeroItem;
