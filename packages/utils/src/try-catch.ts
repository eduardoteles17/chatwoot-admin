import { type ResultAsync, okAsync, errAsync} from "neverthrow"

export async function tryCatch<T, E = Error>(promise: T): Promise<ResultAsync<T, E>> {
  try {
    const data = await promise;

    return okAsync(data)
  } catch (error) {
    return errAsync(error as E)
  }
}
