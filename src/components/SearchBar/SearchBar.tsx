import React from 'react'
import { MdOutlineImageSearch } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';

import css from './SearchBar.module.css'
import { SearchBarProps } from '../../App.types';

const SearchBar = ({ onSearch }: SearchBarProps) => {
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const target = event.target as typeof event.target & {
    elements: {
      query: { value: string };
    };
  };

  const query = target.elements.query.value.trim();

  if (query === '') {
    toast.error('Please enter a search text');
    return;
  }

  onSearch(query);
  event.currentTarget.reset();
  };

  const Icon = MdOutlineImageSearch as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

  return (
      <>
        <header className={css.header}>
            <form className={css.form} onSubmit={handleSubmit}>
          <div className={css.inputContainer}>
            <input
              type="text"
              autoComplete="off"
              name="query"
                autoFocus
            placeholder="Search images and photos"
            className={css.input}
                />
            <button type="submit" className={css.button}>
              <Icon className={css.icon} />
                </button>
                </div>
            </form>
      </header>
      <Toaster position='top-right' toastOptions={{
        style: {
          background: 'red',
          color: 'white',
        },
      }}/>
      </>
  )
}

export default SearchBar