import { useState } from "react";
import CategorySelector from "../components/mobile/ui/CategorySelector/CategorySelector";
import PositionsMenu from "../components/mobile/ui/PositionsMenu/PositionsMenu";
import { testDb } from "../testDb";

const PositionsPage = () => {
    const [category, setCategory] = useState<string>();
    const [items, setItems] = useState(testDb);

    // axios get => setItems

    return <>
        <header className="border-b py-6 px-4 select-none">
            <p className="font-bold text-xl">Меню Їдальні</p>
            <p>{category}</p>
        </header>
        <div className="flex flex-col flex-grow">
            <CategorySelector onChange={(value) => {
                setCategory(value);
                if (value === 'all') setItems(testDb)
                else {
                    setItems(testDb.filter((el) => el.category === value))
                }
            }} />
            <PositionsMenu items={items} />
        </div>
    </>
}

export default PositionsPage;
