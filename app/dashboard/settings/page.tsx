export default function Page({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div >
            <h2> Settings Content</h2>
            {children}
        </div>
    );
}