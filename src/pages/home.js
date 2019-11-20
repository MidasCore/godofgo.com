import React from 'react'
import NavBarMenu from '../partials/menu'
import background from '../static/background.png'
class Home  extends React.Component{
  constructor(props){
    super(props)
    this.toGame = this.toGame.bind(this)
  }
  toGame(){
    this.props.history.push('/game')
  }
  render(){
    return(
      <div className="container">
        <div><NavBarMenu/></div>
        <div className="row">
        <div className="box-main-game">
          <div className="row box-select-table-play" id="box-select-table-play">
            <div className="col-sm-3" id="banso1" onClick={this.toGame}>
              <div className="user-left"/>
              <img src={background} className="img-fluid" />
              <div className="user-right"/>
              <div className="number-table">Bàn số 1</div>
            </div>
            <div className="col-sm-3" id="banso2" onClick={this.toGame} >
              <div className="user-left"/>
              <img src={background} className="img-fluid"/>
              <div className="user-right"/>
              <div className="number-table">Bàn số 2</div>
            </div>
            <div className="col-sm-3" id="banso3" onClick={this.toGame} >
              <div className="user-left"/>
              <img src={background} className="img-fluid"/>
              <div className="user-right"/>
              <div className="number-table">Bàn số 3</div>
            </div>
            <div className="col-sm-3" id="banso4" onClick={this.toGame} >
              <div className="user-left"/>
              <img src={background} className="img-fluid"/>
              <div className="user-right"/>
              <div className="number-table">Bàn số 4</div>
            </div>
            <div className="col-sm-3" id="banso5" onClick={this.toGame} >
              <div className="user-left"/>
              <img src={background} className="img-fluid"/>
              <div className="user-right"/>
              <div className="number-table">Bàn số 5</div>
            </div>
            <div className="col-sm-3" id="banso6" onClick={this.toGame} >
              <div className="user-left"/>
              <img src={background} className="img-fluid"/>
              <div className="user-right"/>
              <div className="number-table">Bàn số 6</div>
            </div>
            <div className="col-sm-3" id="banso7" onClick={this.toGame} >
              <div className="user-left"/>
              <img src={background} className="img-fluid"/>
              <div className="user-right"/>
              <div className="number-table">Bàn số 7</div>
            </div>
            <div className="col-sm-3" id="banso8" onClick={this.toGame}>
              <div className="user-left"/>
              <img src={background} className="img-fluid"/>
              <div className="user-right"/>
              <div className="number-table">Bàn số 8</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
export default Home
