// import '../DatePickerStyle.css';

// import React from 'react';

// import moment from 'moment';
// import DatePicker, { CalendarContainer } from 'react-datepicker';

// import Button from '../../../Atomic/Button/Button';
// import Div from '../../../Atomic/Container/Div/Div';
// import Paragraph from '../../../Atomic/Paragraph/Paragraph';
// import style from './Calender.module.css';

// const Calender = (props) => {
//   const CalenderBox = ({ className, children }) => {
//     return (
//       <Div>
//         <CalendarContainer className={className}>
//           <Div className="react-datepicker__toper">
//             <Paragraph
//               className="react-datepicker__headYear"
//               value={
//                 props.date === undefined || props.date === null ? "" : props.date.getFullYear()
//               }
//             />
//             <Paragraph
//               className="react-datepicker__headDate"
//               value={
//                 props.date === undefined || props.date === null
//                   ? ""
//                   : moment(props.date).format("ddd, MMM DD")
//               }
//             />
//           </Div>
//           <Div style={{ position: "relative" }}>{children}</Div>
//           <Div style={{ textAlign: "center" }}>
//             <Button
//               className={style.ButtonCancel}
//               onClick={props.closeClick}
//               label={props.labelCancel}
//             />
//             <Button
//               className={style.ButtonDone}
//               onClick={props.doneClick}
//               label={props.labelDone}
//             />
//           </Div>
//         </CalendarContainer>
//       </Div>
//     );
//   };

//   return (
//     <Div id={props.id} name={props.name}>
//       <DatePicker
//         selected={props.selected}
//         onChange={props.onChange}
//         calendarContainer={CalenderBox}
//         open={props.open}
//         shouldCloseOnSelect={props.shouldCloseOnSelect}
//         customInput={props.customInput}
//       />
//     </Div>
//   );
// };

// export default Calender;
"use strict";