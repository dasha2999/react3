import React from 'react';
import { Card } from './Cards/Card';
import { DATA } from '../constants/data';
import { delay } from '../utils/delay';
import prealoader from '../images/preloader.gif'

export class App extends React.Component {

  state = {
    userList: null
  }

  // ререндер компонента
  // 1. props changes
  // 2. state changes
  // 3. forceUpdate, forceRender

  // real DOM (RDOM)
  // virtual DOM (VDOM)
  // diffing - процесс
  // reconcilation

  // 3 группы
  // Монтирование компонента (Mouting)
  // Обновление компонента (Updating)
  // Удаление, демонтирование или размонтирование (Unmounting)

  componentDidMount() { // метод
    // delay(1000).then(() => fetch('https://reqres.in/api/users?page=2'))
    // .then((resp) => resp.json())
    // .then(({data}) => {
    //   this.setState({
    //     userList: data
    //   })
    // })
    
    delay(1000).then(() => fetch('https://jsonplaceholder.typicode.com/users'))
    .then((resp) => resp.json())
    .then((data) => {
      this.setState(
        {userList: data}
      )
    })
    console.log('App component did mount')
  }

  render() {
    console.log('App render')
    return (
      <>
        <h1> Employees </h1>
        <div> Cards should be here </div>
        {
          !this.state.userList ? <img src={prealoader} alt='preloader' /> :
          this.state.userList?.map(({name, phone, email, id}) => (
            <Card 
           userName = {name}
           phone= {phone}
           email = {email}
           key = {id}
           />    
         ))
        }

        {/* <Card 
        userName='John' 
        userLastName='Travolta' 
        avatar='https://reqres.in/img/faces/7-image.jpg'
        /> */}

        {/* <div>
          <div>
            <img src='https://reqres.in/img/faces/7-image.jpg' alt='avatar'/>
          </div>

          <div>
            Michael Lawson
          </div>
        </div> */}
      </>
    )
  }
}