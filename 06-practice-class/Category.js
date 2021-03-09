// change this Component to a class!
// function Category(props){
//     // get data from props and use map to build an array of <li>
//     // ... code goes here
//     return(
//         <div>
//             {/* Your Code Here */}
//         </div>
//     )
// }

class Category extends React.Component{
    constructor(){
        super()
    }

    render(){
        console.log(this.props.toys)

        const navLinks = this.props.icons.map((link, index) => (
            <li className="cat-link left valign-wrapper" key={index}>
				<i className="material-icons">{link.icon}</i>{link.title}
			</li>
        ))

        return(
            <React.Fragment>
                <div className="row">
                    <ul className="cat-nav center-align">
                    {navLinks}
                    </ul>
                </div>
                <div className="row">
                    <ul>
                    {this.props.toys.map((toy, i) => (
                        <li key={i}>
                            {toy}
                        </li>
                    ))}
                    </ul>
                </div>
            </React.Fragment>
        )
    }




}

