import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineMenu,
  HiOutlineSearch,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import logo from "../logo.png";
import { useSelector } from "react-redux";
import { selectItems } from "../redux/slices/basketSlice";

const Header = () => {
  const items = useSelector(selectItems);

  return (
    <header>
      <div className="flex items-center justify-between p-1 flex-grow py-2 space-x-4 px-6">
        <Link
          to="/"
          className="mt-2 flex items-center flex-grow sm:flex-grow-0"
        >
          <img src={logo} className="w-[120px] h-[50px]" />
        </Link>
        {/* SearchBar */}
        <div className="hidden sm:flex items-center border bg-yellow-400 hover:bg-yellow-500 h-10 rounded-md flex-grow cursor-pointer">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md fouce:outline-none"
          />
          <div className="px-4">
            <HiOutlineSearch className="w-6 h-6" />
          </div>
        </div>
        <div className="flex space-x-6 text-xs">
          <div className="link">
            <p>Hello kone dangui ismael</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <Link to="orders" className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </Link>
          <Link to="/checkout" className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-10 bg-yellow-500 h-4 w-4 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <HiOutlineShoppingCart className="w-6 h-6" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </Link>
        </div>
      </div>
      <div className="space-x-4 flex items-center px-6 py-3">
        <p className="link flex items-center">
          <HiOutlineMenu className="h-6" />
          All
        </p>
        <p className="link flex items-center">Prime video</p>
        <p className="link flex items-center">Amazon Business</p>
        <p className="link flex items-center">Today deals</p>
        <p className="hidden link lg:inline-flex">Electronics</p>
        <p className="hidden link lg:inline-flex">Foods & Goods</p>
        <p className="hidden link lg:inline-flex">Prime</p>
      </div>
    </header>
  );
};

export default Header;
