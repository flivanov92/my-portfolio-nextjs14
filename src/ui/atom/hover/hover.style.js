'use client';

import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Card = styled.div`
  height: 500px;
  flex: 1;
  transition: 0.5s;
  background-image: url('/image/cullinan.jpeg');
  background-size: cover;
  background-position: center;

  &:hover {
    flex: 5;
  }

  &:nth-child(2) {
    background-image: url('/image/911.jpeg');
    background-size: cover;
    background-position: center;
  }
  &:nth-child(3) {
    background-image: url('/image/rs5.jpeg');
    background-size: cover;
    background-position: center;
  }
  &:nth-child(4) {
    background-image: url('/image/g.jpeg');
    background-size: cover;
    background-position: center;
  }
`;
