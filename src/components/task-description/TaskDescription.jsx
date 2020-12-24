const TaskDescription = ({ taskNumber }) => {
  let desc = "";
  switch (taskNumber) {
    case 1:
      desc = "Task 1: Drag the yellow circles inside the gray box.";
      break;
    case 2:
      desc = "Task 2: Copy the url and paste it inside the input box.";
      break;
    case 3:
      desc =
        "Task 3: Copy the whole block of text and paste it inside the input box.";
      break;
    case 4:
      desc =
        'Task 4 : Scroll to the bottom of the text box. Click "Click Me" button then scroll up again and click the "Done" button.';
      break;
    case 5:
      desc =
        'Task 5 : Scroll to the right end of the text box. Click "Click Me" button then scroll back to the left end and click the "Done" button. To scroll side ways with mouse: "Hold shift then use scroll wheel"';
      break;
    case 6:
      desc = 'Task 6 : Click the following numbers "0123456789"';
      break;
    default:
      desc = "";
      break;
  }
  return <h2>{desc}</h2>;
};

export default TaskDescription;
