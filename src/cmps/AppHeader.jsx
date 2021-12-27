import { Link, NavLink } from "react-router-dom";


export function AppHeader({ onChangeRoute }) {
    return (
        <header>
            <NavLink to={'/'} exact>Home</NavLink>
            <NavLink to={'/contact'} exact>Contacts</NavLink>
            <NavLink to={'/statistic'}>Statistic</NavLink>
        </header>
    )
}
