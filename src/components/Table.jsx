import Todo from "./Todo";
import Header from './Header'

const Table = ({filter, invoicesArr, handleCheck, setFilter}) => {
    return (
        <>
            <Header filter={filter} setFilter={setFilter} />
            <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Completado</th>
                <th scope="col">Detalhes</th>
                </tr>
            </thead>
            <tbody>
                {invoicesArr.map((e, i) => (
                filter ? e.title.includes(filter) && <Todo key={i} id={e.id} title={e.title} isCompleted={e.completed} handleCheck={handleCheck} /> : <Todo key={i} id={e.id} title={e.title} isCompleted={e.completed} handleCheck={handleCheck} />
                ))}
            </tbody>
            </table>   
        </>
    );
}
 
export default Table;