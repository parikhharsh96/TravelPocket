// React hook for using the API client with loading and error states

'use client';

import { useState, useCallback } from 'react';
import { api } from './api-client';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApi<T = unknown>() {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (
      endpoint: string,
      method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' = 'GET',
      body?: unknown
    ) => {
      setState({ data: null, loading: true, error: null });

      try {
        let response;
        if (method === 'GET') {
          response = await api.get<T>(endpoint);
        } else if (method === 'POST') {
          response = await api.post<T>(endpoint, body);
        } else if (method === 'PUT') {
          response = await api.put<T>(endpoint, body);
        } else if (method === 'PATCH') {
          response = await api.patch<T>(endpoint, body);
        } else if (method === 'DELETE') {
          response = await api.delete<T>(endpoint);
        }

        if (response?.error) {
          setState({
            data: null,
            loading: false,
            error: response.error,
          });
        } else {
          setState({
            data: response?.data || null,
            loading: false,
            error: null,
          });
        }

        return response;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        setState({
          data: null,
          loading: false,
          error: errorMessage,
        });
      }
    },
    []
  );

  return {
    ...state,
    execute,
  };
}