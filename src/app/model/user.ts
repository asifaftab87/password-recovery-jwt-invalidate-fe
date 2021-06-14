import { IRole } from './role';

export interface IUser {
    id: number;
    active: boolean;
    email: string;
    passwordUser: string;
    fullName: string;
    firstName: string;
    lastName: string;
    membershipNum: string;
    contactNum: string;
    dob: Date;
    status: number;
    roles: IRole[];
}