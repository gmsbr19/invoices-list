import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Details = ({invoicesArr}) => {
    const {taskId} = useParams()
    const task = invoicesArr.find(task => task.id === parseInt(taskId))

    if (!task){
        return (
            <div>
                Task not found! 
            </div>
        )
    }

    return (
        <div>
            <header className="fs-3">
                <Link to="/">
                    <i class="bi bi-arrow-left"></i>
                </Link>
            </header>
            <main className="container">
                <h1>{task.title}</h1>
                <p>Id: {task.id}</p>
                <p>Completado: {task.completed ? "Sim" : "Não"}</p>
            </main>
        </div>
    );
}
 
export default Details;