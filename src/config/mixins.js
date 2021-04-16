import device from "./breakpoints";

export const noSelect = () => {
  return `-webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none;`;
};

export const pageSizing = () => {
  return `
  max-width: 1000px;
  margin: 200px auto;
  padding: 0 5%;
  @media ${device.tablet} {
    margin: 10rem auto;
  }
  `;
};
