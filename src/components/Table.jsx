import Todo from "./Todo";

const Table = ({filter, invoicesArr, handleCheck, setCurrentDetailing}) => {
    return (
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
              filter ? e.title.includes(filter) && <Todo key={i} id={e.id} title={e.title} isCompleted={e.completed} handleCheck={handleCheck} setCurrentDetailing={setCurrentDetailing} /> : <Todo key={i} id={e.id} title={e.title} isCompleted={e.completed} handleCheck={handleCheck} setCurrentDetailing={setCurrentDetailing} />
            ))}
          </tbody>
        </table>   
    );
}
 
export default Table;