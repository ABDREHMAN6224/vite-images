import React, { useState } from 'react'
import { useGlobalContext } from './context';

const SearchForm = () => {
  const {setSearch}=useGlobalContext()
  const handleSubmit=(e)=>{
    e.preventDefault();
    const searchVal=e.target.elements.search.value;
    if(!searchVal){
      return;
    }
    setSearch(searchVal);

  }
  return (
    <section>
      <h1 className='title'>unsplash images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input type="text" placeholder='cat' name='search' className='form-input search-input' autoComplete='off'/>
        <button type="submit" className='btn'>search</button>
      </form>
    </section>
  )
}

export default SearchForm
