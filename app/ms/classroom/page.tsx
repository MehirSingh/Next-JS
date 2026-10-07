import FilterUser from "@/components/filter";

export default async function classroom(){

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return(
        <main>
            <h1>Hello from Classroom</h1>
            <p>This is the Classroom page.</p>
            <FilterUser users={users} />
        </main>
    )
}