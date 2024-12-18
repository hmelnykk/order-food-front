interface IconButtonProps {
    icon: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const IconButton = ({ icon, onClick, className }: IconButtonProps) => {
    return <button
        onClick={onClick}
        className={`
            bg-slate-100 p-4 text-slate-500 rounded-default duration-200 hover:bg-sky-200 hover:text-sky-500
            ${className}
        `}
    >
        { icon }
    </button>
}

export default IconButton;
