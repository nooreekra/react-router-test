import { Link, useMatch } from "react-router-dom"



const CustomLink = ({ children, to, ...props }: any) => {
    const match = useMatch(to);
    console.log({match});
    
    return (
        <Link
            to={to}
            style={{
                color: match ? 'bisque' : 'white',
            }}
            {...props}>
            {children}
        </Link>
    )
}

export { CustomLink }