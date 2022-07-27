import {memo} from "react";
import {colors} from "../../shareds/theme/colors";

interface IDropDownMenus {
    menuList: Array<IMenu>;
    menuSelected: number;
    right: boolean;
}

interface IMenu {
    name: string;
    onClick: () => void;
    selected?: boolean;
}

const DropDownMenus = ({ menuList, menuSelected, right }: IDropDownMenus) => {
    const handlePosition = () => {
        if (right) {
            return '0px';
        }
        return '-80px';
    }

    return (
        <div
            className="MenuDropDownContainer"
            style={{left: handlePosition()}}
        >
            {menuList.map((item: any, index: number) => {
                return (
                    <Menu
                        key={index}
                        name={item.name}
                        onClick={item.onClick}
                        selected={index === menuSelected}
                    />
                )
            })}
        </div>
    )
}

const Menu = ({ name, onClick, selected }: IMenu) => {
    const moveSelectedColor = () => {
        if (selected) {
            return {backgroundColor: colors.blue100}
        }
    }
    return (
        <div
            className="MenuContainer"
            style={moveSelectedColor()}
            onClick={onClick}
        >
            {name}
        </div>
    )
}

export default memo(DropDownMenus);