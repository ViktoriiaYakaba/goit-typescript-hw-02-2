/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  WORK,
  FESTIVE,
}

function isWeekend(day: Day): boolean {
  return day === Day.FESTIVE;
}


console.log(isWeekend(Day.WORK)); // Поверне false (день робочий)
console.log(isWeekend(Day.FESTIVE)); // Поверне true (день вихідний)

