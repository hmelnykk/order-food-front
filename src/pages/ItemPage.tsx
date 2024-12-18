import { useNavigate, useParams } from "react-router-dom";
import { testDb } from "../testDb";

const ItemPage = () => {
    const { itemId } = useParams();
    const navigate = useNavigate();

    if ( !itemId ) {
        return <>error</>
    }

    // fetch itemId
    const item = testDb[parseInt(itemId)];

    if ( !item ) {
        return <>error</>
    }

    const { name, description, category, price } = item;

    return <>
        <header className="border-b py-6 px-8 select-none flex justify-between items-center">
            <div
                onClick={() => {navigate('/')}}
                className="flex items-center p-2 rounded-default bg-slate-50"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                <p>Назад</p>
            </div>
            <p className="font-bold text-xl">{name}</p>
        </header>
        <main className="px-8 mt-4 space-y-2">
            {/* img */}
            <div className="w-full h-[240px] bg-slate-200" />
            <p className="font-bold text-xl">{name}</p>
            <p className="rounded-default bg-slate-100 w-fit p-2">{category}</p>
            <p>{description}</p>
            <p>{`Ціна за порцію: ${price} UAH`}</p>
            <button className="p-2 rounded-default bg-sky-500 text-white">Додати до замовлення</button>
        </main>
    </>
}

export default ItemPage;
