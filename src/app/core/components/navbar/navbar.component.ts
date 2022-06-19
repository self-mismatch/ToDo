import { Component } from '@angular/core';
import { TUI_ARROW } from '@taiga-ui/kit';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  readonly title = 'Task manager';

  readonly arrow = TUI_ARROW;

  readonly menuItems = [
    {
      label: 'Settings',
    },
  ];
}
