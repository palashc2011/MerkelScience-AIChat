"use client";
import { useState, useCallback, useRef, useEffect } from "react";
import fetchData from "../utils/fetchData";

export type RequestConfig = {
  method: string;
  contentType?: string;
};

export interface IUseAPIProps {
  requestConfig: RequestConfig;
}

export interface RequestParams {
  query?: Record<string, string[] | string>;
  body?: any;
  url: string;
}

export function useApi<ResponseType>(apiProps: IUseAPIProps) {
  const [data, setData] = useState<ResponseType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [cancelled, setCancelled] = useState(false);

  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => {
      controllerRef.current?.abort();
    };
  }, []);

  const cancel = useCallback(() => {
    if (controllerRef.current) {
      controllerRef.current.abort();
      setCancelled(true);
      setLoading(false);
    }
  }, []);

  const fetchDataCallback = useCallback(
    async ({ query, body, url }: RequestParams) => {

      controllerRef.current?.abort();

      const controller = new AbortController();
      controllerRef.current = controller;
      setCancelled(false);
      setLoading(true);

      try {
        const fetchedData = await fetchData<ResponseType>({
          ...apiProps.requestConfig,
          url,
          query,
          body,
          signal: controller.signal,
        });

        if (controller.signal.aborted) return null;

        setData(fetchedData);
        setError(null);
        return fetchedData;
      } catch (err: any) {

        if (err?.name === "AbortError") {
          return null;
        }
        const e = err instanceof Error ? err : new Error("An error occurred");
        setError(e);
        return null;
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    },
    [apiProps]
  );

  return {
    data,
    loading,
    error,
    cancelled,
    fetchData: fetchDataCallback,
    cancel,
  };
}
