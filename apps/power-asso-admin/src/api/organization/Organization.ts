import { User } from "../user/User";
import { Website } from "../website/Website";

export type Organization = {
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  users?: Array<User>;
  websites?: Array<Website>;
};
