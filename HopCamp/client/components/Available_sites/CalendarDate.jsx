/* eslint-disable react/prop-types */
import styles from "./Available_sites.module.css";
function CalendarDate(props) {
  const selectedDate = props.target;
  const currentSlotDate = new Date(`${props.month} ${props.date} ${props.year}`) 
  const handleClick = () => {
    props.handleDateSelect(currentSlotDate);
  };
  return (
    <>
      {!props.date ? <td></td> : props.currentDate > currentSlotDate ? <td className="text-secondary border">{props.date}</td> :(
        <td
          role="button"
          className={`border ${styles.calenderSlot} ${
            selectedDate[0] && selectedDate[0].getDate() === currentSlotDate.getDate() && selectedDate[0].getMonth() === currentSlotDate.getMonth() && selectedDate[0].getFullYear() === currentSlotDate.getFullYear()
              ? "bg-success text-white"
              : selectedDate[1] != 0 &&
                selectedDate[1] >=
                currentSlotDate &&
                selectedDate[0] <=
                currentSlotDate
              ? "bg-success text-white"
              : null
          }`}
          onClick={handleClick}
        >
          {props.date}
        </td>
      ) }
    </>
  );
}
export default CalendarDate;
