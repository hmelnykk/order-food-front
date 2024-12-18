import PositionItem from "../PositionItem/PositionItem";

export interface ItemType {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
}

const PositionsMenu = ({ items }: { items: ItemType[] }) => {
    return <div className="py-4 px-8 grid grid-cols-2 gap-2 h-1 flex-grow overflow-y-scroll">
        {
            items.map((el, idx) => (
                <PositionItem key={idx} item={el} />
            ))
        }
    </div>
}

export default PositionsMenu;
