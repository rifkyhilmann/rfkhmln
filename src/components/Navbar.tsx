import Link from "next/link"

const Navbar = () => {
    return (
        <div className="w-full h-20  flex items-center justify-between content text-[#FFE6A9]">
            <Link href="/">
                <p className="text-2xl cursor-pointer font-semibold">rfkhmln.</p>
            </Link>
            <div className="flex items-center justify-end gap-4 text-md ">
                <p className="text-xs"></p>
            </div>
        </div>
    )
}

export default Navbar