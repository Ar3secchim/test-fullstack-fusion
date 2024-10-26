import { IHero } from "@app/entities/IHero";

import createStore from "./createStore";

interface IGlobalStore {
  heroes: IHero[];
  selectedHero: IHero;

  setSelectedHero: (hero: IHero) => void;
  addHero(hero: IHero): void;
  updateHero: (hero: IHero) => void;
  removeHero(todoId: string): void;
}

const globalStore = createStore<IGlobalStore>((setState) => ({
  heroes: [],
  selectedHero: {
    id: "",
    name: "",
    origin: "",
    skill: "",
    urlImage: "",
  },

  setSelectedHero: (hero) => {
    setState({ selectedHero: hero });
  },

  addHero: ({ id, name, origin, skill, urlImage }: IHero) => {
    setState((prevState) => ({
      heroes: prevState.heroes.concat({
        id,
        name,
        origin,
        skill,
        urlImage,
      }),
    }));
  },

  updateHero: (updatedHero) => {
    setState((prevState) => ({
      heroes: prevState.heroes.map((hero) =>
        hero.id === updatedHero.id ? updatedHero : hero,
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
