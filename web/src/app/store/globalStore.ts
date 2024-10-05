import { IHero } from "@app/entities/IHero";

import createStore from "./createStore";

interface IGlobalStore {
  heroes: IHero[];

  addHero(hero: IHero): void;
  updateHeroe(heroId: String): void;
  removeTodo(todoId: string): void;
}

const globalStore = createStore<IGlobalStore>((setState) => ({
  heroes: [],

  addHero: ({ name, origin, skill }: IHero) => {
    setState((prevState) => ({
      heroes: prevState.heroes.concat({
        id: Date.now().toString(),
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

  removeTodo: (heroId: string) => {
    setState((prevState) => ({
      heroes: prevState.heroes.filter((hero) => hero.id !== heroId),
    }));
  },
}));

export default globalStore;
