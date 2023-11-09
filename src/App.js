import React from "react";
import { Button } from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import { DatePicker } from "@mantine/dates";
import "@mantine/core/styles/global.css";
import "@mantine/core/styles/UnstyledButton.css";
import "@mantine/core/styles/Button.css";

export default function Button1() {
  return (
    <MantineProvider>
      <div>
        <Button variant="filled" size="xl" radius="lg">
          Button
        </Button>
        <DatePicker defaultValue={new Date()} size="xl" />
        {/* <Calendar /> */}
      </div>
    </MantineProvider>
  );
}

/* import React from "react";
import { Button, MantineProvider } from "@mantine/core";
import Button1 from "./Button";
import { Calendar1 } from "./Calendar";
import "@mantine/core/styles/global.css";
import "@mantine/core/styles/UnstyledButton.css";
import "@mantine/core/styles/Button.css";

export default function App() {
  return (
    <MantineProvider>
      <div>
        <Button variant="filled" size="xl" radius="lg">
          Button
        </Button>
        <Calendar1 />
      </div>
    </MantineProvider>
  );
} */
