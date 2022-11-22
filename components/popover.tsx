import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import styles from "./popover.module.css";

const PopoverComponent = () => (
  <Popover.Root>
    <Popover.Trigger className={styles.trigger}>More info</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className={styles.content}>
        Some extra info...
        <Popover.Arrow className={styles.arrow} />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverComponent;
