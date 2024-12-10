// import './DatePicker.css';

// import React, { useState } from 'react';

// import moment from 'moment';
// import {
//   Div,
//   Input,
//   Label,
//   Paragraph,
// } from 'nexcomponent-ui';
// import { Calendar } from 'react-calendar';

// import useComponentVisible from '../../Multi/useComponentVisible';
// import ActionDatePicker from '../ActionDatePicker/ActionDatePicker';
// import style from './DateRange.module.css';

// export const dateNow = new Date();
// const DatePicker = props => {
//   const {
//     ref: componentRef,
//     isComponentVisible: menuOpen,
//     setIsComponentVisible: setMenuOpen,
//   } = useComponentVisible({
//     initialIsVisible: false,
//     onClickOutside: props.onMenuClose,
//   });
//   const nonClickableItem = target => {
//     if (
//       target.hasAttribute("clickable") ||
//       target.parentNode.hasAttribute("clickable") ||
//       target.parentNode.parentNode.hasAttribute("clickable") ||
//       target.parentNode.parentNode.parentNode.hasAttribute("clickable")
//     ) {
//       return false;
//     }
//     return true;
//   };

//   const checkIsDropdownHandle = target => {
//     if (
//       target.hasAttribute("dropdown-handle") ||
//       target.parentNode.hasAttribute("dropdown-handle") ||
//       target.parentNode.parentNode.hasAttribute("dropdown-handle")
//     ) {
//       return true;
//     }
//   };
//   const openMenu = ({target}) => {
//     if (nonClickableItem(target)) {
//       if (checkIsDropdownHandle(target)) {
//         if (!menuOpen) {
//           setMenuOpen(true);
//         } else {
//           setMenuOpen(false);
//           props.onMenuClose();
//         }
//       } else if (target.id === "btndone" || target.id === "btncancel") {
//         setMenuOpen(false);
//       } else {
//         setMenuOpen(true);
//       }
//     }
//   };
//   const getActiveClass = () => {
//     const el = componentRef.current;
//     var rect = el.getBoundingClientRect();
//     let position = style.SlcOptionDown;
//     if (rect.top > 400) {
//       position = style.SlcOptionUp;
//     }
//     return position;
//   };
//   const handleVisibility = menuOpen => {
//     let display = "none";
//     if (menuOpen) {
//       display = "block";
//     }
//     return display;
//   };
//   const [date, setDate] = useState(new Date());
//   const [inputDate, setInputDate] = useState(props.value);

//   const doneClick = async evt => {
//     evt.preventDefault();
//     setInputDate(moment(date).format(props.format));
//     const e = {
//       target: {name: props.name, value: date, type: "date", validity: true},
//     };
//     // handleVisibility();
//     props.onChange(e);
//   };
//   // const onChange = e => {
//   //   props.onChange(e);
//   //   setInputDate(e.target.value);
//   // };
//   const clickClose = async evt => {
//     evt.preventDefault();
//   };
 
//   const keyDown = e => {
//     !["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Backspace", "Delete"].includes(
//       e.key
//     ) && e.preventDefault();
//   };
//   return (
//     <>
//       <Div
//         id={props.id}
//         ref={componentRef}
//         onClick={openMenu}
//         tabIndex="0"
//         className={style.SlcContainer}
//       >
//         <Div className={style.Field}>
//           {props.label !== undefined ? (
//             <Label id={props.id} className={style.Label} value={props.label} />
//           ) : (
//             <></>
//           )}

//           <Div className={style.Input}>
//             <Input
//               id={props.id}
//               type={"date"}
//               name={props.name}
//               className={props.classInput}
//               onKeyDown={keyDown}
//               maxLength={10}
//               // value={inputDate}

