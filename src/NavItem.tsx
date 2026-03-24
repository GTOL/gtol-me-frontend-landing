interface NavItemProps {
    label: string
    hoverBgClass: string
}

function NavItem({ label, hoverBgClass }: NavItemProps) {
    return (
        <div className="group size-24 flex justify-center items-center cursor-pointer">
            <div className={`size-8 flex justify-center items-center rounded-full transition-all group-hover:size-24 ${hoverBgClass} group-hover:inset-shadow-[0_0_8px_1px_rgba(0,0,0,0.5)]`}>
                {label}
            </div>
        </div>
    )
}

export default NavItem
