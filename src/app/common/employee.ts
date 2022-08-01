export class Employee {
    /*
    "empno" : 111,
      "ename" : "teena",
      "job" : "developer",
      "hiredate" : "12-4-2022",
      "managerid" : 3333,
      "salary" : 34000,
      "commission" : 660,
      "deptno" : 102,
    */
   constructor(
                public empno :number,
                public ename: string,
                public job : string,
                public hiredate : string,
                public managerid :number,
                public salary :number,
                public commission :number,
                public deptno :number,

   ){}
}
