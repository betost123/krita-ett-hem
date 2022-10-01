import * as React from "react";

interface HeartIconProps {
  color?: string;
}

export const HeartIcon: React.FunctionComponent<HeartIconProps> = ({
  color = "black",
}) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clip-path='url(#clip0_10_32)'>
      <path
        d='M22.0615 3.40899C20.8048 2.15226 19.141 1.46539 17.3653 1.46539C15.5896 1.46539 13.9207 2.15735 12.664 3.41408L12.0077 4.07043L11.3411 3.4039C10.0844 2.14717 8.41047 1.45012 6.63477 1.45012C4.86416 1.45012 3.1953 2.14209 1.94366 3.39373C0.686934 4.65045 -0.00502959 6.31931 5.83779e-05 8.09501C5.83779e-05 9.87071 0.69711 11.5345 1.95384 12.7912L11.509 22.3464C11.6413 22.4787 11.8194 22.5499 11.9924 22.5499C12.1654 22.5499 12.3435 22.4838 12.4758 22.3515L22.0513 12.8116C23.308 11.5548 24 9.88597 24 8.11027C24.0051 6.33457 23.3182 4.66572 22.0615 3.40899ZM21.0846 11.8398L11.9924 20.8963L2.92055 11.8245C1.92331 10.8272 1.37381 9.50438 1.37381 8.09501C1.37381 6.68564 1.91822 5.36277 2.91546 4.37062C3.90762 3.37846 5.23049 2.82896 6.63477 2.82896C8.04414 2.82896 9.3721 3.37846 10.3693 4.3757L11.5192 5.52558C11.7889 5.79525 12.2214 5.79525 12.491 5.52558L13.6307 4.38588C14.628 3.38864 15.9559 2.83914 17.3602 2.83914C18.7645 2.83914 20.0874 3.38864 21.0846 4.38079C22.0818 5.37803 22.6263 6.70091 22.6263 8.11027C22.6313 9.51964 22.0818 10.8425 21.0846 11.8398Z'
        fill={color}
      />
    </g>
    <defs>
      <clipPath id='clip0_10_32'>
        <rect width='24' height='24' fill='white' />
      </clipPath>
    </defs>
  </svg>
);