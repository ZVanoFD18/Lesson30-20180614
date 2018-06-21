'use strict';
/**-----------------------------------------------------------------------------
 * Обычные задания
 */
/**Задание 1:
 * Дан массив с элементами 'Привет, ', 'мир' и '!'.
 * Необходимо вывести на экран фразу 'Привет, мир!'.
 **/
function doTask1() {
	alert('Task 1.');
	let resText = 'Will be set later...';
	let arr = ['Привет', ', мир', '!']
	resText = 'Task 1. Результат: ' + arr.join('');
	alert(resText);
	log2document(resText);
}
/**
 * Задание 2: Решим немного другую задачу: дан массив с элементами 'Привет, ', 'мир' и '!'.
 * Необходимо записать в переменную text фразу 'Привет, мир!',
 * а затем вывести на экран содержимое этой переменной.
 **/
function doTask2() {
	alert('Task 2. - То же, что Task1');
}
/**
 * Задание 3: Задача. Дан массив ['Привет, ', 'мир', '!'].
 * Необходимо записать в нулевой элемент этого массива слово 'Пока, '
 * (то есть вместо слова 'Привет, ' будет 'Пока, ').
 **/
function doTask3() {
	alert('Task 3. ');
	let resText = 'Will be set later...';
	let arr = ['Привет, ', 'мир', '!']
	arr[0] = 'Пока , ';
	resText = 'Task 3. Результат: ' + arr.join('');
	alert(resText);
	log2document(resText);
}
/**
 * Задание 4: Создайте массив arr с элементами 2, 5, 3, 9.
 * Умножьте первый элемент массива на второй, а третий элемент на четвертый.
 * Результаты сложите, присвойте переменной result.
 * Выведите на экран значение этой переменной.
 **/
function doTask4() {
	alert('Task 4. ');
	let arr = [2, 5, 3, 9]
	let result = 0;
	for (var i = 0, len = Math.floor(arr.length / 2); i < len; i++) {
		result += arr[i * 2] * arr[i * 2 + 1];
	}
	let resText = 'Task 4. Результат: ' + result;
	alert(resText);
	log2document(resText);
}
/**
 * Задание 5: Написать функцию, определяющую среднее арифметическое элементов передаваемого ей массива.
 **/
function doTask5() {
	alert('Task 5. ');
	let arr = [];
	for (var i = 0; i < 5; i++) {
		arr[i] = Math.floor(Math.random() * 10);
	}
	let resText = 'Task 5. Результат: ' + avg(arr) + ' для (' + arr.join('+') +
		')/' + arr.length;
	alert(resText);
	log2document(resText);

	function avg(someArr) {
		let result = 0;
		for (var i = 0, len = someArr.length; i < len; i++) {
			result += arr[i];
		}
		result = result / someArr.length;
		return result;
	}
}
/**
 * Задание 6: Написать функцию, определяющую количество положительных,
 * отрицательных и нулевых элементов передаваемого ей массива.
 **/
function doTask6() {
	alert('Task 6. ');
	const indexPositive = 0;
	const indexNegative = 1;
	const indexZero = 2;
	let arr = [];
	for (var i = 0; i < 10; i++) {
		arr[i] = Math.floor(Math.random() * 10 - 5);
	}
	let resArr = someFun(arr);
	let resText = 'Task 6. Результат:' //
		+ ' положительных ' + resArr[indexPositive] //
		+ ', отрицательных ' + resArr[indexNegative] //
		+ ', нулевых ' + resArr[indexZero] //
		+ ' в массиве [' + arr.join(', ') + ']';
	alert(resText);
	log2document(resText);

	function someFun(someArr) {
		let result = [0, 0, 0];
		for (var i = 0, len = someArr.length; i < len; i++) {
			if (someArr[i] > 0) {
				++result[indexPositive];
			} else if (someArr[i] < 0) {
				++result[indexNegative];
			} else {
				++result[indexZero];
			}
		}
		return result;
	}
}
/**-----------------------------------------------------------------------------
 * Задания повышенной сложности
 **/
