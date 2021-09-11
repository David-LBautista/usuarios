export interface User {
    id: number;
    avatar: string;
    first_name: string;
    last_name: string;
    email: string;
}

export interface Cases {
    data:        User[];
}

export interface Support {
    url:  string;
    text: string;
}


