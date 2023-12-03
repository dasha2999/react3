import React from "react"
export class Card extends React.Component {
    render () {
        console.log('Card render')
        const { userName, phone, email} = this.props
        return (
        <div>
          <div>
            {/* <img src={avatar} alt='avatar'/> */}
          </div>
          <div>
          {`${userName}`}
          </div>

          <div>
            {`${phone}`}
          </div>
          <div>
          {`${email}`}
          </div>
          <br></br>
        </div>
        )
    }
}