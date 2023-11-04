import { useRepo } from "pinia-orm";
import io from "socket.io-client";
import { State } from "~/models/state.model";

export class IoBrokerWS {
  private socket: SocketIOClient.Socket | null = null;
  public initialize() {
    this.socket = io(`ws://192.168.2.200:8084`, {
      query: { key: "nokey" },
      upgrade: true,
      transports: ["websocket"],
    });

    this.socket.on("connect", () => {
      console.log("connected");
    });

    this.socket.on(
      "stateChange",
      (id: string, payload: SubscribeStateResponse<any>) => {
        useRepo(State).save({ id, val: payload.val, ts: payload.ts });
      }
    );
  }

  public subscribe(id: string) {
    this.socket?.emit("subscribe", id);
  }
}

// import { Modal, Tabs } from "antd";
// import _ from "lodash";
// import React, { Fragment, useCallback, useEffect, useReducer } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import io from "socket.io-client";
// import environment from "environment";
// import IoBrokerStatesAction from "stores/objects/actions/ObjectsAction";
// import { IRawObject } from "stores/objects/models/IObjectsState";
// import ObjectsAction from "stores/objects/actions/ObjectsAction";

// const { TabPane } = Tabs;

// interface IProps {}
// export const WebsocketContextProvider: React.FC<IProps> = (
//   props: React.PropsWithChildren<IProps>
// ) => {
//   const dispatchStore = useDispatch();
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const { socket } = state;

//   useEffect(() => {
//     if (!state.socket) {
//       const socket = io(
//         `ws://${environment.socket.host}:${environment.socket.port}`,
//         {
//           query: { key: "nokey" },
//           upgrade: true,
//           transports: ["websocket"],
//         }
//       );

//       socket.on("connect", () => {
//         dispatch({ type: EWebsocketActions.SET_CONNECTION, payload: true });
//       });
//       socket.on("disconnect", () => {
//         dispatch({ type: EWebsocketActions.SET_CONNECTION, payload: false });
//       });

//       socket.on(
//         "stateChange",
//         (identifier: string, object: IRawObject | null) => {
//           // console.log(identifier, object);
//           if (object)
//             dispatchStore(
//               ObjectsAction.storeObject({ identifier, object: convert(object) })
//             );
//         }
//       );

//       dispatch({ type: EWebsocketActions.SET_SOCKET, payload: socket });
//     }
//     return () => {
//       state.socket?.disconnect();
//     };
//   }, [state.socket, dispatch, dispatchStore]);

//   const _addSubscription = useCallback((identifier: string) => {
//     dispatch({ type: EWebsocketActions.ADD_SUBSCRIPTION, payload: identifier });
//   }, []);

//   const setState = useCallback(
//     (identifier: string, value: any) => {
//       socket?.emit("setState", identifier, value);
//     },
//     [socket]
//   );

//   const getState = useCallback(
//     (identifier: string, subscribe: boolean = true) => {
//       if (subscribe && !state.subscriptions.includes(identifier)) {
//         _addSubscription(identifier);
//       }
//       socket?.emit(
//         "getState",
//         identifier,
//         (value: any, object: IRawObject | null) => {
//           if (object) {
//             dispatchStore(
//               ObjectsAction.storeObject({ identifier, object: convert(object) })
//             );
//           } else {
//             console.warn(`[getState] ${identifier} is ${object}`);
//           }
//         }
//       );
//     },
//     [_addSubscription, dispatchStore, socket, state.subscriptions]
//   );

//   return (
//     <WebsocketContext.Provider
//       value={{ setState, getState, isConnected: state.isConnected }}
//     >
//       {props.children}
//     </WebsocketContext.Provider>
//   );
// };

// interface IContextProps {
//   setState(id: string, value: any): void;
//   getState(id: string, subscribe?: boolean, toJson?: boolean): void;
//   isConnected: boolean;
// }
// export const WebsocketContext = React.createContext<IContextProps>({
//   setState: () => console.log("[useWebsocket] createContext error -> setState"),
//   getState: () => console.log("[useWebsocket] createContext error -> getState"),
//   isConnected: false,
// });
// export const useWebsocket = (): IContextProps =>
//   React.useContext(WebsocketContext);

//* ----- REDUCER -----

// const initialState: IState = {
//   isConnected: false,
//   subscriptions: [],
// };

// function reducer(state: IState, action: Action): IState {
//   switch (action.type) {
//     case EWebsocketActions.SET_CONNECTION:
//       return { ...state, isConnected: action.payload };
//     case EWebsocketActions.SET_SOCKET:
//       return { ...state, socket: action.payload };
//     case EWebsocketActions.ADD_SUBSCRIPTION: {
//       state.socket?.emit('subscribe', action.payload);
//       return {
//         ...state,
//         subscriptions: [...state.subscriptions, action.payload],
//       };
//     }

//     default:
//       throw new Error();
//   }
// }

// const convert = (object: IRawObject) => {
//   try {
//     if (typeof object.val === 'string') {
//       object.val = JSON.parse(object.val);
//       return object;
//     }
//   } catch (e) {}

//   return object;
// };

// interface IState {
//   socket?: SocketIOClient.Socket;
//   isConnected: boolean;
//   subscriptions: string[];
// }

// type Action =
//   | { type: EWebsocketActions.SET_SOCKET; payload: SocketIOClient.Socket }
//   | { type: EWebsocketActions.ADD_SUBSCRIPTION; payload: string }
//   | { type: EWebsocketActions.SET_CONNECTION; payload: boolean };
// export enum EWebsocketActions {
//   'SET_CONNECTION',
//   'SET_SOCKET',
//   'ADD_SUBSCRIPTION',
// }
