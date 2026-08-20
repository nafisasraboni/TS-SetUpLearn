"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var day;
(function (day) {
    day[day["saturday"] = 0] = "saturday";
    day[day["sunday"] = 1] = "sunday";
    day[day["monday"] = 2] = "monday";
    day[day["tuesday"] = 3] = "tuesday";
    day[day["wednesday"] = 4] = "wednesday";
    day[day["thursday"] = 5] = "thursday";
    day[day["friday"] = 6] = "friday";
})(day || (day = {}));
const offDay = day.tuesday;
console.log(offDay);
var priority;
(function (priority) {
    priority["low"] = "Low";
    priority["moderate"] = "moderate";
    priority["medium"] = "medium";
    priority["high"] = "high";
    priority["urgent"] = "urgent";
})(priority || (priority = {}));
const thisWork = priority.high;
console.log(thisWork);
//# sourceMappingURL=Enums.js.map