export interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName?: string;
    fullName: string;
    username: string;
    birthDate: string;
    phone: string;
    email: string;
    role: string;
    fullAddress: string;
    address?: {
        address: string;
        city: string;
        postalCode: string;
    };
}


export interface ActionSectionProps {
    setDisabled: (value: boolean) => void;
    disabled: boolean;
}

export interface UserListProps {
    loading: boolean;
    handleUserClick: (value: User) => void;
    error?: string | null;
    user: User[];
    selectedUserId: number | undefined;
}

export interface UserDetailsProps {
    setActiveTab: (value: string) => void;
    activeTab: string | null;
    selectedUser: User | null;
    disabled: boolean;
    loading: boolean;
}