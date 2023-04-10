import React from 'react';

function Loading() {
  return (
    <div className="z-[1000] a fixed z-[1000] top-0 w-full h-full flex justify-center items-center bg-white">
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loading;
