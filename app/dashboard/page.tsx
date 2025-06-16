export default function Dashboard({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div >
            <h2> Dashboard</h2>
            {children}
        </div>
    );
}