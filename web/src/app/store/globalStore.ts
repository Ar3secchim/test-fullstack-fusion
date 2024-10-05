import { IHero } from "@app/entities/IHero";

import createStore from "./createStore";

interface IGlobalStore {
  heroes: IHero[];

  addHero(hero: IHero): void;
  updateHeroe(heroId: String): void;
  removeHero(todoId: string): void;
}

const globalStore = createStore<IGlobalStore>((setState) => ({
  heroes: [],

  addHero: ({ name, origin, skill, id }: IHero) => {
    setState((prevState) => ({
      heroes: prevState.heroes.concat({
        id,
        name,
        origin,
        skill,
      }),
    }));
  },

  updateHeroe: (heroId: string) => {
    setState((prevState) => ({
      heroes: prevState.heroes.map((hero) =>
        hero.id === heroId ? { ...hero } : hero,
      ),
    }));
  },

  removeHero: (heroId: string) => {
    setState((prevState) => ({
      heroes: prevState.heroes.filter((hero) => hero.id !== heroId),
    }));
  },
}));

export default globalStore;
