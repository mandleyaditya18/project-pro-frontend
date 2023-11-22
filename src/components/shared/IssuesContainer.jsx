import { useState } from 'react'

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import IssueCard from './IssueCard'

const ISSUES = [
  { id: 1, name: 'Task 1' },
  { id: 2, name: 'Task 2' },
  { id: 3, name: 'Task 3' },
  { id: 4, name: 'Task 4' },
  { id: 5, name: 'Task 5' },
  { id: 6, name: 'Task 6' },
  { id: 7, name: 'Task 7' },
  { id: 8, name: 'Task 8' },
]

const COLUMNS = {
  todo: {
    name: 'To Do',
    items: ISSUES,
  },
  progress: {
    name: 'In Progress',
    items: [],
  },
  review: {
    name: 'Review',
    items: [],
  },
  done: {
    name: 'Done',
    items: [],
  },
}

const IssuesContainer = () => {
  const [columns, setColumns] = useState(COLUMNS)

  const onDragEnd = (result) => {
    const issueId = result.draggableId
    const sourceCol = result.source.droppableId
    const destinationCol = result.destination.droppableId
    const destinationIndex = result.destination.index
    const sourceItems = columns[sourceCol].items
    let destinationItems = columns[destinationCol].items
    const issue = sourceItems.find((item) => item.id.toString() === issueId)

    if (sourceCol === destinationCol) {
      destinationItems = destinationItems.filter(
        (item) => item.id.toString() !== issueId,
      )
    }

    const updatedColumns = {
      ...columns,
      [sourceCol]: {
        ...columns[sourceCol],
        items: sourceItems.filter((item) => item.id.toString() !== issueId),
      },
      [destinationCol]: {
        ...columns[destinationCol],
        items: [
          ...destinationItems.slice(0, destinationIndex),
          issue,
          ...destinationItems.slice(destinationIndex),
        ],
      },
    }

    setColumns(updatedColumns)
  }

  return (
    <div className="h-full w-full flex gap-4">
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.keys(columns).map((col) => (
          <div key={col} className="flex flex-col items-center min-w-[296px]">
            <h1 className="text-center">{columns[col].name}</h1>
            <div className="mt-2 flex flex-col items-center w-full h-full">
              <Droppable droppableId={col} key={col}>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      background: snapshot.isDraggingOver ? 'lightblue' : '',
                      padding: 4,
                    }}
                    className="flex flex-col gap-2 w-full h-screen"
                  >
                    {columns[col].items.map((item, index) => (
                      <Draggable
                        key={item.id.toString()}
                        draggableId={item.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <IssueCard />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        ))}
      </DragDropContext>
    </div>
  )
}

export default IssuesContainer
