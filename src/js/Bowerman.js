import Cheracter from './Cheracter.js';

export default class Bowerman extends Cheracter {
  constructor(name) {
    super(name, 'Bowerman');
    this.attack = 25;
    this.defence = 25;
  }
}
