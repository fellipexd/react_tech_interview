import {useCallback, useEffect, useState} from "react";
import DropDownButton from "./dropDownButton";
import DropDownMenus from "./dropDownMenus";
import './style.css'

interface IDropDown {
    children?: string;
    show: boolean;
    onClick: (value: boolean) => void;
    menuList: Array<IMenu>;
    right?: boolean;
    keyboardMap?: IKeyboardMap;
}

interface IMenu {
    name: string;
    onClick: () => void;
}

interface IKeyboardMap {
    open: string;
    close: string;
    moveUp: string;
    moveDown: string;
    exec: string;
}

const DropDown = ({
                      show,
                      onClick,
                      menuList,
                      keyboardMap,
                      right=false
}: IDropDown) => {
    const [menuSelected, setMenuSelected] = useState(-1)

    const handleKeyPress = useCallback((event: any) => {
        noMouseControl(event.key);
    }, [menuSelected]);

    const noMouseControl = (keyPressed: string) => {
        if (!keyboardMap) {return;}

        if (keyPressed === keyboardMap.open) {
            if (show) {return;}
            onClick(true);
            setMenuSelected(0)
        }

        if (keyPressed === keyboardMap.close) {
            onClick(false);
            setMenuSelected(-1)
        }

        if (keyPressed === keyboardMap.moveUp) {
            setMenuSelected((prev) => (prev + 1) > 1 ? (prev - 1) : prev)
        }

        if (keyPressed === keyboardMap.moveDown) {
            setMenuSelected((prev) => (prev + 1) < menuList.length ? (prev + 1) : prev)
        }

        if (keyPressed === keyboardMap.exec && show && menuList.length > 0) {
            if (menuSelected < 0 || (menuSelected + 1) > menuList.length) {return;}
            menuList[menuSelected].onClick();
        }
    }

    useEffect(() => {
        if (!keyboardMap) {return;}

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    return (
    <div
        className="Container"
    >
        <DropDownButton
            onClick={onClick}
            show={show}
        />
        {show && menuList &&
            <DropDownMenus
                menuList={menuList}
                menuSelected={menuSelected}
                right={right}
            />
        }
    </div>
    )
}

export default DropDown;