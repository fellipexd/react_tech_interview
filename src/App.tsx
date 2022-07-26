import React, {useState} from 'react';
import './App.css';
import DropDown from "./components/dropDown";

function App() {
    const [dropDown, setDropDown] = useState(false)

    return (
        <div className="App">
            <DropDown
                right={true}
                show={dropDown}
                onClick={setDropDown}
                menuList={[
                    {
                        name: 'menu 1',
                        onClick: () => console.log('menu 1')
                    },
                    {
                        name: 'menu 2',
                        onClick: () => console.log('menu 2')
                    },
                    {
                        name: 'menu 3',
                        onClick: () => console.log('menu 3')
                    },
                    {
                        name: 'menu 4',
                        onClick: () => console.log('menu 4')
                    },
                ]}
            />
        </div>
    );
}

export default App;
