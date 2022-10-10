import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      <h2>KMQ</h2>

      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/scores'>Scores</Link></li>
      </ul>
    </nav>
  )
}