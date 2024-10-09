export interface TUser {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: date;
  city?: string;
  gender: "Male" | "Female";
  phone: string;
  email: string;
}
