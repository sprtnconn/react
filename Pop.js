import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const style = {
    borderRadius: 0,
    opacity: 0.7,
    padding: '2em',
}

export default class PopupExampleStyle extends Component (
    render() {
        return <Popup trigger={<Button icon='eye' />} content='Popup with a custom style prop' style={style}/>
    }
)
