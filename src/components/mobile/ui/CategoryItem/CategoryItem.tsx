interface CategoryItemProps {
    title: string;
    icon: React.ReactNode;
    onClick: (value: string) => void;
    
}

const CategoryItem = ({ icon, title, onClick }: CategoryItemProps) => {
    return <div
        onClick={() => {
            onClick(title);
        }}
        className="
            rounded-default p-2 bg-slate-50 text-slate-500 text-sm min-w-[47%] w-fit space-y-2 select-none flex items-center gap-2
            duration-200 hover:bg-sky-100 hover:text-sky-500
        "
    >
        {icon}
        <p>{title}</p>
    </div>
}

export default CategoryItem;
