
import { RotatingLines } from  'react-loader-spinner';

const Loader = () =>(<RotatingLines
  strokeColor="lightBlue"
  strokeWidth="5"
  animationDuration="0.75"
  width="55"
  visible={true}
/>);

export default Loader;