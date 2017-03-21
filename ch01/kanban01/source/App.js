import React from 'react';
import {render} from 'react-dom';
import KanbanBoard from './KanbanBoard';

let cardsList = [
  {
    id: 1,
    title: "책읽기",
    description: "전체 책을 읽어야 함.",
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "코딩하기",
    description: "책 샘플 따라 코드 작성",
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "연락처 예제",
        done: true
      },
      {
        id: 2,
        name: "Kanban 예제",
        done: false
      },
      {
        id: 3,
        name: "간단한 실험",
        done: false
      }
    ]
  }
];

render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));