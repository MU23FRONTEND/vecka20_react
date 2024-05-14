import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
    </ul>
  )
}

export default Navigation;
