# rc-iframe

[![Build Status](https://travis-ci.org/i-rocky/rc-iframe.svg?branch=master)](https://travis-ci.org/i-rocky/rc-iframe) [![Version](https://img.shields.io/npm/v/rc-iframe.svg)](https://www.npmjs.com/package/rc-iframe)
[![Total Downloads](https://img.shields.io/npm/dt/rc-iframe.svg)](https://www.npmjs.com/package/rc-iframe)
[![License](https://img.shields.io/github/license/i-rocky/rc-iframe.svg)](https://github.com/i-rocky/rc-iframe/blob/master/LICENSE)

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
