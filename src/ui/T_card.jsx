import React from 'react';
import cancer from '../assets/images/Cancer.png';

const sharedClasses = {
  flex: 'flex',
  flexCol: 'flex-col',
  itemsCenter: 'items-center',
  justifyCenter: 'justify-center',
  p4: 'p-4',
  bgWhite: 'bg-white',
  shadowMd: 'shadow-md',
  border: 'border',
  borderZinc300: 'border-zinc-300',
  roundedLg: 'rounded-lg',
  m4: 'm-4',
  textRed500: 'text-red-500',
  fontBold: 'font-bold',
  uppercase: 'uppercase',
  maxWFull: 'max-w-full', // Ensure full width for responsiveness
  text2xl: 'text-2xl',
  mb2: 'mb-2',
  w24: 'w-24',
  h1: 'h-1',
  bgRed500: 'bg-red-500',
  mb4: 'mb-4',
  textZinc700: 'text-zinc-700',
  mt2: 'mt-2',
  bgCover: 'bg-cover', // Class for background image covering the div
};

const T_card = () => {
  return (
    <div className={`${sharedClasses.flex} ${sharedClasses.flexCol} ${sharedClasses.itemsCenter} ${sharedClasses.p4} ${sharedClasses.shadowMd} sm:flex-row sm:flex-wrap lg:flex`}>
      <div className={`${sharedClasses.flex} ${sharedClasses.bgCover} ${sharedClasses.p4} ${sharedClasses.border} ${sharedClasses.borderZinc300} ${sharedClasses.roundedLg} ${sharedClasses.m4} w-full sm:w-1/2 sm:h-52 lg:w-auto`} style={{ backgroundImage: `url(${cancer})` }}>
        <p className={`${sharedClasses.textRed500} ${sharedClasses.fontBold} ${sharedClasses.uppercase}`}>Primary Care</p>
      </div>
      <div className={`${sharedClasses.flex} ${sharedClasses.flexCol} ${sharedClasses.maxWFull} ${sharedClasses.p4} ${sharedClasses.m4}`}>
        <h2 className={`${sharedClasses.text2xl} ${sharedClasses.fontBold} ${sharedClasses.mb2}`}>Types of Treatment</h2>
        <div className={`${sharedClasses.w24} ${sharedClasses.h1} ${sharedClasses.bgRed500} ${sharedClasses.mb4}`}></div>
        <p className={sharedClasses.textZinc700}>
          Here we are providing multiple levels of disease solution and their
          treatment with random and real medicines which may help you out easy for your life.
          Here we are providing multiple levels of disease solution and their
          treatment with random and real medicines which may help you out easy for your life
        </p>
      </div>
    </div>
  );
};

export default T_card;
