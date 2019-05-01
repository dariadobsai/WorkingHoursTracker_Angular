import {Project} from './project';

export class User {

  id: number;
  email?: any;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  firstName: string;
  lastName?: string;
  birthDate?: any;
  county?: string;
  city?: string;
  address?: string;
  phone?: string;
  zip?: string;
  projects: Project[];

}
