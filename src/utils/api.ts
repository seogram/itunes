export default async function api<T>(request: RequestInfo): Promise<T | undefined> {
    try {
      const response = await fetch(request);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }