import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-red-300">
      <div class="flex justify-center">
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
          <p class="text-gray-700 text-base mb-4">
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </p>
          <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
        </div>
      </div>
    </div>
  )
}

export default App
