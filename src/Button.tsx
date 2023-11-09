import React from "react";
import { Button, MantineProvider } from "@mantine/core";

export default function Button1() {
  return (
    <MantineProvider>
      <div>
        <Button variant="filled" size="xl" radius="lg">
          Button
        </Button>
      </div>
    </MantineProvider>
  );
}
