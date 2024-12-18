import MainLayout from "./MainLayout";
import MobileLayout from "./MobileLayout";

const LayoutManager = ({ children }: { children: React.ReactNode }) => {
    return <>
        <div className="sm:hidden font-comforta">
            <MobileLayout>
                {children}
            </MobileLayout>
        </div>
        <div className="max-sm:hidden">
            <MainLayout>
                {children}
            </MainLayout>
        </div>
    </>
}

export default LayoutManager;
