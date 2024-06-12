import Nav from "../../components/navs/main-nav";

const MainLayout = ({children}) => {

    const menuList = [
        { name: 'Dashboard', href: '#', current: true },
        { name: 'Team', href: '#', current: false },
        { name: 'Projects', href: '#', current: false },
        { name: 'Calendar', href: '#', current: false },
    ];
    return (<>
        
        <Nav menuList={menuList} />
        {/* <h3 className="text-white">dash</h3> */}
        {children}
    </>)
}

export default MainLayout