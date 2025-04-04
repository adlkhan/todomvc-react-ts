import { createContext, Dispatch } from "react";

export const DispatchContext = createContext<Dispatch<Action> | null>(null);
