const rxIsoDate =
  /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/;
const isIsoDate = (value) => typeof value === "string" && rxIsoDate.test(value);

const raw = {
  a: 1,
  date: "2020-07-17T01:32:26.206Z",
  second: {
    b: 2,
    createdAt: "2020-07-17T01:32:26.206Z",
    third: {
      c: 3,
      updatedAt: "2020-07-17T01:32:26.206Z",
    },
  },
};

const toJsDate = (obj) => {
  if (isIsoDate(obj)) return new Date(obj);
  if (typeof obj !== "object") return obj;

  const nextObj = {};
  for (const [prop, value] of Object.entries(obj)) {
    nextObj[prop] = toJsDate(value);
  }
  return nextObj;
};

console.log(toJsDate(raw));

//======================================================================
