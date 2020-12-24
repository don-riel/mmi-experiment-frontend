import React, { Component } from "react";
import "./Drag.css";

/* 
Creating the draggable elements and funtions was based from 
https://www.kirupa.com/html5/drag.htm?fbclid=IwAR2Y4wf3vYL0UpisOvzMnRSgVoDWFRAkFzTyq9AdRyjc58Sa_Dnxmg5xiv8
by kirupa
*/

class Drag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragged: 0,
    };
  }

  componentDidMount() {
    let that = this;
    let container = document.querySelector("#container");
    let dropzone = document.querySelector("#dropzone");
    let activeItem = null;
    let active = false;
    let pos = dropzone.getBoundingClientRect();
    let dropCount = 0;

    //listeners for touchevents on touchscreen devices
    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    //listenerss for mouse events
    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {
      if (e.target !== e.currentTarget) {
        if (e.target.id === "dropzone") {
          active = false;
        } else {
          active = true;
          // this is the item we are interacting with
          activeItem = e.target;

          if (activeItem !== null) {
            if (!activeItem.xOffset) {
              activeItem.xOffset = 0;
            }
            if (!activeItem.yOffset) {
              activeItem.yOffset = 0;
            }
            //set initial position of pointer
            if (e.type === "touchstart") {
              //for touch-based events
              activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
              activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
            } else {
              //for mouse-based events
              activeItem.initialX = e.clientX - activeItem.xOffset;
              activeItem.initialY = e.clientY - activeItem.yOffset;
            }
          }
        }
      }
    }

    function dragEnd(e) {
      if (activeItem !== null) {
        activeItem.initialX = activeItem.currentX;
        activeItem.initialY = activeItem.currentY;

        if (e.target.getBoundingClientRect().right > pos.right - 110) {
          activeItem.classList.add("hide");
          dropCount++;
          if (dropCount === 5) {
            that.onTaskEnd();
          }
        }
      }

      active = false;
      activeItem = null;
    }

    function drag(e) {
      if (active) {
        //update position based on the current pointer position
        if (e.type === "touchmove") {
          e.preventDefault();
          activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
          activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
        } else {
          activeItem.currentX = e.clientX - activeItem.initialX;
          activeItem.currentY = e.clientY - activeItem.initialY;
        }

        activeItem.xOffset = activeItem.currentX;
        activeItem.yOffset = activeItem.currentY;
        //set the new position of the dragged element
        setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
  }

  onTaskEnd = () => {
    this.props.handleIsTaskDone();
  };

  render() {
    return (
      <div
        id="outerContainer"
        className={`task ${this.props.isTimerRunning ? "" : "blocker"}`}
      >
        <div id="container">
          <div className="item"> </div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"> </div>
          <div className="item"> </div>

          <div id="dropzone" className="zone">
            <p>Drag items inside me</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Drag;
