var n = 0;
var i, j;

const cloneMatrix = (className) => {
	const clone = document.querySelector(".matrix-main").cloneNode(true);
	clone.className = "matrix matrix-" + className;
	document.body.appendChild(clone);
};

const styleItems = (className, item) => {
	document.querySelector(
		`.matrix-${className} .m-${item}`
	).style.backgroundColor = "black";
	document.querySelector(`.matrix-${className} .m-${item}`).style.color =
		"white";
	document.querySelector(`.matrix-${className} .m-${item}`).style.borderRadius =
		"50%";
};

while (isNaN(n) || n < 1) {
	n = +prompt("Введите длину массива");
}

var arr = [];
//заполнение массива случайными числами
document.write("<h2>Матрица:</h2> <br />");
document.write('<div class="matrix-main">');
for (i = 0; i < n; i++) {
	arr[i] = []; //инициализация строки
	for (j = 0; j < n; j++) {
		arr[i][j] = Math.round(Math.random() * 9); //заполнение строки
		document.write(`<span class='m-${i}-${j}'>${arr[i][j]}</span>`);
	}
	document.write("<br />");
}
document.write("</div>");

//Сумма главной диагонали
cloneMatrix(1);
var sum = 0;
for (i = 0; i < n; i++) {
	sum = sum + arr[i][i];
	styleItems(1, `${i}-${i}`);
}
document.write(
	"<div class='block'>Сумма главной диагонали = " + sum + "</div>"
);

//Сумма побочной диагонали
cloneMatrix(2);
var sum = 0;
for (i = 0; i < n; i++) {
	sum = sum + arr[i][n - i - 1];

	styleItems(2, `${i}-${n - i - 1}`);
}
document.write(
	"<div class='block'>Сумма побочной диагонали = " + sum + "</div>"
);

//Сумма половины матрицы без главной диагонали сверху справа
cloneMatrix(3);
var sum = 0;
for (i = 0; i < n; i++) {
	for (j = 0; j < n; j++) {
		if (i < j) {
			sum = sum + arr[i][j];
			styleItems(3, `${i}-${j}`);
		}
	}
}
document.write(
	"<div class='block'>Сумма половины матрицы без главной диагонали сверху справа = " +
		sum +
		"</div>"
);

//Сумма половины матрицы c главной диагональю сверху справа
cloneMatrix(4);
var sum = 0;
for (i = 0; i < n; i++) {
	for (j = 0; j < n; j++) {
		if (i <= j) {
			sum = sum + arr[i][j];
			styleItems(4, `${i}-${j}`);
		}
	}
}
document.write(
	"<div class='block'>Сумма половины матрицы c главной диагональю сверху справа = " +
		sum +
		"</div>"
);

//Сумма половины матрицы без главной диагонали снизу слева
cloneMatrix(5);
var sum = 0;
for (i = 0; i < n; i++) {
	for (j = 0; j < n; j++) {
		if (i > j) {
			sum = sum + arr[i][j];
			styleItems(5, `${i}-${j}`);
		}
	}
}
document.write(
	"<div class='block'>Сумма половины матрицы без главной диагонали снизу слева = " +
		sum +
		"</div>"
);

//Сумма половины матрицы c главной диагональю снизу слева
cloneMatrix(6);
var sum = 0;
for (i = 0; i < n; i++) {
	for (j = 0; j < n; j++) {
		if (i >= j) {
			sum = sum + arr[i][j];
			styleItems(6, `${i}-${j}`);
		}
	}
}
document.write(
	"<div class='block'>Сумма половины матрицы c главной диагональю снизу слева = " +
		sum +
		"</div>"
);

//Сумма половины матрицы без побочной диагонали сверху слева
cloneMatrix(7);
var sum = 0;
for (i = 0; i < n; i++) {
	for (j = 0; j < n; j++) {
		if (i + j < n - 1) {
			sum = sum + arr[i][j];
			styleItems(7, `${i}-${j}`);
		}
	}
}
document.write(
	"<div class='block'>Сумма половины матрицы без побочной диагонали сверху слева = " +
		sum +
		"</div>"
);

