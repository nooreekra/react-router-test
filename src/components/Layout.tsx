import { Outlet } from "react-router-dom";
import { CustomLink } from './CustomLink';

const Layout = () => {
    return (
        <div className="Wrapper">
        <header className='Header'>
            <div>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/blog">Blog</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="Footer">&copy; ReactRouter 2022</footer>
        </div>
    )
}

export { Layout };