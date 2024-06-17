
import Nav from "../../components/navs/main-nav";

const MainLayout = ({ children }) => {

    const menuList = [
        { name: 'Home', href: '/web', current: false },
        { name: 'Portfolio', href: '/web/portfolio', current: false },
        { name: 'Perfil', href: '/web/perfil', current: false },
        { name: 'API', href: '#', current: false },
    ];



    return (<>

        <Nav menuList={menuList}  />
        <div className="container mx-auto">
            {children}
        </div>

    </>)
}

export default MainLayout