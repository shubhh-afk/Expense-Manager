import React from 'react'
import Button from '../../components/Button'

function ManageExpenses() {
  return (
    <div className='w-full h-screen flex flex-col'>
      <h1 className='text-2xl p-5 m-2'>Manage Expenses</h1>
      <div className='p-2 m-2 flex justify-between' >
        <div>
        <Button 
        buttonText="Create Expense" 
        className='rounded-sm'
        />
        </div>
        <div className='flex gap-10'>
        <span className='text-center flex items-center'>
          <a 
          href="#"
          className='text-blue-800 hover:text-blue-700'
          >Vender Registration Form</a>
        </span>
        <span className='text-center flex items-center'>
          <a 
          href="#"
          className='text-blue-800 hover:text-blue-700'
          >Temporary Employement</a>
        </span>
        </div>
      </div>
    </div>
  )
}

export default ManageExpenses