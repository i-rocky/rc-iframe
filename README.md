# rc-iframe

### Installation

`npm install rc-iframe --save`

or

`yarn add rc-iframe`

### Usage

```JS
import IFrame from 'rc-iframe';

export default class WhatEver extends React.Component {
    state = {
        text: 'Hello World',
    }
    
    render() {
        return (
            <div>
                <IFrame frameProps={{width: 500}}>
                    <p>{ this.state.text }</p>            
                </IFrame>        
            </div>
        );
    }
}
```
