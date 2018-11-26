import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {title:"Mon premier post",contents:"Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," +
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",loveIts:0,created_at:new Date()},
    {title:"Mon deuxième post",contents:"Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," +
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",loveIts:0,created_at:new Date()},
    {title:"Mon troisième post",contents:"Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," +
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",loveIts:0,created_at:new Date()}
  ];

  title = 'my Blog';

}
