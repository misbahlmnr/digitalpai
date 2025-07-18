import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Icons from "./Icons";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* TODO: Mobile Navbar */}

              {/* TODO: Desktop Navbar */}
              <div className="ml-4 flex lg:ml-0">
                <Link href={"/"}>
                  <Icons.logo className="h-6 w-6" />
                </Link>
              </div>

              <div className="hidden lg:ml-8 lg:block z-50 lg:self-stretch">
                <NavItems />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
