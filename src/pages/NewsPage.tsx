import { Link } from "react-router-dom";
import News from "../components/News";

export default function NewsPage() {
  return (
    <>
    <Link to='/profile' >Go to Profile</Link>
      <News />
    </>
  );
}
