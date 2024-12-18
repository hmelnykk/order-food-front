import Menu from "../components/mobile/Menu/Menu";

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
    return <>
        <div className="flex flex-col h-screen">
            <main className="flex-grow flex flex-col">
                {children}
                <div className="h-[130px]" />
            </main>
            <Menu />
        </div>
    </>
}

export default MobileLayout;
