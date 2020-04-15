import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: this.props.tabsContent,
            currIndex: 0
        }
    }

    createTabs() {
        //build a variable, it can be a dom element
        //populate it with a loop
        //return it
        let div = document.createElement("div")
        let ul = document.createElement("ul");
        let isCurr = false;
        for (let i = 0; i < 3; i++) {
          let li = document.createElement("li");
          if (i === this.state.currIndex) {
              isCurr = true;
              let article = document.createElement('article')
              article.innerHTML = this.state.tabs[i].content;
          }
          li.innerHTML = this.state.tabs[i].title;
          ul.appendChild(li);
        }
        div.append(ul);
        if (isCurr) {
            div.append(article);
        }
        return div;
    }

    render() {
        return(
            <div className="tabs">
                {this.createTabs()}
            </div>
        )
    }
}

export default Tabs;