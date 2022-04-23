const initialState = [
  {
    id: "1270989",
    date: "15.02.2021, 18:00",
    status: "Новый",
    position: "6",
    sum: "1010907",
    fullName: "Пугачева Алла Борисовна",
  },

  {
    id: "2353474",
    date: "12.03.2021, 05:15",
    status: "Новый",
    position: "2",
    sum: "98003",
    fullName: "Филиппов Киркор Бедросович",
  },

  {
    id: "1103397",
    date: "03.02.2021, 08:04",
    status: "Рассчет",
    position: "5",
    sum: "3800",
    fullName: "Тихонова Алина Давидовна",
  },

  {
    id: "6924662",
    date: "21.01.2021, 13:32",
    status: "Выполнен",
    position: "1",
    sum: "5700",
    fullName: "Александрова Юлия Никитична",
  },

  {
    id: "2200086",
    date: "19.01.2021, 10:28",
    status: "Отменен",
    position: "- ",
    sum: "-",
    fullName: "Андрей Малахов",
  },

  {
    id: "2842064",
    date: "04.01.2021, 12:12",
    status: "Отложен",
    position: "1",
    sum: "20500",
    fullName: "Судакова Анастасия Ильинична",
  },

  {
    id: "1730071",
    date: "17.12.2020, 22:45",
    status: "Выполнен",
    position: "1",
    sum: "1399",
    fullName: "Зверева Арина Николаевна",
  },

  {
    id: "7987376",
    date: "07.12.2020, 08:57",
    status: "Выполнен",
    position: "3",
    sum: "117810",
    fullName: "Карташов Максим Кириллович",
  },

  {
    id: "1373265",
    date: "15.11.2020, 14:26",
    status: "Выполнен",
    position: "1",
    sum: "17008",
    fullName: "Васильев Вадим Даниилович",
  },

  {
    id: "1311100",
    date: "07.11.2020, 18:52",
    status: "Отменен",
    position: "-",
    sum: "- ",
    fullName: "София Ротару",
  },
];

export const orderList = (state = initialState, { type }) => {
  switch (type) {
    default:
      return state;
  }
};
