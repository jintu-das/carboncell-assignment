import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { NAV_LINKS } from "@/data/constants";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { Bell, Flame, HelpCircle, Menu, Search, Settings } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

export default function Sidebar() {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold text-primary"
          >
            <Flame className="h-6 w-6" />
            <span className="">Carbon Cell</span>
          </Link>
          <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
            <Menu className="h-4 w-4" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <div className="relative mb-4">
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
        </div>
        <div className="mt-auto p-4 mb-4">
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
      </div>
    </div>
  );
}
