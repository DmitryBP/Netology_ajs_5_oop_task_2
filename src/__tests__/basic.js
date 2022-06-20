/* eslint-disable import/named */
import { Cheracter } from '../js/Cheracter.js';

test('Ошибка при повышении уровня метвого игрока', () => {
  expect(() => {
    const vasia = new Cheracter('Vasia', 'Bowerman');
    vasia.health = 100;
    vasia.evelUp();
  }).toThrow();
});

// test('Расчет урона', () => {
//   expect(() => {
//     const vasia1 = new Cheracter('Vasia1', 'Bowerman');
//     vasia1.damage(20);
//     return vasia1.health;
//   }).toBe(85);
// });
