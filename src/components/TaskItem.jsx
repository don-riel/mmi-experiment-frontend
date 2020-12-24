import Drag from "./drag/Drag";
import CopyUrl from "./copy-url/CopyUrl";
import CopyTextBlock from "./copy-textblock/CopyTextBlock";
import ScrollVertical from "./scroll-vertical/ScrollVertical";
import ScrollHorizontal from "./scroll-horizontal/ScrollHorizontal";
import PointClick from "./point-click/PointClick";
import TaskTimeResult from "./task-time-result/TaskTimeResult";

const TaskItem = ({ taskNumber, handleIsTaskDone, isTimerRunning }) => {
  switch (taskNumber) {
    case 1:
      return (
        <div>
          <Drag
            handleIsTaskDone={handleIsTaskDone}
            isTimerRunning={isTimerRunning}
          />
        </div>
      );

    case 2:
      return (
        <div>
          <CopyUrl
            handleIsTaskDone={handleIsTaskDone}
            isTimerRunning={isTimerRunning}
          />
        </div>
      );
    case 3:
      return (
        <div>
          <CopyTextBlock
            handleIsTaskDone={handleIsTaskDone}
            isTimerRunning={isTimerRunning}
          />
        </div>
      );
    case 4:
      return (
        <div>
          <ScrollVertical
            handleIsTaskDone={handleIsTaskDone}
            isTimerRunning={isTimerRunning}
          />
        </div>
      );
    case 5:
      return (
        <div>
          <ScrollHorizontal
            handleIsTaskDone={handleIsTaskDone}
            isTimerRunning={isTimerRunning}
          />
        </div>
      );
    case 6:
      return (
        <div>
          <PointClick
            handleIsTaskDone={handleIsTaskDone}
            isTimerRunning={isTimerRunning}
          />
        </div>
      );
    default:
      return( 
        <div>
          <TaskTimeResult />
        </div>
      )
  }
};

export default TaskItem;
