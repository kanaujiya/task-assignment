import React from "react";
import { UserDetailsProps } from "@/types";

const UserDetails = ({
    setActiveTab,
    activeTab,
    selectedUser,
    loading,
    disabled,
}: UserDetailsProps) => {

    const inputStyle = "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500";


    return (
        <div className="flex p-6 gap-3 justify-around w-full">
            <div className="flex gap-2 flex-col space-x-4 mb-4">
                <button
                    onClick={() => setActiveTab("profile")}
                    className={`px-4 py-2 rounded-t ${activeTab === "profile"
                        ? "bg-black text-white font-semibold border-b-2 border-transparent"
                        : "bg-white text-black"
                        }`}
                >
                    Profile
                </button>
                <button
                    onClick={() => setActiveTab("contact")}
                    className={`px-4 py-2 rounded-t ${activeTab === "contact"
                        ? "bg-black text-white font-semibold border-b-2 border-transparent"
                        : "bg-white text-black"
                        }`}
                >
                    Contacts
                </button>
            </div>

            <div className="p-4 w-full bg-white rounded shadow">
                {selectedUser ? (
                    <>
                        {loading && <p>Loading....</p>}
                        {activeTab === "profile" && (
                            <>
                                <h4 className="text-lg font-bold mb-2">Profile</h4>

                                <div className="flex flex-col gap-4">
                                    <p>
                                        <strong>Name: </strong>{" "}
                                        <input
                                            type="text"
                                            className={inputStyle}
                                            disabled={disabled}
                                            value={selectedUser?.fullName}
                                        />
                                    </p>
                                    <p>
                                        <strong>DOB: </strong>{" "}
                                        <input
                                            type="text"
                                            className={inputStyle}
                                            disabled={disabled}
                                            value={selectedUser?.birthDate}
                                        />
                                    </p>
                                    <p>
                                        <strong>Address: </strong>
                                    </p>
                                    <textarea
                                        name="address"
                                        disabled={disabled}
                                        className={inputStyle}
                                        value={selectedUser?.fullAddress}
                                    ></textarea>
                                </div>
                            </>
                        )}
                        {activeTab === "contact" && (
                            <>
                                <h4 className="text-lg font-bold mb-2">Contact</h4>
                                <div className="flex flex-col gap-4">
                                    <p>
                                        <strong>Mobile:</strong>{" "}
                                        <input
                                            type="text"
                                            className={inputStyle}
                                            disabled={disabled}
                                            value={selectedUser?.phone}
                                        />
                                    </p>
                                    <p>
                                        <strong>Role:</strong>{" "}
                                        <input
                                            type="text"
                                            className={inputStyle}
                                            disabled={disabled}
                                            value={selectedUser?.role}
                                        />
                                    </p>
                                    <p>
                                        <strong>Email:</strong>{" "}
                                        <input
                                            type="text"
                                            className={inputStyle}
                                            disabled={disabled}
                                            value={selectedUser?.email}
                                        />
                                    </p>
                                </div>
                            </>
                        )}
                    </>
                ) : (<p className="text-gray-500 text-left">Loading user details...</p>)}
            </div>



        </div>
    );
};

export default UserDetails;
