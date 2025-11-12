import { Routes } from '@angular/router';
import { CounterParentComponent } from './feature/counter-parent-component/counter-parent-component';
import { CounterChildComponent } from './feature/counter-child-component/counter-child-component';
import { ParentComponent } from './feature/parent-component/parent-component';
import { Customer } from './feature/customer/customer';
import { Customerdetail } from './feature/customer/detail/customerdetail/customerdetail';
import { Login} from './core/login/login';
import { Logout } from './core/logout/logout';

export const routes: Routes = [
    { path: 'counter', component: CounterParentComponent },
    { path: 'counterchild', component: CounterChildComponent },
    { path: 'parent', component: ParentComponent },
    { path: 'customers', component: Customer },
    { path: 'customerdetail/:id', component: Customerdetail },
    { path: 'login', component: Login },
    {path: 'logout', component: Logout}
];
