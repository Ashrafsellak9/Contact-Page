import logo from '../assets/logo.png'
const Navigation = () => {
    return (
       <nav className='container'>
        <div className='logo'>
            <img src={logo} alt="Do some coding logo"/>
        </div>

        <ul>
            <li href="#">Home</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>
       </nav>
    )
}

export default Navigation;

