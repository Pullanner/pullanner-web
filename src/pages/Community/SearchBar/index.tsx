import { useState, useRef, type KeyboardEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isInputFocusIn, setInputFocus] = useState(false);
  const inputActiveStyle = isInputFocusIn ? 'border-4 border-primary' : '';

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputRef.current) {
      const searchWord = inputRef.current.value;
      if (searchWord.length) {
        searchParams.set('search', searchWord);
        setSearchParams(searchParams);
      }
    }
  };

  const handleInputFocus = () => {
    setInputFocus(true);
  };

  const handleInputBlur = () => {
    setInputFocus(false);
  };

  return (
    <div
      className={`${inputActiveStyle} flex h-9 w-64 items-center justify-center gap-x-1.5 overflow-hidden rounded-full bg-white`}
    >
      <img className="ml-1 h-3 w-3" src="/assets/images/search-icon.png" alt="search-icon" />
      <input
        ref={inputRef}
        type="text"
        className="text-black focus:outline-transparent"
        onKeyDown={handleInputKeyDown}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </div>
  );
};
