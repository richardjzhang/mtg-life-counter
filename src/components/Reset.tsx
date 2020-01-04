import React from "react";

import { colors } from "../static/themes";
import { styled } from "../utils/styled";

const Root = styled.div<{ height: number; width: number }>(props => ({
  height: props.height,
  width: props.width
}));

interface Props {
  size: number;
}

const Reset = ({ size }: Props) => (
  <Root height={size} width={size}>
    <svg
      height="100%"
      width="100%"
      fill={colors.white}
      enableBackground="new 0 0 374.846 374.846"
      version="1.1"
      viewBox="0 0 374.85 374.85"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m326.15 267.33c4.168-6.754 12.875-9.094 19.869-5.336l5.83 3.135c3.635 1.955 6.305 5.32 7.379 9.305 1.076 3.984 0.461 8.236-1.695 11.754-8.301 13.519-18.295 25.941-29.709 36.923-2.805 2.692-6.531 4.188-10.397 4.188-0.242 0-0.482-6e-3 -0.726-0.018-4.123-0.199-7.981-2.09-10.668-5.227l-4.309-5.025c-5.164-6.025-4.74-15.031 0.967-20.547 8.99-8.685 16.885-18.494 23.459-29.152z" />
      <path d="m208.81 338.26c12.505-0.903 24.873-3.344 36.77-7.252 7.529-2.475 15.685 1.334 18.617 8.695l2.451 6.153c1.529 3.839 1.408 8.138-0.334 11.884-1.74 3.746-4.953 6.604-8.873 7.907-8.094 2.687-16.451 4.843-24.848 6.407-7.112 1.328-14.377 2.254-21.592 2.754-0.349 0.023-0.693 0.035-1.037 0.035-3.759 0-7.396-1.412-10.175-3.979-3.034-2.802-4.78-6.73-4.823-10.859l-0.071-6.625c-0.085-7.923 6.012-14.548 13.915-15.12z" />
      <path d="m89.693 312.6c5.039-6.135 13.984-7.276 20.404-2.612 10.135 7.36 21.16 13.435 32.773 18.053 7.373 2.933 11.188 11.101 8.701 18.636l-2.072 6.287c-1.293 3.92-4.145 7.135-7.883 8.887-2.012 0.941-4.186 1.416-6.361 1.416-1.867 0-3.738-0.35-5.512-1.049-14.73-5.818-28.695-13.51-41.508-22.863-3.332-2.434-5.516-6.133-6.037-10.227-0.52-4.097 0.672-8.224 3.291-11.41l4.204-5.118z" />
      <path d="m28.699 214.61 6.508-1.216c7.82-1.454 15.414 3.438 17.314 11.156 3.029 12.289 7.592 24.129 13.561 35.191 3.766 6.979 1.449 15.686-5.289 19.867l-5.625 3.491c-2.398 1.487-5.141 2.257-7.912 2.257-1.285 0-2.576-0.164-3.842-0.5-3.992-1.061-7.371-3.716-9.342-7.348-7.602-14.012-13.387-29.016-17.193-44.598-0.979-4.005-0.266-8.234 1.971-11.697 2.237-3.459 5.798-5.847 9.849-6.603z" />
      <path d="m36.849 170.86h-6.727-0.02c-8.287 0-15-6.715-15-15 0-1.219 0.143-2.404 0.418-3.539 5.584-29.84 18.643-58.24 37.801-82.188 29.004-36.258 70.199-60.305 116-67.715 9.908-1.602 20.006-2.416 30.014-2.416 25.752 0 51.313 5.385 74.813 15.67l11.687-11.688c2.413-2.412 5.909-3.389 9.225-2.574 3.313 0.812 5.961 3.299 6.981 6.555l24.191 77.16c1.086 3.465 0.158 7.248-2.41 9.816-2.567 2.568-6.35 3.496-9.815 2.41l-77.16-24.191c-3.256-1.02-5.739-3.668-6.556-6.982-0.813-3.312 0.162-6.811 2.576-9.223l13.013-13.014c-15.021-4.963-30.656-7.473-46.685-7.473-45.797 0-88.547 20.604-117.29 56.531-15.309 19.135-25.793 41.84-30.322 65.662-1.344 7.078-7.532 12.199-14.735 12.199z" />
    </svg>
  </Root>
);

export default Reset;