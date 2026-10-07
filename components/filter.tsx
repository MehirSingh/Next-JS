"use client";

import { useState } from "react";

type User = {
    id: number;
    name: string;
    username: string;
};

export default function FilterUser({ users }: { users: User[] }) {
    const [searchTerm, setSearch] = useState("");

    const filteredUsers = users.filter((user) => {
        return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            <input
                type="text"
                placeholder="Search for a user..."
                value={searchTerm}
                onChange={(e) => setSearch(e.target.value)}
            />

            <ul>
                {filteredUsers.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}