//Сумма половины матрицы c побочной диагональю сверху слева
cloneMatrix(8);
var sum = 0;
for (i = 0; i < n; i++) {
	for (j = 0; j < n; j++) {
		if (i + j <= n - 1) {
			sum = sum + arr[i][j];
			styleItems(8, `${i}-${j}`);
		}
	}
}
document.write(
	"<div class='block'>Сумма половины матрицы c побочной диагональю сверху слева = " +
		sum +
		"</div>"
);

//Сумма половины матрицы без побочной диагонали снизу справа
cloneMatrix(9);
var sum = 0;
for (i = 0; i < n; i++) {
	for (j = 0; j < n; j++) {
		if (i + j > n - 1) {
			sum = sum + arr[i][j];
			styleItems(9, `${i}-${j}`);
		}
	}
}
document.write(
	"<div class='block'>Сумма половины матрицы без побочной диагонали снизу справа = " +
		sum +
		"</div>"
);

//Сумма квадрата верх право
var t = +prompt(
	"Введите угловой элемент квадрата верх право",
	Math.round(n / 2)
);
var sum = 0;
for (i = 0; i < t; i++) {
	for (j = t; j < n; j++) {
		sum = sum + arr[i][j];
	}
}

document.write(
	"<div class='block'>Сумма квадрата  верх право = " + sum + "</div>"
);

//Сумма квадрата низ лево
var t = +prompt(
	"Введите угловой элемент квадрата верх право",
	Math.round(n / 2)
);
var sum = 0;
for (i = t; i < n; i++) {
	for (j = 0; j < t; j++) {
		sum = sum + arr[i][j];
	}
}

document.write(
	"<div class='block'>Сумма квадрата низ лево = " + sum + "</div>"
);

//Сумма строки p
var p = +prompt("Введите номер строки для подсчета суммы", Math.round(n / 2));
var sum = 0;
var sumUp = 0; //выше строки р
var sumDp = 0; //ниже строки р

for (i = 0; i < n; i++) {
	for (j = 0; j < n; j++) {
		if (i == p) {
			sum = sum + arr[i][j];
			document.write(" " + i + j);
		}
		if (i >= p) {
			sumUp = sumUp + arr[i][j];
		}
		if (i <= p) {
			sumDp = sumDp + arr[i][j];
		}
	}
}

document.write(
	" <div class='block'>Сумма " + p + " строки = " + sum + "</div>"
);
document.write(
	" <div class='block'>Сумма элементов выше " +
		p +
		" строки = " +
		sumUp +
		"</div>"
);
document.write(
	" <div class='block'>Сумма элементов ниже " +
		p +
		" строки = " +
		sumDp +
		"</div>"
);

//Сумма столбца k
var k = +prompt("Введите номер столбца для подсчета суммы", Math.round(n / 2));
var sum = 0;
var sumRk = 0; //правее столбца k
var sumLk = 0; //левее столбца k

for (i = 0; i < n; i++) {
	for (j = 0; j < n; j++) {
		if (j == k) {
			sum = sum + arr[i][j];
			document.write(" " + i + j);
		}
		if (j >= k) {
			sumLk = sumLk + arr[i][j];
		}
		if (j <= k) {
			sumRk = sumRk + arr[i][j];
		}
	}
}

document.write(
	" <div class='block'>Сумма " + k + "  столбца = " + sum + "</div>"
);
document.write(
	" <div class='block'>Сумма элементов правее " +
		k +
		"  столбца = " +
		sumRk +
		"</div>"
);
document.write(
	" <div class='block'>Сумма элементов левее " +
		k +
		"  столбца = " +
		sumLk +
		"</div>"
);
