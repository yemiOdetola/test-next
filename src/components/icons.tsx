import {
  CircuitBoard,
  HelpCircle,
  LayoutDashboard,
  LibraryBig,
  Power,
  Settings,
  UserX2,
} from "lucide-react";

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  dashboard: LayoutDashboard,
  logout: Power,
  merchants: LibraryBig,
  support: HelpCircle,
  settings: Settings,
  inventory: CircuitBoard,
  merchant: UserX2,
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  HomeBlue: (props: IconProps) => (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.12602 13.0002C6.57006 14.7255 8.13616 16.0002 10 16.0002C11.8638 16.0002 13.4299 14.7255 13.874 13.0002M9.0177 1.76424L2.23539 7.03937C1.78202 7.39199 1.55534 7.5683 1.39203 7.7891C1.24737 7.98469 1.1396 8.20503 1.07403 8.4393C1 8.70376 1 8.99094 1 9.5653V16.8002C1 17.9203 1 18.4804 1.21799 18.9082C1.40973 19.2845 1.71569 19.5905 2.09202 19.7822C2.51984 20.0002 3.07989 20.0002 4.2 20.0002H15.8C16.9201 20.0002 17.4802 20.0002 17.908 19.7822C18.2843 19.5905 18.5903 19.2845 18.782 18.9082C19 18.4804 19 17.9203 19 16.8002V9.5653C19 8.99094 19 8.70376 18.926 8.4393C18.8604 8.20503 18.7526 7.98469 18.608 7.7891C18.4447 7.5683 18.218 7.39199 17.7646 7.03937L10.9823 1.76424C10.631 1.49099 10.4553 1.35436 10.2613 1.30184C10.0902 1.2555 9.9098 1.2555 9.73865 1.30184C9.54468 1.35436 9.36902 1.49099 9.0177 1.76424Z"
        stroke="#449EDD"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props}
      />
    </svg>
  ),
};
