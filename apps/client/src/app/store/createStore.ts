/* eslint-disable no-shadow */

import { useSyncExternalStore } from "react";

/**
 * Define uma função que recebe o estado anterior e retorna um objeto parcial com as atualizações.
 * @template T O tipo do estado.
 * @param prevState O estado anterior.
 * @returns Um objeto parcial com as atualizações do estado.
 */
type SetterFn<T> = (prevState: T) => Partial<T>;

/**
 * Define uma função para atualizar o estado.
 * @template T O tipo do estado.
 * @param partialState Um objeto parcial com as atualizações do estado ou uma função que recebe o estado anterior e retorna as atualizações.
 */
type SetStateFn<T> = (partialState: Partial<T> | SetterFn<T>) => void;

function createStore<TState>(
  initialState: (
    setState: SetStateFn<TState>,
    getState: () => TState,
  ) => TState,
) {
  // inicializando sem valor
  let state: TState;
  let listeners: Set<() => void>;

  function notifyListeners() {
    listeners.forEach((listener) => listener());
  }

  // tipagem partial do estado inicial atraves do Partial
  function setState(partialState: Partial<TState> | SetterFn<TState>) {
    // verificação da assinatura que foi usada
    const newValue =
      typeof partialState === "function" ? partialState(state) : partialState;

    state = {
      ...state,
      ...newValue,
    };

    notifyListeners();
  }

  function getState() {
    return state;
  }
  /**
   * Inscreve um ouvinte para ser notificado quando o estado for alterado.
   * @param listener - Uma função de callback que será chamada quando o estado mudar.
   * @returns Uma função para cancelar a inscrição do ouvinte.
   */
  function subscribe(listener: () => void) {
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  }

  /**
   * Hook personalizado para acessar e selecionar partes do estado da store.
   * @template TValue O tipo do valor retornado pelo seletor.
   * @param {function} selector Uma função que recebe o estado atual e retorna um valor derivado.
   * @returns {TValue} O valor selecionado do estado, que será atualizado quando o estado mudar.
   * @example
   */
  function useStore<TValue>(
    selector: (currentState: TState) => TValue,
  ): TValue {
    const value = useSyncExternalStore(subscribe, () => selector(state));

    return value;
  }

  // declarando o valor
  state = initialState(setState, getState);
  listeners = new Set();

  return { setState, useStore };
}

export default createStore;
