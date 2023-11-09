/* import React from "react";
import dayjs from "dayjs";
import { useState } from "react";
import { Calendar, MantineProvider } from "@mantine/core";

function Calendar1() {
  const [selected, setSelected] = useState<Date[]>([]);
  const handleSelect = (date: Date) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, "date"));
    if (isSelected) {
      setSelected((current) =>
        current.filter((d) => !dayjs(d).isSame(date, "date"))
      );
    } else if (selected.length < 3) {
      setSelected((current) => [...current, date]);
    }
  };

  return (
    <MantineProvider>
      <div>
        <Calendar
          getDayProps={(date) => ({
            selected: selected.some((s) => dayjs(date).isSame(s, "date")),
            onClick: () => handleSelect(date)
          })}
        />
      </div>
    </MantineProvider>
  );
}
 */
/* import { Calendar } from "@mantine/dates";

function Calendar1() {
  return <Calendar />;
} */
import { DatePicker } from "@mantine/dates";
function Calendar1() {
  return <DatePicker defaultValue={new Date()} size="xl" />;
}
