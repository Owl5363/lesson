//1.Почему код дает именно такие результаты?
var a = 1, b = 1, c, d;
//Префикс, увеличивает a до 2 и возвращает обратно
c = ++a; alert(c);           // 2
//Постфикс увеличивает, но возвращает первое значение
d = b++; alert(d);           // 1
// a увеличивается до 3
c = (2+ ++a); alert(c);      // 5
// b увеличивается до 3, но остается старое значение
d = (2+ b++); alert(d);      // 4
// Каждлая переменная увеличивается по 2 раза
alert(a);                    // 3
alert(b); 

//2.Чему будет равен x?

var a = 2;
var x = 1 + (a*=2);
x= 1 + 4 = 5;

//3. a и b (разность, сумма, произведение)

		var a = 7;
		var b = 4;
		if (a > 0 && b > 0){
		x = a - b;
		alert(x);
		} else if (a < 0 && b < 0){
			x = a * b;
			alert (x);
			}
		  else if (a > 0 && b < 0 || a < 0 && b > 0) {
		  x = a + b;
		  alert (x);
		  }

//4.Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15

		a = +prompt ('Введите число от 1 до 15');
		switch (a) {
		case 1:
			alert ( 'Ваше число 1');
			break;
		case 2:
			alert ( 'Ваше число 2');
			break;
		case 3:
			alert ( 'Ваше число 3');
			break;
		case 4:
			alert ( 'Ваше число 4');
			break;
		case 5:
			alert ( 'Ваше число 5');
			break;
		case 6:
			alert ( 'Ваше число 6');
			break;
		case 7:
			alert ( 'Ваше число 7');
			break;
		case 8:
			alert ( 'Ваше число 8');
			break;
		case 9:
			alert ( 'Ваше число 9');
			break;
		case 10:
			alert ( 'Ваше число 10');
			break;
		case 11:
			alert ( 'Ваше число 11');
			break;
		case 12:
			alert ( 'Ваше число 12');
			break;
		case 13:
			alert ( 'Ваше число 13');
			break;
		case 14:
			alert ( 'Ваше число 14');
			break;
		case 15:
			alert ( 'Ваше число 15');
			break;	
		}
//5.Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

		var a = 5;
		var b = 8;

		function plus(a, b) {
    		return a + b;
		}

		function minus(a, b) {
    		return a - b;
		}

		function div (a, b) {
    		return a / b;
		}

		function mult (a, b) {
    		return a + b;
		}
//6.Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

		function mathOperation(arg1, arg2, operation){
    			switch(operation){
       				 case 'умножение':
           				 return arg1 * arg2;
           				 break;
       				 case 'вычитание':
           				 return arg1 - arg2;
            			 break;
        			 case 'деление':
                      			 return arg1 / arg2;
            			 break;
       				 case 'сложение':
           				 return arg1 + arg2;
            			 break;
   				}
		}