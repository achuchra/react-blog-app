const size = {
  mobile: "500px",
  tabletS: "800px",
  tabletL: "1000px",
  desktop: "1200px"
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tabletS: `(min-width: ${size.tabletS})`,
  tabletL: `(min-width: ${size.tabletL})`,
  desktop: `(min-width: ${size.desktop})`
};
