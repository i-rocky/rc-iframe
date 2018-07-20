# rc-iframe (beta)

### Installation

`do not install in your project yet`

### Usage

```JS
import IFrame from 'rc-iframe'
...
render() {
    
    state = {
        text: 'Hello World',
    }
    
    return (
        <div>
            <IFrame frameProps={{width: 500}}>
                <p>{ this.state.text }</p>            
            </IFrame>        
        </div>
    );
}
```
