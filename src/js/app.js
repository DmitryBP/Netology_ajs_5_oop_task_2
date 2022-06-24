import './Cheracter.js';
import Bowerman from './Bowerman.js';

const bowerman = new Bowerman('Boris', 'Bowerman');

console.log(bowerman);

bowerman.health = 100;
console.log(`helth - ${bowerman.health}`);
bowerman.levelUp();

console.log(bowerman);
