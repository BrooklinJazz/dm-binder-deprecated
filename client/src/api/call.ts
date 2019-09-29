import { BASE_URL } from "../common/constants";
export enum Mutation {
  createNPC = "createNPC",
  createUser = "createUser"
}

export enum Query {
  NPCs = "NPCs",
  login = "login"
}

const inputFromObj = (obj: { [key: string]: any }) =>
  Object.keys(obj as any)
    .map(
      key =>
        `${key}: ${typeof obj[key] === "string" ? `"${obj[key]}"` : obj[key]}`
    )
    .join(", ");

export class Call<Input, Retval extends object> {
  public readonly token: string;
  public readonly headers: Headers;
  constructor(token: string) {
    this.token = token;
    this.headers = new Headers({
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    });
  }

  public mutation = (action: Mutation) => {
    return this.sendRequest("mutation", "POST")(action);
  };

  public query = (action: Query) => {
    return this.sendRequest("query", "GET")(action);
  };

  private sendRequest = (
    type: "mutation" | "query",
    method: "POST" | "GET"
  ) => (action: Mutation | Query) => async (
    inputs: Input,
    retVal: (keyof Required<Retval>)[]
  ): Promise<Retval> => {
    const body = JSON.stringify({
      query: `
                ${type} {
                    ${action}${inputs && `(input: {${inputFromObj(inputs)}})`} {
                        ${retVal.join(`
                        `)}
                    }
                }
            `
    });
    return await fetch(BASE_URL, {
      method: "POST",
      body,
      headers: this.headers
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed Request");
        }
        return res.json();
      })
      .then(resData => Object.values(resData.data)[0] as Retval)
      .catch(err => {
        throw new Error(err);
      });
  };
}