/* [7]
 Задание 1: В одномерном массиве, заполненном случайными числами, определить
минимальный и максимальный элементы
*/
function doTask7() {
	alert('Task 7. ');
	let arr = [];
	for (var i = 0; i < 10; i++) {
		arr[i] = Math.floor(Math.random() * 10 - 5);
	}
	let resArr = doTask7.getMinMax(arr);
	let resText = 'Task 7. Результат:' //
		+ ' минимальное ' + resArr[0] //
		+ ', максмальное  ' + resArr[1] //
		+ ' в массиве [' + arr.join(', ') + ']';
	alert(resText);
	log2document(resText);
}
doTask7.getMinMax = function(someArr) {
		let minVal, maxVal;
		for (var i = 0, len = someArr.length; i < len; i++) {
			let currVal = someArr[i];
			if (i == 0) {
				minVal = maxVal = currVal;
			} else if (currVal > maxVal) {
				maxVal = currVal;
			} else if (currVal < minVal) {
				minVal = currVal;
			}
		}
		return [minVal, maxVal];
	}
	/* [8]
	Задание 2: Пользователь вводит прибыль фирмы за год (12 месяцев). Затем пользователь
	вводит диапазон (например, 3 и 6 – поиск между 3-м и 6-м месяцем). Необходимо определить
	месяц, в котором прибыль была максимальна и месяц, в котором прибыль была минимальна с
	учетом выбранного диапазона.
	*/
