import createStore from "./createStore";

interface IModalStore {
  isModalOpen: boolean;

  openModal(): void;
  closeModal(): void;
}

const modalStore = createStore<IModalStore>((setState) => ({
  isModalOpen: false,

  openModal: () => {
    setState({ isModalOpen: true });
  },

  closeModal: () => {
    setState({ isModalOpen: false });
  },
}));

export default modalStore;
