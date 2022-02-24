import { useState } from 'react';

export default function useFetching(callback: any): [any, boolean, string] {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetching = async (...args: any[]) => {
    try {
      setLoading(true);
      await callback(...args);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return [fetching, loading, error];
}
