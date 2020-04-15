import React from 'react';
import Clock from './clock';
import Tabs from './tabs'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabsContent: [{'title': 'tab1', 'content': 'I am the FIRST tab :P'}, {'title': 'tab3', 'content': 'I am a tab'}],
        };
    }
    
    render() {
        return (
            <div>
                <Clock />
                <Tabs tabsContent={this.state.tabsContent}/>
            </div>
        )
    }
}

export default Main;