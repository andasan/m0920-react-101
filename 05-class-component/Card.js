class Card extends React.Component {
  constructor() {
    super()
  }

  render(){

    return (
      <div className='row'>
        <div className='col s2'>
          <div className='card small'>
            <div className='card-image'>
              <img src='https://picsum.photos/200/300' />
            </div>
            <div className='card-content'>
              <p>{this.props.data.instructor}</p>
              <p>{this.props.data.subject}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
