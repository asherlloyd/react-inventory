import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Item extends React.Component {
    equip() {
        this.props.onClick(this.props.index)
    }
    render() {
        return (
            <div className={"item " + (this.props.isEquipped ? "equipped" : "")} onClick={this.equip.bind(this)}>
                {this.props.name}
            </div>
        );
    }
}

class Inventory extends React.Component {
    constructor() {
        super();
        this.state = {
            items: this.getItems(),
            currActive: null,
            nothEquip: true,
            //equipped: "Nothing"
        };
    }
    equip(i) {
        this.setState({
            currActive: i,
            nothEquip: false,
            equipped: this.state.items[i]
        });
    }
    getItems() {
        return [
            {name: "Iron Shortsword", range: 3},
            {name: "Longbow", range: 10},
            {name: "Wooden Shield", range: 0}
        ]
    }
    render() {
        return (
            <div>
                <h1>Inventory</h1>
                <div className="inventory">
                    <div>{this.state.items.map((item, i) => {
                        return <Item key={i} name={item.name} index={i} isEquipped={this.state.currActive === i} onClick={() => this.equip(i)}/>
                    })}
                    </div>
                    <div className="status">
                        <div>Equipped: {this.state.nothEquip ? "Nothing" : this.state.equipped.name}</div>
                        <div>Range: {this.state.nothEquip ? "0" : this.state.equipped.range}</div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Inventory />,
    document.getElementById("root")
);
