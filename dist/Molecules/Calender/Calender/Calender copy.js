// // import '../DatePickerStyle.css';

// import React, { useState } from 'react';

// import moment from 'moment';
// import DatePicker, { CalendarContainer } from 'react-datepicker';

// import Button from '../../../Atomic/Button/Button';
// import Div from '../../../Atomic/Container/Div/Div';
// import Input from '../../../Atomic/Input/Input/Input';
// import Paragraph from '../../../Atomic/Paragraph/Paragraph';
// import style from './Calender.module.css';

// const Calender = (props) => {
//   const [date, setDate] = useState(new Date());
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState();
//   const [target, setTarget] = useState({
//     target: { id: props.id, name: props.name, value: "dd/mm/yy", type: props.type },
//   });
//   const openClick = () => {
//     setOpen(!open);
//   };
//   const closeClick = () => {
//     setOpen(false);
//   };
//   const doneClick = () => {
//     setValue(date);
//     setTarget({
//       target: {
//         id: props.id,
//         name: props.name,
//         value: date,
//         type: props.type,
//       },
//     });
//     setOpen(false);
//   };

//   const CalenderBox = ({ className, children }) => {
//     return (
//       <Div>
//         <CalendarContainer className={className}>
//           <Div className="react-datepicker__toper">
//             <Paragraph className="react-datepicker__headYear" value={date.getFullYear()} />
//             <Paragraph
//               className="react-datepicker__headDate"
//               value={moment(date).format("ddd, MMM DD")}
//             />
//           </Div>
//           <Div style={{ position: "relative" }}>{children}</Div>
//           <Div style={{ textAlign: "center" }}>
//             <Button className={style.ButtonCancel} onClick={props.closeClick} label={props.labelCancel} />
//             <Button className={style.ButtonDone} onClick={props.doneClick} label={props.labelDone} />
//           </Div>
//         </CalendarContainer>
//       </Div>
//     );
//   };

//   const handleValue = (value) => {
//     if (value === undefined || value === null) {
//       return "dd/mm/yyyy";
//     }
//     return moment(value).format("DD/MM/yyyy");
//   };
//   const handleChange = async (date) => {
//     await setDate(date);
//   };
//     props.onChange(target);
//   return (
//     <Div>
//       <Input
//         id={props.id}
//         onClick={openClick}
//         className={props.className}
//         name={props.name}
//         size={props.size}
//         placeholder={props.placeholder}
//         onChange={props.onChange}
//         defaultValue={props.defaultValue}
//         value={handleValue(value)}
//         type="text"
//       />
//       <DatePicker
//         selected={date}
//         onChange={(date) => handleChange(date)}
//         calendarContainer={CalenderBox}
//         open={open}
//         shouldCloseOnSelect={false}
//       />
//     </Div>
//   );
// };

// export default Calender;
"use strict";