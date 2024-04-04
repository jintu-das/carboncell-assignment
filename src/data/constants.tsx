import {
  Box,
  Building2,
  CandlestickChart,
  History,
  Home,
  Wallet,
} from "lucide-react";

export const NAV_LINKS = [
  {
    link: "/",
    label: "Home",
    icon: <Home className="h-4 w-4" />,
  },
  {
    link: "/organization",
    label: "Organization",
    icon: <Building2 className="h-4 w-4" />,
  },
  {
    link: "/assets",
    label: "Assets",
    icon: <Box className="h-4 w-4" />,
  },
  {
    link: "/trade",
    label: "Trade",
    icon: <CandlestickChart className="h-4 w-4" />,
  },
  {
    link: "/history",
    label: "History",
    icon: <History className="h-4 w-4" />,
  },
  {
    link: "/wallet",
    label: "Wallet",
    icon: <Wallet className="h-4 w-4" />,
  },
];
