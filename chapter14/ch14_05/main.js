console.log('Chapter 14.5');

const example14_5_1 = () => {
  const a = 1;

  console.log((~a >>> 0).toString(2).length);

  const b = 4.565

  console.log(b | 0);

  console.log(parseInt('11011', 2));
}
// example14_5_1();


const example14_5_2 = () => {
  const a = 9;
  const b = 14;

  
  
  function showResultBinaryOperation(a, b, operator) {
    const result = eval(`${a}${operator}${b}`);
    const NUM_LEN = 32;

    console.log(a.toString(2).padStart(NUM_LEN, '0'));
    console.log(b.toString(2).padStart(NUM_LEN, '0'));
    console.log(result.toString(2).padStart(NUM_LEN, '0'));
    console.log(`${a} ${operator} ${b} = ${result}`);
    console.log('<--------->\n\n');
  }
  
  console.log('Побитовое И');
  showResultBinaryOperation(a, b, '&');

  console.log('Побитовое ИЛИ');
  showResultBinaryOperation(a, b, '|');

  
  console.log('Исключающее ИЛИ');
  showResultBinaryOperation(a, b, '^');

  console.log(a ^ b ^ b);


  console.log('Побитовое НЕ');
  console.log(a.toString(2).padStart(32, '0'));
  console.log((~a >>> 0).toString(2).padStart(32, '0'));
  console.log(~a >>> 0);
 
}
// example14_5_2();


const example14_5_3 = () => {
  const ACCESS = {
    ADMIN: 1,           // 00001
    GOODS_EDIT: 2,      // 00010
    GOODS_VIEW: 4,      // 00100
    ARTICLE_EDIT: 8,    // 01000
    ARTICLE_VIEW: 16,   // 10000
  }

  console.log('GUEST');
  const guest = ACCESS.ARTICLE_VIEW | ACCESS.GOODS_VIEW;
  console.log(guest);
  console.log(guest.toString(2)); // 10100

  console.log('EDITOR');
  const editor = guest | ACCESS.ARTICLE_EDIT | ACCESS.GOODS_EDIT;
  console.log(editor);
  console.log(editor.toString(2)) // 11110

  console.log('ADMIN');
  const admin = editor | ACCESS.ADMIN;
  console.log(admin); // 31
  console.log(admin.toString(2)); // 11111

  console.log(editor & ACCESS.ADMIN);
  console.log(editor & ACCESS.ARTICLE_EDIT);

  const check = ACCESS.ARTICLE_EDIT | ACCESS.GOODS_EDIT;
  console.log(check.toString(2));
  console.log( admin & check );
  console.log( editor & check );
  console.log( guest & check );
}
example14_5_3();


const example14_5_4 = () => {

}
// example14_5_4();
