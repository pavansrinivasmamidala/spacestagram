import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import { useState } from "react";
import { waitForNone } from "recoil";

function NavBar() {
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });

  const customDatePicker = ({ ref }) => {
      <input 
      readOnly
      ref={ref}
      style={{
        textAlign: 'center',
        padding: '1rem 1.5rem',
        fontSize: '1.5rem',
        border: '1px solid #9c88ff',
        borderRadius: '100px',
        boxShadow: '0 1.5rem 2rem rgba(156, 136, 255, 0.2)',
        color: '#9c88ff',
        outline: 'none',
      }}
      className="my-custom-input-class"
      />
  }

  return (
    <div className="flex  justify-between items-center lg:h-1/6 md:h-2/6 sm:h-3/12 shadow-xl rounded-2xl m-5 z-2 sticky bg-slate-100">
        <div className="text-3xl font-bold  p-10 ">Spacestagram</div>
      
      <div className="pr-10 flex justify-center items-center" >
          <div className="font-semibold text-xl p-4 flex"> 
          <img
            className="pr-2 object-fill h-7"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAaklEQVRIiWNgGEDwH4opUsdENecQaYEfAwPDUwZUF/0ngJHVPYWagRPADKcEP8FnAbHhTrR+mscBCx6XUAUMmA8YyTQPw+d0zwejFoxaMGoBpLhmYCC/qEY2AyvwY4CU55TUBXgrnFGAAQBwMkhDjJtDDgAAAABJRU5ErkJggg=="
            alt=""
          />
          Date Picker:
          </div>  
        <DatePicker
          value={selectedDayRange}
          onChange={setSelectedDayRange}
          renderInput={customDatePicker}
          shouldHighlightWeekends
        />
      </div>
    </div>
  );
}


export default NavBar;
