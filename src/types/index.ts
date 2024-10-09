export interface TUser {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: number;
  city?: string;
  gender: "Male" | "Female";
  phone: string;
  email: string;
}
