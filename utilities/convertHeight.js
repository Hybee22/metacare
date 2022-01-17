const convertHeight = (totalHeightInCM) => {
  const heightInInches = totalHeightInCM / 2.54;
  const feet = Math.floor(heightInInches / 12);
  const inch = heightInInches - 12 * feet;
  const ft_inches = `${feet}ft and ${+(
    Math.round(inch + "e+2") + "e-2"
  )} inches`;

  return { ft_inches };
};

export default convertHeight;
