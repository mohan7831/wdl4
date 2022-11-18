/* eslint-disable no-undef */

const todoList = () => {
  let yesterday = new Date();
  var all = [];
  yesterday.setDate(yesterday.getDate() - 1).toLocaleString("en-CA");

  let today = new Date().toLocaleString("en-CA");

  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1).toLocaleString("en-CA");
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };
  const overdue = () => {
    let od = [];
    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate == yesterday) {
        od.push(all[i]);
      }
    }
    return od;
  };

  const dueToday = () => {
    let dt = [];
    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate == today) {
        dt.push(all[i]);
      }
    }
    return dt;
  };

  const dueLater = () => {
    let dl = [];
    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate == tomorrow) {
        dl.push(all[i]);
      }
    }
    return dl;
  };

  const toDisplayableList = (list) => {
    let answer = "",
      i = 0;
    for (i = 0; i < list.length - 1; i++) {
      if (list[i].dueDate != today) {
        answer = answer + "[ ] " + list[i].title + " " + list[i].dueDate + "\n";
      } else {
        if (list[i].completed != true) {
          answer = answer + "[ ] " + list[i].title + " " + "\n";
        } else {
          answer = answer + "[x] " + list[i].title + " " + "\n";
        }
      }
    }

    if (list[i].dueDate != today) {
      answer = answer + "[ ] " + list[i].title + " " + list[i].dueDate;
    } else {
      if (list[i].completed != true) {
        answer = answer + "[ ] " + list[i].title + " ";
      } else {
        answer = answer + "[x] " + list[i].title + " ";
      }
    }

    return answer;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
