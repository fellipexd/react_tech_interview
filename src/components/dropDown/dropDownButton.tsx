interface IDropDownButton {
    show: boolean;
    onClick: (value: boolean) => void;
}

const DropDownButton = ({onClick, show}: IDropDownButton) => {
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

export default DropDownButton;