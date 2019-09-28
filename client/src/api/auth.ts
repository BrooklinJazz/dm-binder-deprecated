import { IAuthInput } from "../common/types";
import { Call, Mutation, Query } from "./call";

export async function login<Retval>(
  inputs: IAuthInput,
  retVal: (keyof Required<Retval>)[]
) {
  return await new Call<IAuthInput, Retval>("").query(Query.login)(
    inputs,
    retVal
  );
}

export async function signUp<Retval>(
  inputs: IAuthInput,
  retVal: (keyof Required<Retval>)[]
) {
  return await new Call<IAuthInput, Retval>("").mutation(Mutation.createUser)(
    inputs,
    retVal
  );
}
