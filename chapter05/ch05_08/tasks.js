// 1. Хранение отметок "не прочитано"
// https://learn.javascript.ru/weakmap-weakset#hranenie-otmetok-ne-prochitano

function task5_8_1() {
  const messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
  ];

  const isReadingStore = new WeakSet();

  function showMessage(num) {
    const msg = messages[num];
    if (msg) {
      isReadingStore.add(msg);
      console.log(`${msg.from} написал(а): ${msg.text}`);
    } else {
      console.log('Сообщения не существует');
    }
  }

  function showIsMessageReading(num) {
    const msg = messages[num];
    if (msg) {
      const txt = isReadingStore.has(msg)
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

  showIsMessageReading(2);
  showMessage(2);
  deleteMessage(2);
  showIsMessageReading(2);
  showIsMessageReading(1);
  showIsMessageReading(0);
  showMessage(0);
  showIsMessageReading(0);
}
task5_8_1();
