import { ReactNode } from "react";
import React, { createContext, useReducer } from "react";
import { Card, mockCards } from "../constants/mockCards";

export type AppState = {
  cardsRemaining: number;
  cards: Array<Card>;
};

const initialState: AppState = {
  cardsRemaining: 9,
  cards: mockCards.cards,
};

export type Action = {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
};

export type Dispatch = (action: Action) => void;

export const AppContext = createContext<{
  state: AppState;
  dispatch: Dispatch;
}>({
  state: initialState,
  dispatch: () => null,
});

const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "decCard":
      return {
        ...state,
        cardsRemaining: state.cardsRemaining - 1,
      };
    case "resetCards":
      return {
        ...state,
        cardsRemaining: 9,
      };
    default:
      return state;
  }
};

export const AppContextProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
