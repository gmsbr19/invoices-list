import { useState } from 'react';
import { Link } from 'react-router-dom';

const Todo = ({ id, title, handleCheck, isCompleted }) => {
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
                    <Link to={`/task/${id}`}>
                        <i
                            className="bi bi-info-square m-0"
                        ></i>
                    </Link>
				</td>
			</tr>
		</>
	)
}

export default Todo