//               onKeyUp={props.onKeyUp}
//               // onChange={e => {
//               //   setInputDate( e.target.value.length > 3 && !e.target.value.includes("/")
//               //     ? `${e.target.value.substring(0, 2)}/${e.target.value.substring(3)}/`
//               //     : e.target.value)
//               // }}
//               placeholder={props.placeholder}
//               disabled={props.disabled}
//               pattern={props.pattern}
//               title={props.message}
//               required={props.required}
//             />
//             <svg
//               width="12"
//               height="12"
//               viewBox="0 0 12 12"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M0.959625 12C0.70515 12 0.461092 11.8989 0.281151 11.719C0.10121 11.539 0.00012207 11.295 0.00012207 11.0405V1.205C0.00012207 0.885416 0.127077 0.578917 0.353058 0.352936C0.579039 0.126955 0.885538 1.03806e-07 1.20512 1.03806e-07H10.7951C10.9534 -6.56057e-05 11.1101 0.031065 11.2563 0.0915986C11.4026 0.152132 11.5354 0.240876 11.6473 0.352783C11.7592 0.464691 11.848 0.597563 11.9085 0.74379C11.9691 0.890017 12.0002 1.04674 12.0001 1.205V11.0405C12.0001 11.295 11.899 11.539 11.7191 11.719C11.5392 11.8989 11.2951 12 11.0406 12H0.959625ZM1.00012 11H11.0001V3.89549H1.00012V11ZM1.00012 1.205V2.88901H11.0001V1.205C11 1.15067 10.9783 1.09861 10.9399 1.0602C10.9015 1.02178 10.8494 1.00013 10.7951 1H1.20512C1.1508 1.00013 1.09873 1.02178 1.06031 1.0602C1.02189 1.09861 1.00025 1.15067 1.00012 1.205ZM6.69612 9.129C6.41435 8.74503 6.27632 8.27433 6.30612 7.799V7.0195C6.27548 6.54338 6.41298 6.0716 6.69463 5.68649C6.82908 5.52923 6.99802 5.40515 7.1883 5.32388C7.37858 5.24262 7.58504 5.20639 7.79162 5.218C7.99893 5.20628 8.20615 5.24275 8.397 5.32455C8.58786 5.40636 8.75716 5.53127 8.89162 5.6895C9.17392 6.07435 9.31197 6.54619 9.28162 7.02251V7.8C9.31217 8.27627 9.17469 8.74816 8.89312 9.1335C8.75908 9.29046 8.59064 9.41439 8.40089 9.49565C8.21115 9.57691 8.00523 9.61331 7.79913 9.60201C7.59125 9.61355 7.38351 9.57687 7.19217 9.49481C7.00082 9.41276 6.83105 9.28755 6.69612 9.129ZM7.42112 6.19051C7.33146 6.39106 7.28888 6.60945 7.29662 6.82899V7.91901C7.28118 8.15852 7.32228 8.39831 7.41662 8.619C7.45176 8.68893 7.50651 8.7471 7.57417 8.78644C7.64182 8.82577 7.71947 8.84456 7.79762 8.8405C7.87358 8.84367 7.94886 8.82513 8.01466 8.78705C8.08045 8.74897 8.13403 8.69294 8.16912 8.6255C8.26323 8.41313 8.30556 8.18143 8.29263 7.94949V6.895C8.3063 6.65981 8.26522 6.42463 8.17262 6.20799C8.13859 6.13679 8.08426 6.07726 8.01646 6.03687C7.94867 5.99647 7.87043 5.97704 7.79162 5.981C7.71624 5.97647 7.64115 5.99383 7.57542 6.03101C7.50968 6.06818 7.45609 6.12357 7.42112 6.19051ZM3.44862 9.44051C3.22826 9.35001 3.03929 9.19684 2.90512 9C2.78109 8.80874 2.7167 8.58493 2.72012 8.35699H3.71362C3.71374 8.42173 3.72792 8.48568 3.7552 8.54439C3.78249 8.6031 3.82221 8.65518 3.87162 8.69701C3.97835 8.79279 4.11777 8.84396 4.26112 8.84C4.41354 8.84774 4.56296 8.79573 4.67762 8.69501C4.72855 8.64787 4.76878 8.59037 4.7956 8.52637C4.82242 8.46237 4.83522 8.39337 4.83312 8.32401C4.84172 8.24067 4.83173 8.15646 4.80389 8.07744C4.77606 7.99842 4.73105 7.92655 4.67212 7.867C4.54422 7.77086 4.38636 7.72319 4.22662 7.7325H3.74612V6.99699H4.21212C4.28642 7.00844 4.36237 7.00244 4.43394 6.97943C4.50551 6.95642 4.57074 6.91705 4.62445 6.86446C4.67816 6.81186 4.71889 6.74748 4.74339 6.67641C4.7679 6.60533 4.77551 6.52953 4.76562 6.455C4.76804 6.39171 4.75759 6.3286 4.7349 6.26947C4.71221 6.21034 4.67775 6.15642 4.63362 6.11099C4.58394 6.06463 4.52533 6.02889 4.46137 6.00594C4.39741 5.98298 4.32944 5.9733 4.26162 5.97749C4.13806 5.97513 4.01752 6.01579 3.92062 6.0925C3.87569 6.12497 3.83911 6.16765 3.8139 6.21703C3.78869 6.2664 3.77557 6.32106 3.77562 6.3765H2.78812C2.78521 6.16164 2.85089 5.95147 2.97562 5.7765C3.10828 5.59457 3.28807 5.45229 3.49562 5.36501C3.72607 5.26373 3.97541 5.21259 4.22712 5.215C4.62629 5.19232 5.0212 5.30701 5.34612 5.53999C5.47958 5.64631 5.58601 5.78268 5.65675 5.93796C5.72748 6.09324 5.7605 6.26303 5.75312 6.4335C5.75222 6.62011 5.69334 6.80183 5.58463 6.95351C5.45936 7.12724 5.29005 7.26445 5.09412 7.351C5.30413 7.42142 5.48924 7.55115 5.62712 7.7245C5.75997 7.9031 5.8282 8.12153 5.82063 8.34399C5.82616 8.52051 5.78911 8.69577 5.71261 8.85495C5.63611 9.01413 5.52241 9.15254 5.38112 9.2585C5.04622 9.49982 4.63944 9.62055 4.22712 9.601C3.95971 9.60332 3.69486 9.54878 3.45012 9.44099L3.44862 9.44051Z"
//                 fill="#666666"
//               />
//             </svg>
//           </Div>
//         </Div>
//         <Div
//           id={"ddl" + props.id}
//           style={{
//             display: handleVisibility(menuOpen),
//             // width: menuOpen && getWidth(),
//           }}
//           display={""}
//           className={`${style.SlcOption} ${menuOpen && getActiveClass()}`}
//         >
//           <Div className={`react-calendar-container ${props.classCalender}`}>
//             <Div className="react-datepicker__toper">
//               <Paragraph
//                 className="react-datepicker__headYear"
//                 value={date === undefined || date === null ? "" : date.getFullYear().toString()}
//               />
//               <Paragraph
//                 className="react-datepicker__headDate"
//                 value={
//                   date === undefined || date === null
//                     ? ""
//                     : moment(date).format(props.formatSelectDate).toString()
//                 }
//               />
//             </Div>
//             <Calendar
//               onChange={setDate}
//               value={date}
//               tileClassName="single"
//               formatMonth={(locale, date) => moment(new Date(date)).format(props.formatMonth)}
//               formatShortWeekday={(locale, date) =>
//                 moment(new Date(date))
//                   .format(props.formatDay.format)
//                   .substr(0, props.formatDay.maxLength)
//               }
//             />
//             <Div>
//               <ActionDatePicker
//                 className="actionBox"
//                 closeClick={clickClose}
//                 labelCancel={props.labelCancel}
//                 doneClick={doneClick}
//                 labelDone={props.labelDone}
//               />
//             </Div>
//           </Div>
//         </Div>
//       </Div>
//     </>
//   );
// };

// export default DatePicker;
// DatePicker.defaultProps = {
//   value: null,
//   labelCancel: "Cancel",
//   labelDone: "Done",
//   format: "DD MMM YYYY",
//   formatMonth: "MMM",
//   formatSelectDate: "ddd, MMM DD",
//   formatDay: {format: "dd", maxLength: 1},
// };
