import { useState, useCallback, ChangeEvent } from 'react';

export const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onReset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  return { value, setValue, onChange, onReset };
};
