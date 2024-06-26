import React, { ChangeEventHandler, DetailedHTMLProps, FormEvent, ReactEventHandler } from 'react'

interface ISearchBarProps {
  filterText: string,
  inWishListOnly: boolean,
  setValue: Function
}

export const SearchBar = ({ filterText, inWishListOnly, setValue}: ISearchBarProps ) => {
  
  const changeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setValue(event.target.value)
  }
  
  return (
    <form action="" className='border border-b-1 border-[#ffffff33] pb-[30px]'>
        <input 
        type="text" 
        className="bg-[#1e3066] border-none 
        p-[10px] min-w-[30%] mr-[30px] m-4 text-white 
        placeholder:text-[#ffffff65] rounded-md" 
        placeholder='Search by name'
        value={ filterText }
        onChange={ changeEventHandler }
        />
        <label>
            <input 
                type="checkbox"
                className="mr-[5px] text-gray-300"
            />
            Only in whish list
        </label>
    </form>
  )
}
