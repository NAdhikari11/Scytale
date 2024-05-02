import React from 'react'
import { useState } from 'react';

const Forensics = () => {

  const [inputFile, setinputFile] = useState('');
  const [filterExpressions, setfilterExpressions] = useState('');
  const [outputFile, setoutputFile] = useState('');
  const [inputCommand, setinputCommand] = useState('');


  const handleInputFileChange = (event) => {
    setinputFile(event.target.value);
  };

  const handleOutputFileChange = (event) => {
    setoutputFile(event.target.value);
  };

  const handleFilterChange = (event) => {
    setfilterExpressions(event.target.value);
  };

  const handleInputCommandChange = (event) => {
    setinputCommand(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('inputFile', inputFile);
      formData.append('inputCommand', inputCommand);
      formData.append('filterExpressions', filterExpressions);
      formData.append('outputFile', outputFile);

      const response = await fetch('http://localhost:5000/forensics', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log(data); // Do something with the response
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form>
      <div className='w-4/5 mx-auto border-2 p-12 mt-10 rounded-lg'>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h1 className="text-base font-semibold leading-7 text-gray-900">Network Forensics</h1>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Enter the information needed to run TShark Commands
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Input File
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="inputFile"
                      id="inputFile"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Input File"
                      onChange={handleInputFileChange}
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Filter Expressions
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="filterExpressions"
                      id="filterExpressions"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Filter Expressions"
                      onChange={handleFilterChange}
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Output File
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="outputFile"
                      id="outputFile"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Output File"
                      onChange={handleOutputFileChange}
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Input Commands
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="inputCommand"
                      id="inputCommand"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Input Commands"
                      onChange={handleInputCommandChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleSubmit}>
            Enter
          </button>
        </div>
      </div>

    </form>
  )
}

export default Forensics


