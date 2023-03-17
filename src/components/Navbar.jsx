// library imports
import { BookOpenIcon } from '@heroicons/react/24/solid';

// components
import FontSelection from './FontSelection';
import ColorModeSelection from './ColorModeSelection';

const Navbar = () => {
    return (
        <nav className="navbar">
            <BookOpenIcon width={32} className='icon logo' />
            <div className="customiser">
                <FontSelection />
                <ColorModeSelection />
            </div>
        </nav>
    );
}
 
export default Navbar;