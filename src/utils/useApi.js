import { useState, useCallback } from 'react';
import { logError } from './logger';

const defaultOptions = {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
};

const useApi = () => {
  const [state, setState] = useState({ data: undefined, errors: [], success: false, isLoading: false });

  const callbackApi = useCallback(async (url, options) => {
    const fetchOptions = {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    };

    setState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    try {
      let response = await await fetch(url, fetchOptions);
      response = await response.json();

      setState({
        isLoading: false,
        data: response.data,
        success: response.success,
        errors: response.errors ?? [],
      });
    } catch (error) {
      logError('API failed', error);
    }
  }, []);

  return [state, callbackApi];
};

export default useApi;
