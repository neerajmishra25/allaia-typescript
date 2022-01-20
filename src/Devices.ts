import { useMediaQuery } from "react-responsive";
interface Props {
  children: JSX.Element;
}
export const Desktop: React.FC<Props> = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
export const Laptop: React.FC<Props> = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 320, maxWidth: 991 });
  return isTablet ? children : null;
};

export const Tablet: React.FC<Props> = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
export const Mobile: React.FC<Props> = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

export const Default: React.FC<Props> = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};
