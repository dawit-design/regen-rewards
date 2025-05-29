import withNavbar from "./WithNavBar";
import withFooter from "../../Helper/withFooter";

const withNavbarAndFooter = (Component) => {
  return withNavbar(withFooter(Component));
};

export default withNavbarAndFooter;