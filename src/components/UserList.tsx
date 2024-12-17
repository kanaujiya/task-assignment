import React from "react";
import { UserListProps } from "@/types";

export const UserList = ({
    loading,
    user,
    handleUserClick,
    error,
    selectedUserId,
}: UserListProps) => {
    return (
        <div className="w-1/4 p-4 bg-gray-100 border-r">
            <h3 className="text-lg font-bold mb-4">User List</h3>
            <div>
                {loading && <p>Loading....</p>}
                {user.map((item) => {
                    const { id, username } = item;
                    const isSelected = id === selectedUserId;
                    console.log({ id, selectedUserId, isSelected });

                    return (
                        <div
                            key={id}
                            onClick={() => handleUserClick(item)}
                            className={`p-3 mb-2 rounded shadow cursor-pointer capitalize ${isSelected
                                ? "bg-black text-white font-semibold"
                                : "bg-white hover:bg-black hover:text-white"
                                }`}
                        >
                            {username}
                        </div>
                    );
                })}
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};
