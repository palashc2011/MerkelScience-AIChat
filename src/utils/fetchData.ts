function toQueryString(
  query: Record<string, string[] | string> | undefined
): string {
  return (
    (query &&
      Object.keys(query)
        .map((key) => {
          const valueArr = query[key];
          if (Array.isArray(valueArr)) {
            return `${valueArr
              .map(
                (val) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
              )
              .join("&")}`;
          } else {
            return `${encodeURIComponent(key)}=${encodeURIComponent(valueArr)}`;
          }
        })
        .join("&")) ||
    ""
  );
}

export type RequestConfig = {
  path: string;
  method?: string;
  contentType?: string;
}

type FetchParams = {
  query?: Record<string, string[] | string>;
  body?: any;
  url: string;
  method: string;
  signal?: AbortSignal;
}

const fetchData = async <T>({
  // meth,
  method,
  query,
  body,
  url,
  signal
}: FetchParams): Promise<T | null> => {
  let fullUrl = url;

  if (query) {
    fullUrl = `${url}?${toQueryString(query)}`;
  }
  const contentTypeHeader: any =
    body instanceof FormData
      ? {}
      : { "Content-Type": "application/json" };
  try {
    const response = await fetch(fullUrl, {
      method,
      headers: {
        ...contentTypeHeader,
      },
      body: body instanceof FormData ? body : JSON.stringify(body),
      credentials: "include",
      signal
    });

    const fetchedData = await response.json();
    return fetchedData;
  } catch (error: any) {
    throw error;
  }
};

export default fetchData;
