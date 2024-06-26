import React, { ChangeEventHandler, DetailedHTMLProps, FormEvent, ReactEventHandler } from 'react'

interface ISearchBarProps {
  filterText: string,
  inWishListOnly: boolean,
  setValue: Function
  setInWishListOnly: Function
}

export const SearchBar = ({ filterText, inWishListOnly, setValue, setInWishListOnly}: ISearchBarProps ) => {
  
  const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setValue(event.target.value)
  }
  const onChangeCheckboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked)
    setInWishListOnly(event.target.checked)
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
        onChange={ onChangeInputHandler }
        />
        <label>
            <input 
                type="checkbox"
                className="mr-[5px] text-gray-300"
                checked={ inWishListOnly }
                onChange={ onChangeCheckboxHandler}
            />
            Only in whish list
        </label>
    </form>
  )
}
