export interface TUser {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  city?: string;
  gender: "Male" | "Female";
  phone: string;
  email: string;
}
