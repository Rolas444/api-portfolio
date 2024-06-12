import Nav from "../../components/navs/main-nav";

const MainLayout = ({children}) => {

    const menuList = [
        { name: 'Home', href: '#', current: true },
        { name: 'Portfolio', href: '#', current: false },
        { name: 'Perfil', href: '#', current: false },
        { name: 'API', href: '#', current: false },
    ];
    return (<>
        
        <Nav menuList={menuList} />
        {children}
    </>)
}

export default MainLayout