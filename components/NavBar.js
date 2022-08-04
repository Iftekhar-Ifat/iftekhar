import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import {
    MenuIcon,
    XIcon,
    HomeIcon,
    CogIcon,
    PencilIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";

const NavBar = () => {
    const solutions = [
        {
            name: "Home",
            href: "/",
            icon: HomeIcon,
        },
        {
            name: "Projects",
            href: "projects",
            icon: CogIcon,
        },
        {
            name: "Blogs",
            href: "blogs",
            icon: PencilIcon,
        },
    ];

    const route = useRouter();

    return (
        <div
            className="sticky top-0 z-10 "
            style={{
                background: "rgba(17,17,17,0.8)",
                backdropFilter: "blur(8px)",
            }}
        >
            <Popover className="relative">
                <div className="max-w-9xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link href="/">
                                <img
                                    className="px-5
                             scale-175 h-8 w-auto sm:h-10 blur-none"
                                    src="/asset/logo.svg"
                                    alt=""
                                    style={{ cursor: "pointer" }}
                                />
                            </Link>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <MenuIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </Popover.Button>
                        </div>
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <Link href="/">
                                <button
                                    className={`ml-8 inline-flex items-center justify-center px-4 py-2 rounded-md font-medium text-white hover:bg-backgroundGray ${
                                        route.pathname === "/"
                                            ? "bg-backgroundGray"
                                            : "bg-black"
                                    }`}
                                >
                                    Home
                                </button>
                            </Link>
                            <Link href="projects">
                                <button
                                    className={`ml-8 inline-flex items-center justify-center px-4 py-2 rounded-md font-medium text-white hover:bg-backgroundGray ${
                                        route.pathname === "/projects"
                                            ? "bg-backgroundGray"
                                            : "bg-black"
                                    }`}
                                >
                                    Projects
                                </button>
                            </Link>
                            <Link href="blogs">
                                <button
                                    className={`ml-8 inline-flex items-center justify-center px-4 py-2 rounded-md font-medium text-white hover:bg-backgroundGray ${
                                        route.pathname === "/blogs"
                                            ? "bg-backgroundGray"
                                            : "bg-black"
                                    }`}
                                >
                                    Blogs
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-black divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between">
                                    <Link href="/">
                                        <img
                                            className="px-5 scale-175 h-8 w-auto "
                                            src="/asset/logo.svg"
                                            alt=""
                                        />
                                    </Link>
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">
                                                Close menu
                                            </span>
                                            <XIcon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <nav className="grid gap-y-8">
                                        {solutions.map((item) => (
                                            <Link
                                                href={item.href}
                                                key={item.name}
                                            >
                                                <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                                    <item.icon
                                                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                        aria-hidden="true"
                                                    />
                                                    <span className="ml-3 text-base font-medium text-gray-900">
                                                        {item.name}
                                                    </span>
                                                </a>
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
            <div
                style={{
                    height: "2px",
                    background:
                        "linear-gradient(90deg, #249AA1 0%, #2B66BE 98.92%)",
                    boxShadow: "0px 0px 10px 1.5px rgba(36, 154, 161, 0.8)",
                }}
            ></div>
        </div>
    );
};

export default NavBar;
