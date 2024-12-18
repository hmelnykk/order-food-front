import { createBrowserRouter } from "react-router-dom";
import LayoutManager from './layouts/layout.manager';
import PositionsPage from "./pages/PositionsPage";
import ItemPage from "./pages/ItemPage";

export const router = createBrowserRouter([
    {
        path: '/test',
        element: <LayoutManager>
            you
        </LayoutManager>
    },
    {
        path: '/',
        element:
        <LayoutManager>
            <PositionsPage />
        </LayoutManager>
    },
    {
        path: '/item/:itemId',
        element:
        <LayoutManager>
            <ItemPage />
        </LayoutManager>
    },
]);
