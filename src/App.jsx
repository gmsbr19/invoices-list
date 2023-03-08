import { useEffect, useState } from 'react'
import axios from 'axios'
import Table from './components/Table'
import Details from './components/Details'
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {
	const [filter, setFilter] = useState('')
	const [invoicesArr, setInvoicesArr] = useState([])
  const navigate = useNavigate()

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => setInvoicesArr(res.data))
		// .then(() => console.log(invoicesArr))
	}, [])

	const handleCheck = (el, id) => {
		setInvoicesArr((prev) =>
			prev.map((e) => {
				return id === e.id ? { ...e, completed: el.checked } : e
			})
		)
	}

	return (
    <div className='p-4'>
      <Routes>
        <Route path='/' element={<Table filter={filter} setFilter={setFilter} invoicesArr={invoicesArr} handleCheck={handleCheck} />} />
        <Route path="/task/:taskId" element={<Details invoicesArr={invoicesArr} />} />
      </Routes>
    </div>
	)
}

export default App
