import React from 'react';

import Form from './Form';

export default class App extends React.Component{
  constructor(){
    super()

    this.state = {
      firstname: ''
    }
  }

  getCookie (name) {
    console.log("si")
    var cookies = document.cookie && document.cookie.split(';')
    var data = cookies.map((cookie) => cookie.trim()).find((cookie) => cookie.startsWith(name))
    var value = data.split('=')[1]
    var obj = JSON.parse(value)
    return obj
  }

  onSave = (event) => {
    document.cookie="form="+JSON.stringify(`${this.state.firstname}`)
  }

  onChangeFirstName = (event) => {
    this.setState({
        firstname: event.target.value
    })
  }

  onChangeLastName = (event) => {
    this.setState({
        lastname: event.target.value
    })
  }

  render (){
    return(
      <div>
        {this.getCookie('form')}
        <div style={{margin:'auto'}}>
          <Form 
            onSubmit={this.onSave}
            setFieldValueFirstName={this.state.firstname}
            onChangeFirstName={this.onChangeFirstName}
            setFieldValueLastName={this.state.lastname}
            onChangeLastName={this.onChangeLastName}
          />
        </div>

      </div>
    )
  }
}