import Logo from "../Logo/Logo";
import { ButtonAccess } from "../Dashboard/ButtonAccess";

const Header = () => {
    return (
        <div className="w-full flex items-center justify-between p-5 bg-main">
            <div className="flex items-center">
                <Logo />
                <nav className="ml-10">
                    <ul className="flex space-x-4">
                        <li><a href="#popular" className="text-white hover:text-gray-300">Popular</a></li>
                        <li><a href="#favorites" className="text-white hover:text-gray-300">Favorites</a></li>
                    </ul>
                </nav>
            </div>
            <ButtonAccess />
        </div>
    );
};

export default Header;
