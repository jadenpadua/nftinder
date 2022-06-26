import { ReactNode } from "react";
import React, { createContext, useReducer } from "react";
import { Card, mockCards } from "../constants/mockCards";

export type AppState = {
  gameState: string;
  cardsRemaining: number;
  cards: Array<Card>;
  swipeRights: Array<number>;
};

const initialState: AppState = {
  gameState: "results",
  cardsRemaining: 9,
  cards: mockCards.cards,
  swipeRights: [1,2],
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
    case "cardAction":
      const { dir, index } = action.payload;

      if (dir === 1) {
        return {
          ...state,
          cardsRemaining: state.cardsRemaining - 1,
          swipeRights: [...state.swipeRights, index],
        };
      } else {
        return {
          ...state,
          cardsRemaining: state.cardsRemaining - 1,
        };
      }

    case "resetCards":
      return {
        ...state,
        cardsRemaining: 9,
      };
    case "switchGameState":
      return {
        ...state,
        gameState: action.payload,
      };
    case "setCards":
      const newCards: Array<Card> = mockCards.cards.filter((card: Card) =>
        state.swipeRights.includes(card.index)
      );
      return {
        ...state,
        cards: newCards,
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
