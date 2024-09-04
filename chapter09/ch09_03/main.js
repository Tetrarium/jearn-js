"use strict"
console.log("Chapter 9.3");

const example9_3_1 = () => {
  class User {
    static staticMethod() {
      console.log(this === User);
    }
  }

  User.staticMethod();
}
// example9_3_1();


const example9_3_2 = () => {
  class User {}

  User.staticMethod = function() {
    console.log(this === User);
  };

  User.staticMethod();
}
// example9_3_2();


const example9_3_3 = () => {
  class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }

    static compare(articleA, articleB) {
      return articleA.date - articleB.date;
    }

  }
  
  const articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1)),
  ];

  articles.sort(Article.compare);

  console.log(articles);
}
// example9_3_3();


const example9_3_4 = () => {
  class Articles {
    static articles = []
    static nextId = 1

    static getId() {
      return this.nextId++;
    }

    static add(title, date) {
      const article = new Article(title, date);
      article.id = this.getId();
      this.articles.push(article);
      return article;
    }

    static getAll() {
      return this.articles;
    }

    static getById(id) {
      return this.articles.find(article => article.id === id)
    }

    static remove(id) {
      this.articles = this.articles.filter(article => article.id !== id);
    }
  }

  class Article {
    constructor(title) {
      this.title = title;
      this.date = new Date();
    }

    static createTodays() {
      return new this("Сегодняшний дайджест", new Date());
    }
  }

  const article = Article.createTodays();
  console.log(article);

  Articles.add('asdfg');
  Articles.add('teest');
  console.log(Articles.getAll());
  console.log(Articles.getById(2));
  Articles.remove(1);
  console.log(Articles.getAll());
}
// example9_3_4();


const example9_3_5 = () => {
  class Animal {
    constructor(name, speed) {
      this.name = name;
      this.speed = speed;
    }

    run(speed = 0) {
      this.speed += speed;
      console.log(`${this.name} runs with speed ${this.speed}`);
    }

    static compare(animalA, animalB) {
      return animalA.speed - animalB.speed;
    }
  };

  class Rabbit extends Animal {
    hide() {
      console.log(`${this.name} is hiding`);
    }
  }

  const rabbits = [
    new Rabbit("White rabbit", 10),
    new Rabbit("Black rabbit", 5)
  ]

  rabbits[0].run();
  rabbits.sort(Rabbit.compare);

  rabbits[0].run();

  console.log(Rabbit.prototype);
  console.log(Rabbit.prototype.__proto__ === Animal.prototype);
  console.log(Rabbit.__proto__ === Animal);
}
// example9_3_5();
