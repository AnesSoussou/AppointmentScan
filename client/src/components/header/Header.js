import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'


function Header() {
    const auth = useSelector(state => state.auth)

    const { user, isLogged } = auth


    const handleLogout = async () => {
        try {
            await axios.get('/user/logout')
            localStorage.removeItem('firstLogin')
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
    }

    const userLink = () => {
        return <li className="drop-nav">
            <Link to="#" className="avatar">
                <img src={user.avatar} alt="" /> {user.name} <i className="fas fa-angle-down"></i>
            </Link>
            <ul className="dropdown">
                <li><Link to="/profile">Profil</Link></li>
                <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
            </ul>
        </li>
    }

    const transForm = {
        transform: isLogged ? "translateY(-5px)" : 0
    }

    return (
        <header>
            <div className="logo">
                <h1><Link to="/"><img src="https://scontent.ftun17-1.fna.fbcdn.net/v/t31.18172-8/902628_186142268203799_274835585_o.png?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=uUrO6LpQrLEAX9YxaCg&_nc_ht=scontent.ftun17-1.fna&oh=b4d62b6c11f98f275bf1a2334465a974&oe=60D2D70D"
                    width="100px" style={{ background: "#ffffff" }} padding="20px" />  APPOINTMENT <i class="fas fa-calendar-check"></i></Link></h1>
            </div>

            <ul style={transForm}>
                <li><Link to="/"><i class="far fa-lightbulb"></i> About</Link></li>
                {
                    isLogged
                        ? userLink()
                        : <li><Link to="/login"><i className="fas fa-user"></i> Sign in</Link></li>
                }

            </ul>
        </header>
    )
}

export default Header