function doTask8() {
	alert('Task 8. ');
	let arr = [];
	for (var i = 0; i < 12; i++) {
		arr[i] = Math.floor(Math.random() * 10 - 5);
	}
	let month1 = Math.floor(Math.random() * 11),
		month2 = month1 + Math.floor(Math.random() * (1 + 12 - month1));
	let resArr = getPeriodResult(arr, month1, month2);
	let resText = 'Task 8. Результат:' //
		+ ' за период ' + month1 + '..' + month2 //
		+ ' минимальное ' + resArr[0] //
		+ ', максмальное  ' + resArr[1] //
		+ ' в массиве [' + arr.join(', ') + ']';
	alert(resText);
	log2document(resText);

	function getPeriodResult(someArr, argMonth1, argMonth2) {
		let minVal, maxVal;
		for (var i = argMonth1 - 1; i < argMonth2; i++) {
			let currVal = someArr[i];
			if (i == (argMonth1 - 1)) {
				minVal = maxVal = currVal;
			} else if (currVal > maxVal) {
				maxVal = currVal;
			} else if (currVal < minVal) {
				minVal = currVal;
			}
		}
		return [minVal, maxVal];
	}
}
/*
Задание 3: В одномерном массиве, состоящем из N вещественных чисел вычислить:
• Сумму отрицательных элементов.
• Произведение элементов, находящихся между min и max элементами.
• Произведение элементов с четными номерами.
• Сумму элементов, находящихся между первым и последним отрицательными
элементами.
*/
function doTask9() {
	alert('Task 9. ');
	let arr = [];
	for (var i = 0; i < 10; i++) {
		let ceil = Math.floor(Math.random() * 10 - 5);
		let floor = Math.floor(Math.random() * 10);
		arr[i] = +(ceil + '.' + floor);
	}
	// arr = [3.5, 4.8, 3.6, -5.9, -1, 3.8, 3.4, -1.5, -5.5, 3.6];// Тестовый ряд
	let sumNegative = 0, // сумма отрицательных.
		minIndex, // Индекс минимального элемента.
		maxIndex, // Индекс максимального элемента.
		multipleEven = 1, //  Произведение элементов с четными номерами.
		sumEven, // Сумма четных чисел.
		firstNegativeEndex, // индекс первого отрицательного.
		lastNegativeEndex, // индекс последнего отрицательного.
		minValue, maxValue;
	arr.forEach(function(item, i) {
		if (i % 2 === 0) {
			// Произведение элементов с четными номерами.
			multipleEven *= item;
		}
		if (item < 0) {
			// Сумму отрицательных элементов.
			sumNegative += item;
			if (firstNegativeEndex === undefined) {
				firstNegativeEndex = i;
			}
			lastNegativeEndex = i;
		}
		if (minValue === undefined) {
			minValue = maxValue = item;
			minIndex = maxIndex = i;
		} else if (item < minValue) {
			minValue = item;
			minIndex = i;
		} else if (item > maxValue) {
			maxValue = item;
			maxIndex = i;
		}
	});
	var firstMinMaxIndex = Math.min(minIndex, maxIndex),
		lastMinMaxIndex = Math.max(minIndex, maxIndex),
		lastIndex = Math.max(lastNegativeEndex, lastMinMaxIndex),
		sumFirstLastNegative = 0, //Сумму элементов, находящихся между первым и последним отрицательными элементами.
		multipleNegative = 1 // Произведение чисел между minIndex и maxIndex
	;
	for (i = Math.min(firstNegativeEndex, firstMinMaxIndex); i <= lastIndex; i++) {
		if (i >= firstNegativeEndex && (i <= lastNegativeEndex)) {
			sumFirstLastNegative += arr[i]; // -6.700000000000001
		}
		if (i >= firstMinMaxIndex && i <= lastMinMaxIndex) {
			// Произведение элементов, находящихся между min и max элементами.
			multipleNegative *= arr[i];
		}
	}
	let resText = 'Task 9. Результат:' //
		+ ' в массиве [' + arr.join(', ') + ']' + "\n" + sumNegative +
		' - Сумму отрицательных элементов' //
		+ "\n" + multipleNegative +
		' - Произведение элементов, находящихся между min(' + firstMinMaxIndex +
		') и max(' + lastMinMaxIndex + ') элементами. ' //
		+ "\n" + multipleEven + ' - Произведение элементов с четными номерами. ' //
		+ "\n" + sumFirstLastNegative +
		' - Сумму элементов, находящихся между первым(' + firstNegativeEndex +
		') и последним (' + lastNegativeEndex + ') отрицательными элементами. ' //
	;
	alert(resText);
	log2document(resText);
}
/*
Задание 4:
Написать программу, копирующую последовательно элементы одного массива размером 10
элементов в 2 массива размером 5 элементов каждый.
*/
function doTask10() {
	alert('Task 10. ');
	let arr = [];
	for (var i = 0; i < 10; i++) {
		arr[i] = Math.floor(Math.random() * 10 - 5);
	}
	var arr1 = [],
		arr2 = [];
	for (i = 0; i < arr.length; i++) {
		((i < Math.floor(arr.length / 2)) ? arr1 : arr2).push(arr[i]);
	}
	let resText = 'Task 10. Результат:' //
		+ "\n" + ' массив [' + arr.join(', ') + ']' //
		+ "\n" + ' поделили на [' + arr1.join(', ') + '] ' //
		+ '[' + arr2.join(', ') + ']';
	alert(resText);
	log2document(resText);
}
/*
Задание 5:
Напишите программу, которая выполняет поэлементную сумму двух массивов и результат
заносит в третий массив.
*/
function doTask11() {
	alert('Task 11. ');
	let arr = [];
	const ARR_LEN = 10
	var arr1 = [],
		arr2 = [],
		arrSum = [];
	for (var i = 0; i < ARR_LEN; i++) {
		arr1[i] = Math.floor(Math.random() * 10 - 5);
		arr2[i] = Math.floor(Math.random() * 10 - 5);
	}
	for (i = 0; i < ARR_LEN; i++) {
		arrSum[i] = arr1[i] + arr2[i];
	}
	let resText = 'Task 11. Результат:' //
		+ "\n" + ' Получили массив [' + arrSum.join(', ') + ']' //
		+ "\n" + ' из ' //
		+ "\n" + '[' + arr1.join(', ') + '] ' //
		+ "\n" + '[' + arr2.join(', ') + ']';
	alert(resText);
	log2document(resText);
}
/**-----------------------------------------------------------------------------
 * Служебные функции
 **/
window.onload = doSelect;

function doSelect() {
	let taskIndex = +prompt("Укажите № задачи для выполнения", 1);;
	let functionName = 'doTask' + taskIndex;
	if (eval("typeof " + functionName) === 'function') {
		eval(functionName + '()');
		setTimeout(doSelect, 100);
	} else {
		alert('Завершение работы.')
	}
}
/**Добавляет текст в начало документа
 * @param {String} str - текст для добавления
 **/
function log2document(str) {
	log2document.counter = log2document.counter || 0;
	++log2document.counter;
	var div = document.createElement('div');
	div.innerHTML = '[' + log2document.counter + '] ' + str;
	document.body.insertBefore(div, document.body.firstChild);
}
