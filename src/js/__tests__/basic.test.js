import Bowman from "../Bowman";
import Character from "../Character";

test("Показатели должны изменяться правиль", () => {
  const hero = new Bowman("Dima");
  hero.levelUp();
  expect(hero.level).toBe(2);
  expect(hero.attack).toBe(25 * 1.2);
  expect(hero.defence).toBe(25 * 1.2);
  expect(hero.attack).toBe(25 * 1.2);
  expect(hero.health).toBe(100);
});

test("В имени должно быть больше 2-х знаков", () => {
  expect(() => new Character("D", "Bowman")).toThrow();
});
test("В имени должно не больше 10 знаков", () => {
  expect(() => new Character("Dimadimadim", "Bowman")).toThrow();
});
test("Тип героя должен соответствовать списку героев", () => {
  expect(() => new Character("Dima", "Bowman1")).toThrow();
});
test("Мертвому игроку нельзя повысить уровень", () => {
  expect(() => {
    const vasia = new Character("Vasia", "Bowman");
    vasia.health = 0;
    vasia.levelUp();
  }).toThrow();
});
test('Урон должен считается правильно', () => {
  const hero = new Bowman('Petr');
  hero.damage(10);
  expect(hero.health).toBe(92.5)
  
})
test("Значение здоровья при любом уроне не станет меньше нуля", () => {
  const vasia = new Character("Vasia", "Bowman");
  vasia.damage(200);
  expect(vasia.health).toBe(0);
});
