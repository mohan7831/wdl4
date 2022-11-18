/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, markAsComplete, add } = todoList();

let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1).toLocaleString("en-CA");

let today = new Date().toLocaleString("en-CA");

let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1).toLocaleString("en-CA");

describe("TodoList Test", () => {
  beforeAll(() => {
    add({
      title: "Test for new Todo",
      completed: false,
      dueDate: yesterday,
    });
  });
  const overdue = () => {
    let od = [];
    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate == yesterday) {
        od.push(all[i]);
      }
    }
    return od.length;
  };
  test(" add new todo", () => {
    const CountItems = all.length;
    add({
      title: "To complete homework",
      completed: false,
      dueDate: today,
    });
    add({
      title: "To electricity bill",
      completed: false,
      dueDate: tomorrow,
    });
    add({
      title: "To wash dresses",
      completed: false,
      dueDate: tomorrow,
    });
    add({
      title: "To buy groceries",
      completed: true,
      dueDate: tomorrow,
    });
    add({
      title: "To complete react basics",
      completed: true,
      dueDate: yesterday,
    });
    add({
      title: "To complete Operating Systems upto mid-1",
      completed: true,
      dueDate: today,
    });
    add({
      title: "To complete computer networks 5th chapter",
      completed: false,
      dueDate: tomorrow,
    });

    //my code

    expect(all.length).toBe(CountItems + 7);
  });

  test("Test for marking a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("checks retrieval of overdue items", () => {
    expect(all[0].dueDate).toBe(yesterday);
  });

  test("checks retrieval of due today items.", () => {
    expect(all[1].dueDate).toBe(today);
  });

  test("checks retrieval of due later items.", () => {
    expect(all[2].dueDate).toBe(tomorrow);
  });

  test("checks for react basics is completed or not.", () => {
    expect(all[4].completed).not.toBe(false);
  });
  test("checks for due date of computer networks.", () => {
    expect(all[7].dueDate).toBe(tomorrow);
  });

  test("checks for overdue tasks less than or equal to 2", () => {
    expect(overdue()).toBeLessThanOrEqual(2);
  });
});
