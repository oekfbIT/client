import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import logo from "../../../../assets/images/logo/logo.svg";

import themeConfig from '../../../../configs/themeConfig.jsx';

export default function MenuLogo(props) {
  const customise = useSelector(state => state.customise)

  return (
    <div className="hp-header-logo hp-d-flex hp-align-items-center">
      <Link
        to="/"
        onClick={props.onClose}
        className="hp-position-relative hp-d-flex"
      >
        {
          props.small ? (
            customise.theme == "light" ? (
              <img className="hp-logo" src={logo} alt="logo" />
            ) : (
              <img className="hp-logo" src={logo} alt="logo" />
            )
          ) : (
            customise.direction == "rtl" ? (
              customise.theme == "light" ? (
                <img className="hp-logo" src={logo} alt="logo" />
              ) : (
                <img className="hp-logo" src={logo} alt="logo" />
              )
            ) : (
              customise.theme == "light" ? (
                <img className="hp-logo" src={logo} alt="logo" />
              ) : (
                <img className="hp-logo" src={logo} alt="logo" />
              )
            )
          )
        }

      </Link>
    </div>
  );
};