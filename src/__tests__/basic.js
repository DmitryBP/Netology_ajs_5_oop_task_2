// import Cheracter from '../js/Cheracter.js';

class Cheracter {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack;
    this.defence;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else throw new Error('Персонаж мертв');
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else throw new Error('Персонаж мертв');
  }
}

test('Ошибка при повышении уровня метвого игрока', () => {
  expect(() => {
    const vasia = new Cheracter('Vasia', 'Bowerman');
    vasia.health = 100;
    vasia.evelUp();
  }).toThrow();
});

test('test', () => {
  const sum = 2 + 2;
  console.log(sum);
  expect(sum).toBe(4);
});

// test('Расчет урона', () => {
//   const test = new Cheracter('Vasia1', 'Bowerman');

//   expect(test.health).toBe(85);
// });

// test('Проверяем что класс корректно создает объект', () => {
//   const expectedObject = {
//     name: 'Ibrahim',
//     type: 'Bowman',
//     health: 100,
//     level: 1,
//   };
//   expect(new Cheracter('Лучник', 'Bowman')).toEqual(expectedObject);
// });
