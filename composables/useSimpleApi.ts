export interface GetStateResponse<T> {
  id: string;
  val: T;
  q: number;
  ts: number;
  lc: number;
  ack: boolean;
  from: string;
  expire: number;
  type: string;
  common: {};
  native: {};
}

export interface SubscribeStateResponse<T> {
  ack: boolean;
  from: string;
  lc: number;
  q: number;
  ts: number;
  user: string;
  val: T;
}

export interface GetStatesResponse {
  [key: string]: GetStateResponse<any>;
}

export const useSimpleApi = () => {
  const baseURL = "http://192.168.2.200:8087";
  const api = $fetch.create({ baseURL });

  const getState = async (query: string) => {
    return await api<GetStatesResponse>(`/get/${encodeEndpoint(query)}`, {
      method: "GET",
    });
  };

  return { getState };
};

const encodeEndpoint = (endpoint: string) =>
  encodeURI(endpoint.replace(/#/g, "%23"));
