import { Component } from '@angular/core';
import { title } from 'process';
import { Todo} from '../../app/shared/todo.model';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class registerComponent {
    title = 'register';

    
}
