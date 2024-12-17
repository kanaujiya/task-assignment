"use client";
import React, { useEffect, useState } from "react";
import { User } from "@/types";
import ActionSection from "@/components/ActionSection";
import { UserList } from "@/components/UserList";
import UserDetails from "@/components/UserDetails";

const Home = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [user, setUser] = useState<User[]>([]);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleUserClick = (user: User) => {
    const { firstName, lastName, maidenName, address, ...rest } = user;
    setSelectedUser({
      ...rest,
      firstName,
      lastName,
      fullName: `${firstName.toUpperCase()} ${maidenName?.toUpperCase()} ${lastName.toUpperCase()}`,
      fullAddress: address
        ? `${address.address}, ${address.city}, ${address.postalCode}`
        : "Address not available",
    });
    setActiveTab("profile");
  };

  const handleUserDetails = async () => {

    try {

      const response = await fetch(`https://dummyjson.com/users`);
      if (response.ok) {
        const result = await response.json();
        setUser(result?.users);
        handleUserClick(result?.users[0])
        setLoading(false)
      } else {
        throw new Error("Network Error");
      }
    } catch (err) {
      setError((err as Error).message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleUserDetails();
  }, []);



  return (
    <div className="flex h-screen justify-between">
      {/* User List Section */}

      <UserList
        handleUserClick={handleUserClick}
        loading={loading}
        error={error}
        user={user}
        selectedUserId={selectedUser?.id}
      />

      {/* User Details Section */}
      <UserDetails
        setActiveTab={setActiveTab}
        loading={loading}
        activeTab={activeTab}
        selectedUser={selectedUser}
        disabled={disabled}
      />

      {/* Action Section */}
      <ActionSection
        setDisabled={setDisabled}
        disabled={disabled}
      />
    </div>
  );
};

export default Home;
