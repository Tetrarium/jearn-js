// 1. Хранение отметок "не прочитано"
// https://learn.javascript.ru/weakmap-weakset#hranenie-otmetok-ne-prochitano

function task5_8_1() {
  const messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
  ];

  const isReadStore = new WeakSet();

  function showMessage(num) {
    const msg = messages[num];
    if (msg) {
      isReadStore.add(msg);
      console.log(`${msg.from} написал(а): ${msg.text}`);
    } else {
      console.log('Сообщения не существует');
    }
  }

  function showIsMessageRead(num) {
    const msg = messages[num];
    if (msg) {
      const txt = isReadStore.has(msg)
        ? 'прочитано'
        : 'не прочитано';

      console.log(`Сообщение от ${msg.from} ${txt}`);
    } else {
      console.log('Сообщения не существует');
    }
  }

  function deleteMessage(num) {
    const msg = messages[num];
    if (num >= messages.length) {
      console.log(`Сообщения с номером ${num} не существует`);
    } else {
      messages.splice(num, 1);
      console.log('Сообщение удалено');
    }
  }

  showIsMessageRead(2);
  showMessage(2);
  deleteMessage(2);
  showIsMessageRead(2);
  showIsMessageRead(1);
  showIsMessageRead(0);
  showMessage(0);
  showIsMessageRead(0);
}
task5_8_1();


// 2. Хранение времени прочтения
// https://learn.javascript.ru/weakmap-weakset#hranenie-vremeni-prochteniya

function task5_8_2() {
  const messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
  ];

  const dateReadStore = new WeakMap();

  function showMessage(num) {
    const msg = messages[num];
    if (msg) {
      if (!dateReadStore.has(msg)) {
        dateReadStore.set(msg, new Date().toLocaleString());
      }
      console.log(`${msg.from} написал(а): ${msg.text}`);
    } else {
      console.log('Сообщения не существует');
    }
  }

  function showWhenMessageRead(num) {
    const msg = messages[num];
    if (msg) {
      const txt = dateReadStore.has(msg)
        ? `прочитано ${dateReadStore.get(msg)}`
        : 'не прочитано';

      console.log(`Сообщение от ${msg.from} ${txt}`);
    } else {
      console.log('Сообщения не существует');
    }
  }

  function deleteMessage(num) {
    const msg = messages[num];
    if (num >= messages.length) {
      console.log(`Сообщения с номером ${num} не существует`);
    } else {
      messages.splice(num, 1);
      console.log('Сообщение удалено');
    }
  }

  showWhenMessageRead(2);
  showMessage(2);
  deleteMessage(2);
  showWhenMessageRead(2);
  showWhenMessageRead(1);
  showWhenMessageRead(0);
  showMessage(0);
  showWhenMessageRead(0);
}
task5_8_2();
