const Header = ({filter, setFilter}) => {
    return (
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
    );
}
 
export default Header;