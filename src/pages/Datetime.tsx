// // Import necessary libraries and components
// import React, { useState } from "react";
// import dayjs, { Dayjs } from "dayjs";
// import {
//   DateTimePicker,
//   DesktopDateTimePicker,
//   MobileDateTimePicker,
//   StaticDateTimePicker,
// } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import "tailwindcss/tailwind.css";

// const App: React.FC = () => {
//   // State for controlled DateTimePicker
//   const [controlledValue, setControlledValue] = useState<Dayjs | null>(
//     dayjs("2025-01-20T15:30")
//   );

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <div className="p-8 bg-gray-900 text-white min-h-screen flex flex-col items-center">
        

//         {/* Controlled DateTimePicker */}
//         <div className="mb-6 w-full max-w-sm">
          
//           <DateTimePicker
//             label="Select Date & Time"
//             value={controlledValue}
//             onChange={(newValue) => setControlledValue(newValue)}
//             className="w-full"
//             sx={{
//               "& .MuiInputBase-root": {
//                 backgroundColor: "#1E293B",
//                 color: "#F1F5F9",
//                 borderRadius: "4px",
//                 border: "1px solid #3B82F6",
//               },
//               "& .MuiInputLabel-root": {
//                 color: "#9CA3AF",
//               },
//               "& .MuiSvgIcon-root": {
//                 color: "#3B82F6",
//               },
//               "& .MuiPickersDay-root": {
//                 color: "#F1F5F9",
//                 "&.Mui-selected": {
//                   backgroundColor: "#3B82F6",
//                 },
//               },
//               "& .MuiButton-root": {
//                 color: "#3B82F6",
//               },
//             }}
//           />
//         </div>

//         {/* Static DateTimePicker (commented out) */}
//         {/* <div className="mb-6 w-full max-w-sm">
//           <label className="block text-gray-400 font-medium mb-2">
//             Static Picker (Landscape)
//           </label>
//           <StaticDateTimePicker
//             defaultValue={dayjs("2025-01-20T15:30")}
//             orientation="landscape"
//             className="w-full"
//             sx={{
//               "& .MuiPickersStaticWrapper-root": {
//                 backgroundColor: "#1E293B",
//                 borderRadius: "8px",
//                 padding: "16px",
//               },
//               "& .MuiTypography-root": {
//                 color: "#F1F5F9",
//               },
//               "& .MuiPickersDay-root": {
//                 color: "#F1F5F9",
//                 "&.Mui-selected": {
//                   backgroundColor: "#3B82F6",
//                 },
//               },
//               "& .MuiButton-root": {
//                 color: "#3B82F6",
//               },
//             }}
//           />
//         </div> */}
//       </div>
//     </LocalizationProvider>
//   );
// };

// export default App;


// import React, { useState } from "react";
// import dayjs, { Dayjs } from "dayjs";
// import { DateTimePicker } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import "tailwindcss/tailwind.css";

// const App: React.FC = () => {
//   const [controlledValue, setControlledValue] = useState<Dayjs | null>(dayjs("2025-01-20T15:30"));

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <div className="p-8 text-white flex flex-col items-center">
//         <div className="mb-6 w-full max-w-sm">
//           {/* <DateTimePicker
//             label={controlledValue ? "" : "Select Date & Time"} // Hide label after selection
//             value={controlledValue}
//             onChange={setControlledValue}
//             className="w-full"
//             sx={{
//               "& .MuiInputBase-root": {
//                 backgroundColor: "#1E293B", color: "#F1F5F9", borderRadius: "4px", border: "1px solid #3B82F6",
//               },
//               "& .MuiInputLabel-root": { color: "#9CA3AF" },
//               "& .MuiSvgIcon-root": { color: "#3B82F6" },
//               "& .MuiPickersDay-root": {
//                 color: "#F1F5F9", "&.Mui-selected": { backgroundColor: "#3B82F6" },
//               },
//               "& .MuiButton-root": { color: "#3B82F6" },
//             }}
//           /> */}<DateTimePicker
//   label={controlledValue ? "" : "Select Date & Time"} // Show "Select Date & Time" when no date is selected
//   value={controlledValue}
//   onChange={setControlledValue}
//   className="w-full"
//   sx={{
//     "& .MuiInputBase-root": {
//       backgroundColor: "#1E293B", color: "#F1F5F9", borderRadius: "4px", border: "1px solid #3B82F6",
//     },
//     "& .MuiInputLabel-root": { color: "#9CA3AF" },
//     "& .MuiSvgIcon-root": { color: "#3B82F6" },
//     "& .MuiPickersDay-root": {
//       color: "#F1F5F9", "&.Mui-selected": { backgroundColor: "#3B82F6" },
//     },
//     "& .MuiButton-root": { color: "#3B82F6" },
//   }}
// />

//         </div>
//       </div>
//     </LocalizationProvider>
//   );
// };

// export default App;


import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "tailwindcss/tailwind.css";

const App: React.FC = () => {
  const [controlledValue, setControlledValue] = useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="p-8 text-white flex flex-col items-center">
        <div className="mb-6 w-full max-w-sm">
          <DateTimePicker
            label={controlledValue ? "" : "Select Date & Time"} // Show label only when no date is selected
            value={controlledValue}
            onChange={setControlledValue}
            className="w-full"
            sx={{
              "& .MuiInputBase-root": {
                backgroundColor: "#1E293B",
                color: "#F1F5F9",
                borderRadius: "4px",
                border: "1px solid #3B82F6",
              },
              "& .MuiInputLabel-root": { color: "#9CA3AF" },
              "& .MuiSvgIcon-root": { color: "#3B82F6" },
              "& .MuiPickersDay-root": {
                color: "#F1F5F9",
                "&.Mui-selected": { backgroundColor: "#3B82F6" },
              },
              "& .MuiButton-root": { color: "#3B82F6" },
            }}
          />
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default App;
