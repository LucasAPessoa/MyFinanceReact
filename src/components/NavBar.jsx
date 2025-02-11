import { Moon, Sun, User } from "lucide-react";




function NavBar({theme, onChangeThemeClick}) {


    const themeIcon = theme === 'lightTheme' ? <Sun  /> : <Moon  />;




    return (
        <nav className={` ${theme} w-full h-15 absolute z-10 top-0 bg-background text-title p-4 shadow-navBarShadow shadow-lg `}>
            <ul className="flex space-x-10 bg justify-end ">
                <li ><a href="#" >Home</a></li>
                <li><a href="#">Cadastros</a></li>
                <li><a href="#">Dash</a></li>
                <li><a href="#">Notas</a></li>

                <li onClick={() => onChangeThemeClick()}><a href="#">
                    {themeIcon}
                </a></li>
                
                <li ><a href="#">
                    <User />
                </a></li>


            </ul>
        </nav>
        );
}

export default NavBar;


