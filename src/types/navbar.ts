
/**
 * Props for the login button component.
 */
export interface NavbarAction {
  icon: React.ReactNode;
  onPress: () => void;
}

/**
 * Props for the Navbar component.
 */
export interface NavbarProps {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  rightActions?: NavbarAction[];
}