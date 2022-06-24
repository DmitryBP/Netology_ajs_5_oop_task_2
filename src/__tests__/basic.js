import Cheracter from '../js/Cheracter.js';
import Bowerman from '../js/Bowerman.js';

test('Ошибка при повышении уровня метвого игрока', () => {
  expect(() => {
    const vasia = new Cheracter('Vasia', 'Bowerman');
    vasia.health = 0;
    vasia.levelUp();
  }).toThrow();
});

test('Проверка нанесения урона', () => {
  const bowerman1 = new Bowerman('Boris', 'Bowerman');
  bowerman1.damage(20);
  expect(bowerman1.health).toBe(85);
});

test('Проверка повышения уровня', () => {
  const bowerman1 = new Bowerman('Boris', 'Bowerman');
  bowerman1.damage(20);
  bowerman1.levelUp();
  expect(bowerman1.health).toBe(100);
});

test('Проверка нанесение урона мертвому игроку', () => {
  const bowerman1 = new Bowerman('Boris', 'Bowerman');
  bowerman1.health = -1;
  expect(() => {
    bowerman1.damage(10);
  }).toThrow();
});
