import './style.css'
import {useEffect, useState} from "react";

interface IDropDown {
    // children: JSX.Element;
    children?: string;
    show: boolean;
    onClick: (value: boolean) => void;
    menuList: Array<IMenu>;
    right?: boolean;
}

interface IMenu {
    name: string
    onClick: () => void;
    selectd?: boolean;
}

const DropDown = ({
                      children,
                      show,
                      onClick,
                      menuList,
                      right=false
}: IDropDown) => {
    const [menuSelected, setMenuSelected] = useState<number>(0)
    const [newMenuList, setNewMenuList] = useState<Array<IMenu>>(menuList)

    const noMouseControl = (keyPressed: string) => {
        if (keyPressed === 'd') {
            onClick(true);
            setMenuSelected(0);
        }

        if (keyPressed === 'Escape') {
            onClick(false);
        }

        if (keyPressed === 'ArrowDown' && show && menuList.length > 0) {
            console.log(menuSelected)
            const indexMenu = menuSelected + 1
            setMenuSelected(indexMenu)
            const modifyMenu = newMenuList
            modifyMenu[indexMenu].selectd = true
            setNewMenuList(modifyMenu)
        }

        if (keyPressed === 'Enter' && show && menuList.length > 0) {
            newMenuList[menuSelected].onClick();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', (value) => {
            noMouseControl(value.key)
        });
    }, [])

    return (
    <div
        style={{ justifyContent: right ? 'flex-end' : 'flex-start'}}
        className="Container"
    >
        <DropDownButton
            onClick={onClick}
            show={show}
        />
        {show && newMenuList &&
            <DropDownMenus
                menuList={newMenuList}
            />
        }
    </div>
    )
}

const DropDownButton = ({onClick, show}: any) => {
    return (
        <div
            className="ContainerDropDown"
            onClick={() => onClick(!show)}
        >
            <Icon />
            <Icon />
            <Icon />
        </div>
    )
}

const Icon = () => {
    return (
        <div className="BallContainer">
            <div className="BallIcon"/>
        </div>
    )
}

const DropDownMenus = ({ menuList }: any) => {
    return (
        <div className="MenuDropDownContainer">
            {menuList.map((item: any, index: number) => {
               return (
                   <Menu
                       key={index}
                       name={item.name}
                       onClick={item.onClick}
                       selected={item.selected}
                    />
               )
            })}
        </div>
    )
}


const Menu = ({ name, onClick, selected }: any) => {
    console.log(selected)

    return (
        <div
            className="MenuContainer"
            onClick={onClick}
        >
            {name}
        </div>
    )
}

export default DropDown;