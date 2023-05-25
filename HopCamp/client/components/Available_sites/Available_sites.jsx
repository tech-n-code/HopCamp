import React, { useState, useEffect, useRef } from "react";
import styles from "./Available_sites.module.css";
import Calendar from "./Calendar";
function Available_sites(props) {
  const maxGuestCount = 2;
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendar, setCalendar] = useState([]);
  const [calendarNext, setCalendarNext] = useState([]);
  const [dateSelected, setDateSelected] = useState([]);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [petCount, setPetCount] = useState(0);

  const handleDateSelect = (value) => {
    if (!dateSelected[0])
      setDateSelected([value]); //if dataSelected container is empty, set value
    else if (value <= new Date(dateSelected[0]))
      setDateSelected([
        value,
      ]); //if value Date is smaller than the previous date, overwrite the value to the previous Date
    else setDateSelected([dateSelected[0], value]);
  };
  const addGuest = (event) => {
    let buttonRef = event.target;
    console.log(buttonRef.id);
    switch (buttonRef.id) {
      case "addAdult":
        if (adultCount + childCount != maxGuestCount)
          setAdultCount(adultCount + 1);
        break;
      case "removeAdult":
        if (adultCount != 1) setAdultCount(adultCount - 1);
        break;
      case "addChild":
        if (adultCount + childCount != maxGuestCount)
          setChildCount(childCount + 1);
        break;
      case "removeChild":
        if (childCount != 0) setChildCount(adultCount - 1);
        break;
      case "addPets":
        setPetCount(petCount + 1);
        break;
      case "removePets":
        if (petCount != 0) setPetCount(petCount - 1);
        break;
    }
  };

  useEffect(() => {
    const now = new Date();
    const datesInMonth = new Date(
      now.getFullYear(),
      now.getMonth() + 1,
      0
    ).getDate();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).getDay();

    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1);
    const datesInNextMonth = new Date(
      now.getFullYear(),
      now.getMonth() + 2,
      0
    ).getDate();
    const firstDayNext = new Date(
      now.getFullYear(),
      now.getMonth() + 1,
      1
    ).getDay();

    let arr = [];
    for (
      let i = 0;
      i < firstDay;
      i++ //fill empty slot
    ) {
      arr.push(null);
    }
    //speicify the length of the array, and mapping, underscore makes it so that we ignore value, and set index.
    arr = arr.concat(
      Array.from({ length: datesInMonth }, (_, index) => index + 1)
    );
    setCalendar([
      now.getFullYear(),
      now.toLocaleString("default", { month: "long" }),
      arr,
    ]);

    let arrNext = [];
    for (
      let i = 0;
      i < firstDayNext;
      i++ //fill empty slot
    ) {
      arrNext.push(null);
    }
    //speicify the length of the array, and mapping, underscore makes it so that we ignore value, and set index.
    arrNext = arrNext.concat(
      Array.from({ length: datesInNextMonth }, (_, index) => index + 1)
    );
    setCalendarNext([
      nextMonth.getFullYear(),
      nextMonth.toLocaleString("default", { month: "long" }),
      arrNext,
    ]);
  }, []);

  return (
    <div className={styles.availableSite}>
      <h2 className="fw-bold mb-5">Available sites</h2>

      <div id="availableSites" className="row g-3 ">
        <div className="col-md m-0">
          <div
            className="input-group border rounded-3 mb-3"
            role="button"
            id="dateInput"
          >
            <div className="input-group-prepend d-flex">
              <span className="input-group-text bg-white border-0">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path>
                </svg>
              </span>
            </div>
            <div
              className="form-floating"
              data-bs-toggle="collapse"
              data-bs-target="#categoryList"
              aria-expanded="false"
              aria-controls="categoryList"
            >
              <input
                type="text"
                role="button"
                readOnly
                className="form-control border-0 fw-semibold"
                id="floatingInputGroup1"
                placeholder="Add Date"
                value={dateSelected
                  .map((element) => {
                    return element.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  })
                  .join(" - ")}
              ></input>
              <label
                htmlFor="floatingInputGroup1"
                readOnly
                className="fw-semibold"
              >
                Add Date
              </label>
            </div>
          </div>
        </div>
        <div className="col-md m-0">
          <div className="input-group border rounded-3 mb-3">
            <div className="input-group-prepend d-flex">
              <span className="input-group-text bg-white border-0">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path>
                </svg>
              </span>
            </div>
            <div className="form-floating dropdown">
              <input
                role="button"
                type="text"
                readOnly
                className="form-control border-0 fw-semibold dropdown-toggle"
                id="floatingInputGroup1"
                placeholder="Username"
                value={
                  adultCount +
                  childCount +
                  " guest" +
                  (petCount > 0 ? `, ${petCount} pet` : "")
                }
                data-bs-toggle="dropdown"
              ></input>
              <label
                htmlFor="floatingInputGroup1"
                className="fw-semibold"
                readOnly
              >
                Add guests
              </label>

              <ul
                className="dropdown-menu p-4 mt-3 mb-3"
                style={{ width: "100%" }}
              >
                <li>
                  <div>
                    <div className="">
                      <p className="text-secondary m-0">ADULTS</p>
                      <div className="d-flex justify-content-between">
                        <p>Ages 13 or above</p>
                        <div className="d-flex align-items-center gap-2">
                          <button
                            className="btn btn-outline-dark rounded-circle "
                            style={{ width: "40px", height: "40px" }}
                            onClick={addGuest}
                            id="removeAdult"
                          >
                            -
                          </button>
                          <p className="mb-0">{adultCount}</p>
                          <button
                            className="btn btn-outline-dark rounded-circle "
                            style={{ width: "40px", height: "40px" }}
                            onClick={addGuest}
                            id="addAdult"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <div className="">
                    <p className="text-secondary m-0">CHILDREN</p>
                    <div className="d-flex justify-content-between">
                      <p>Ages 12 or below</p>
                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="btn btn-outline-dark rounded-circle "
                          style={{ width: "40px", height: "40px" }}
                          onClick={addGuest}
                          id="removeChild"
                        >
                          -
                        </button>
                        <p className="mb-0">{childCount}</p>
                        <button
                          className="btn btn-outline-dark rounded-circle "
                          style={{ width: "40px", height: "40px" }}
                          onClick={addGuest}
                          id="addChild"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <div className="">
                    <p
                      className="text-secondary m-0"
                      style={{ visibility: "hidden" }}
                    >
                      PETS
                    </p>
                    <div className="d-flex justify-content-between">
                      <p>Any pets?</p>
                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="btn btn-outline-dark rounded-circle "
                          style={{ width: "40px", height: "40px" }}
                          onClick={addGuest}
                          id="removePets"
                        >
                          -
                        </button>
                        <p className="mb-0">{petCount}</p>
                        <button
                          className="btn btn-outline-dark rounded-circle "
                          style={{ width: "40px", height: "40px" }}
                          onClick={addGuest}
                          id="addPets"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <p className="m-0">
                  This site has a maximum of {maxGuestCount} guests.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Calendar
        calendar={calendar}
        calendarNext={calendarNext}
        handleDateSelect={handleDateSelect}
        dateSelected={dateSelected}
        currentDate={currentDate}
        handleClear={() => setDateSelected([])}
        popupCalenderEl={props.popupCalenderEl}
      />

      <div id="filterElement">
        <p className="fw-semibold mb-3">Filter by</p>
        <ol className="d-flex gap-3 p-0">
          <li className="fw-semibold text-center p-1 ps-3 pe-3 border rounded-5">
            Tent sites
          </li>
          <li className="fw-semibold text-center p-1 ps-3 pe-3 border rounded-5">
            Tent sites
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Available_sites;
