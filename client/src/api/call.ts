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

export class Call<Input, Retval extends Object> {
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
    return this.sendRequest("mutation")(action);
  };

  public query = (action: Query) => {
    return this.sendRequest("query")(action);
  };

  private sendRequest = (type: "mutation" | "query") => (
    action: Mutation | Query
  ) => async (
    inputs: Input,
    retVal: Required<keyof Retval>[]
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
      .then(async res => {
        const decodedResponse = await res.json();
        if ("errors" in decodedResponse) {
          throw new Error(decodedResponse.errors[0].message || "Failed Request");
        }
        return decodedResponse;
      })
      .then(resData => Object.values(resData.data)[0] as Retval)
      .catch((err: string) => {
        throw new Error(err);
      });
  };
}
