import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logout } from '../../features/userSlice';
import { logOut } from '../../services/api';
import './Navbar.css';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Create Book', href: '#', current: false }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleLogout = async () => {
    try {
      // Call the logout API
      const res=await logOut();
      if(res){
        toast.success("Successfully logged out!");
        // Dispatch the logout action to clear user data from Redux
        dispatch(logout());
      }
    } catch (error) {
      toast.error(error.message || "Logout failed. Please try again.");
    }
  };
  const { user, token } = useSelector((state) => state.user);
  return (
    <Disclosure as="nav" className="bg-gray-800 fixed top-0 w-100 gredient">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          {/* Logo */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://img.icons8.com/color/48/monzo.png"
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={
                      item.name === 'Home' 
                        ? '/' 
                        : item.name === 'Create Book' 
                        ? '/CreateBook' 
                        : item.href
                    }
                    style={{textDecoration:'none'}}
                    className={classNames(
                      item.current
                        ? 'btn-clr text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Notification & User Menu */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          {user && token ? (
        <Menu as="div" style={{fontSize:'18px',fontWeight:'bold',marginRight:'1rem'}}>
          Hi, {user.fullname}
          <span
            className="text-gray-300 hover:text-gray-400 hover:text-white hover:cursor-pointer px-3 py-2 text-sm font-medium"
            onClick={handleLogout}
          >
            Logout
          </span>
        </Menu>
      ) : (
        <Menu as="div" className="mr-1 d-flex gap-2">
          <span
            className="text-gray-300 hover:text-gray-400 hover:text-white hover:cursor-pointer px-3 py-2 text-sm font-medium"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
          <span
            className="btn-clr text-white hover:cursor-pointer rounded-md px-3 py-2 text-sm font-medium"
            onClick={() => navigate("/SignUp")}
          >
            SignUp
          </span>
        </Menu>
      )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
