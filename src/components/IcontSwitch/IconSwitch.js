import './IconSwitch.css';
import PropTypes from "prop-types";

function IconSwitch(props) {
    return (
        <div className="icon-switch">
            <span className="material-icons" onClick={() => props.onSwitch(props.icon)}>
                {props.icon}
            </span>
        </div>
    )
}

IconSwitch.propTypes = {
    icon: PropTypes.oneOf(['view_list', 'view_module']).isRequired,
    onSwitch: PropTypes.func.isRequired,
}

export default IconSwitch;
