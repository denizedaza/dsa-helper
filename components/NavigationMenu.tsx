import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

function NavMenu() {
  return (
    <NavigationMenu.Root className="relative">
      <NavigationMenu.List className="flex felx-row rounded-lg bg-white dark:bg-gray-800 p-2 space-x-2">
        <NavigationMenu.Item>
          <NavigationMenu.Link>Home</NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="http://stitches.dev">
            Stitches
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Item Test</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            Filler content for testing purposes in navigation
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  );
}

export default NavMenu;
