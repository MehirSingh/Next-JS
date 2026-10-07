type ProfilePageProps = {
    params: Promise<{ name: string }>;
};

export default async function ProfilePage({
    params,
}: ProfilePageProps) {

    const users = [
        {
            id: 1,
            name: "Rohan",
            email: "rohan123",
            bio: "Software Engineer with a passion for building web applications."
        },
        {
            id: 2,
            name: "Neha",
            email: "neha123",
            bio: "Product Manager with experience in leading agile teams."
        },
        {
            id: 3,
            name: "Rohit",
            email: "rohit123",
            bio: "UX Designer with a focus on creating intuitive user experiences."
        }
    ];

    const pageParams = await params;
    const username = pageParams.name;

    const user = users.find(
        (user) => user.name.toLowerCase() === username.toLowerCase()
    );

    return (
        <div>
            <h1>{user?.name} s Profile Page</h1>
            <p>{user?.bio}</p>
        </div>
    );
}