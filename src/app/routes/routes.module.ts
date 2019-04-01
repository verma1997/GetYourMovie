import { NotfoundComponent } from '../notfound/notfound.component';
import { CardComponent } from '../card/card.component';
import { MoviedetailsComponent } from '../moviedetails/moviedetails.component';

  // router class
  export const RouterConfig = [
    { path: '', component: CardComponent },
    { path: 'movie/:id', component: MoviedetailsComponent },
    { path: '**', component: NotfoundComponent }
    ];
