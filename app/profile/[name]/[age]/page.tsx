type ProfilePageProps = {
    params: Promise<{ name: string; age: string }>;
};

export default async function ProfilePage({ params }: ProfilePageProps) {

    const pageParams = await params;

    const username = pageParams.name;
    const userage = pageParams.age;

    const users = [
        {
            id: 1,
            name: "Rohan",
            email: "rohan123",
            age:25,
            bio: "Software Engineer with a passion for building web applications."
        },
        {
            id: 1,
            name: "Rohan",
            email: "rohan456",
            age:22,
            bio: "Software Engineer with a passion for building web applications."
        },
        {
            id: 1,
            name: "Rohan",
            email: "rohan789",
            age:20,
            bio: "Software Engineer with a passion for building web applications."
        },
    ];

    const user = users.find(user => user.name.toLowerCase() === username.toLowerCase() && user.age.toString() === userage);
    

    return (
        <div>
            <h1>{user?.name} s Profile Page</h1>
            <p>Email: {user?.email}</p>
            <p>Age: {user?.age}</p>
            <p>Bio: {user?.bio}</p>
        </div>
    )
}