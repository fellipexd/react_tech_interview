import React, {useState} from 'react';
import './App.css';
import DropDown from "./components/dropDown";

function App() {
    const [dropDown, setDropDown] = useState(false)


    return (
        <div className="App">
            <DropDown
                right={false}
                show={dropDown}
                onClick={setDropDown}
                menuList={menuData}
                keyboardMap={keyboardMap}
            />
        </div>
    );
}

const keyboardMap = {
    open: 'd',
    close: 'Escape',
    moveUp: 'ArrowUp',
    moveDown: 'ArrowDown',
    exec: 'Enter',
}

const menuData = [
    {
        name: 'menu 1',
        onClick: () => alert('menu 1')
    },
    {
        name: 'menu 2',
        onClick: () => alert('menu 2')
    },
    {
        name: 'menu 3',
        onClick: () => alert('menu 3')
    },
    {
        name: 'menu 4',
        onClick: () => alert('menu 4')
    },
]

export default App;
