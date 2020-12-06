import React from 'react'
import {render} from 'react-dom'
import 'normalize.css'
import * as $ from 'jquery'
import './styles/css/style.css'
import './styles/scss/scss.scss'
import './styles/less/less.less'
import * as classes from './styles/css/card.module.css'
import * as modules from './styles/scss/book.module.scss'
import json from './assets/json.json'
import images from './assets/images/image.png'
import xml from './assets/data.xml'
import yourCsvFiles from './assets/yournewstyle.csv'
import './js/babel'

// function add() {
//     let count = 0
//     count = count + 10 * 50
//     console.log('JSON:', json);
//     console.log('XML:', xml);
//     console.log('CSV:', yourCsvFiles);

//     const container = document.querySelector('.container')
//     container.insertAdjacentHTML('beforeend', `<img src=${images}>`)
// }

// add()

const App = () => (
  <div className="App">
    <div className="App-inner">
      <div className="container">
        <h1>Hello World!</h1>
      </div>

      <div className="less">
        <h2 className="less__title">LESS</h2>
      </div>

      <div className="scss">
        <h2 className="scss__title">SCSS</h2>
      </div>

      <div className={classes.card}>
        <h2 className={classes.card__title}>This is module CSS</h2>
      </div>

      <div className={modules.book}>
        <h2 className={modules.book__title}>This is module SCSS</h2>
      </div>

      <div>
        <img src={images} alt="images"/>
      </div>
    </div>
  </div>
)

render(<App />, document.getElementById('root'))
