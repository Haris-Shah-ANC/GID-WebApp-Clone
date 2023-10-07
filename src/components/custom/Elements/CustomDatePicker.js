import { forwardRef, useState } from "react";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { IconButton } from "@mui/material";
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { twMerge } from 'tailwind-merge'
import { formatDate } from "../../../utils/Utils";

export default function CustomDatePicker(props) {
    const { id = "", dataTestId = "", validation, disabledCloseIcon, disabledDatePicker, placeholder,className,startDate,onChange,value,endDate } = props

    const tailwindMergedCSS = twMerge(`rounded-md border border-blueGray-300 text-sm font-quicksand font-medium text-blueGray-700 placeholder-blueGray-200`, className)

    // const [value, setValue] = useState(null)
    // const handleValueChange = (value) => {
    //     setValue(value)
    // }


    return (

        <div  className={tailwindMergedCSS} >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    slotProps={{ textField: { size: 'small', className: 'bg-white rounded-lg focus:outline-none' } }}
                    // slots={{ field: SignIn }}
                    // disableFuture
                    format="DD-MM-YYYY"
                    minDate={startDate}
                    maxDate={endDate}
                    // maxDate={endDate}
                    value={value}
                    onChange={onChange}
                    />
            </LocalizationProvider>
           
        </div>

    )
}