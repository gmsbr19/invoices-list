import { useEffect, useState } from 'react'
import axios from 'axios'
import Table from './components/Table'
import Details from './components/Details'
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {
	const [filter, setFilter] = useState('')
	const [invoicesArr, setInvoicesArr] = useState([])
  const [currentDetailing, setCurrentDetailing] = useState()
  const navigate = useNavigate()

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => setInvoicesArr(res.data))
		// .then(() => console.log(invoicesArr))
	}, [])

  useEffect(() => {
    navigate(`/details/${currentDetailing}`)
  }, [currentDetailing])

	const handleCheck = (el, id) => {
		setInvoicesArr((prev) =>
			prev.map((e) => {
				return id === e.id ? { ...e, completed: el.checked } : e
			})
		)
	}

	return (
    <div className='p-4'>
      <div className="d-flex align-items-center justify-content-between">
        <h3>Listagem de notas fiscais</h3>
        <div className="input-group w-25">
          <span className="input-group-text d-flex align-items-center px-2">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            value={filter}
            placeholder="Pesquisar nome..."
            onChange={(e) => setFilter(e.target.value)}
            />
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Table filter={filter} setCurrentDetailing={setCurrentDetailing} invoicesArr={invoicesArr} handleCheck={handleCheck} />} />
        <Route path={`/details/${currentDetailing}`} element={<Details />} />
      </Routes>
    </div>
	)
}

export default App
