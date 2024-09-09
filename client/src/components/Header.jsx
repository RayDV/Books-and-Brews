import {
  Button,
  Dropdown,
  DropdownItem,
  Navbar,
  TextInput,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { FaCoffee, FaLeaf, FaBreadSlice } from "react-icons/fa";

// fix this later
export default function Header() {
  const path = useLocation.pathName;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold"
        >
        <span>Brews'N'Books</span>
      </Link>
      <form className="flex-1 max-w-md mx-auto px-4">
        <TextInput
          type="text"
          placeholder="Find your study spot..."
          icon={AiOutlineSearch}
          />
      </form>
      <div className="flex gap-3 md:order-2 items-center">
        <Link to="/write-review" className="hidden md:inline-block">
            Write a Review
        </Link>
        <Link to="/sign-in" className="hidden md:inline-block">
          <Button outline gradientMonochrome={"cyan"}>Sign in</Button>
        </Link>
        <Dropdown arrowIcon={false} label={<AiOutlineMenu className="sm:text-2xl text-xl"/>} inline>
          <Dropdown.Item icon={FaCoffee}>
            <Link to="/cafe-list">Cafe</Link>
          </Dropdown.Item>
          <DropdownItem icon={FaLeaf}>
            <Link to="/tea-house-list">Tea House</Link>
          </DropdownItem>
          <DropdownItem icon={FaBreadSlice}>
            <Link to="/bakery-list">Bakery</Link>
          </DropdownItem>
          <div className="block md:hidden">
            <DropdownItem>
              <Link to="/write-review">Write a Review</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/sign-in">Sign in</Link>
            </DropdownItem>
          </div>
        </Dropdown>
      </div>
    </Navbar>
  );
}