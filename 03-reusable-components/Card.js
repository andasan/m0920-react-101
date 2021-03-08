function Card(props){
    return(
        <div className="row">
            <div className="col s2">
                <div className="card small">
                    <div className="card-image">
                        <img src="https://picsum.photos/200/300" />
                    </div>
                    <div className="card-content">
                        <p>{props.name}</p>
                        <p>{props.subject}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}