export default function Links({type, onSubmit, children}){
    return(
        <>  
            <div className="card border border-2 border-primary" style={{ padding: '20px'}}>
            <div className="card-body">
                {children}
                <button className="btn btn-success d-block mx-auto" onClick={onSubmit}>{type}</button>
            </div>
            </div>
        </>
    );
}