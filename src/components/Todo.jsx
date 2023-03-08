import { useState } from 'react';
import { Link } from 'react-router-dom';

const Todo = ({ id, title, handleCheck, isCompleted, setCurrentDetailing }) => {
	const [show, setShow] = useState(false)

	return (
		<>
			<tr>
				<th scope="row">{id}</th>
				<td>{title}</td>
				<td>
					<input
						className="form-check-input"
						onChange={(e) => handleCheck(e.target, id)}
						type="checkbox"
						checked={isCompleted}
					/>
				</td>
				<td>
                    <i
                        className="bi bi-info-square m-0"
                        onClick={() => setCurrentDetailing(id)}
                    ></i>
				</td>
			</tr>
		</>
	)
}

export default Todo
