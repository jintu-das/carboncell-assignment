import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/data/constants";
import useDarkMode from "@/hooks/useDarkMode";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import {
  Bell,
  CircleUser,
  HelpCircle,
  Menu,
  Moon,
  Search,
  Settings,
  Sun,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

export default function Header() {
  const { toggleDarkMode, isDarkMode } = useDarkMode();

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <div className="relative my-4">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search"
                className="w-full appearance-none bg-background pl-10 shadow-none text-foreground"
              />
            </div>

            {NAV_LINKS?.map((nav) => (
              <NavLink
                key={nav.label}
                to={nav.link}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                    : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground dark:text-white transition-all hover:text-primary"
                }
              >
                {nav.icon}
                {nav.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-auto">
            <Link
              to="#"
              className="text-sm flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground dark:text-white transition-all hover:text-primary font-medium"
            >
              <Bell className="h-4 w-4" />
              Notifications
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge>
            </Link>

            <Link
              to="#"
              className="text-sm flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground dark:text-white transition-all hover:text-primary font-medium"
            >
              <HelpCircle className="h-4 w-4" />
              Support
            </Link>

            <Link
              to="#"
              className="text-sm flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground dark:text-white transition-all hover:text-primary font-medium"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>

            <Card className="mt-2">
              <CardHeader className="p-3">
                <div className="flex justify-between items-center">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="font-medium text-sm">Brooklyn Simmons</p>
                    <p className="text-muted-foreground text-xs">
                      brookly@gmail.com
                    </p>
                  </div>

                  <Button size="icon" variant="ghost">
                    <DotsVerticalIcon className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </div>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <Button size="icon" variant="ghost" onClick={toggleDarkMode}>
        {isDarkMode ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
