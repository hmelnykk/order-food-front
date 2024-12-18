import { useNavigate } from "react-router-dom";
import { ItemType } from "../PositionsMenu/PositionsMenu";

const PositionItem = ({ item }: { item: ItemType }) => {
    const navigate = useNavigate();

    return <div
        onClick={() => {navigate(`/item/${item.id}`)}}
        className="bg-slate-50 rounded-default p-4 space-y-2"
    >
        <div className="h-[100px] bg-slate-200" />
        <p className="font-bold">{item.name}</p>
        <p className="text-sm">{`${item.price} UAH`}</p>
    </div>
}

export default PositionItem;
