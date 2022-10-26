import Route from '@ember/routing/route';
import { products } from '../data/products';

export default class IndexRoute extends Route {
  async model() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const todo = await data.json();
    console.log(todo);
    return { ...todo, pageName: 'test' };
  }
}
