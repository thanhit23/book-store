function Service() {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-4 py-8 bg-white shadow-[rgba(43,52,69,0.1)_0px_4px_16px] rounded">
        <div className="flex justify-center gap-4 items-center border-solid border-r border-[rgb(218, 225, 231)]">
          <i className="fa-solid fa-truck-fast text-[40px] w-[1em] h-[1em]" />
          <div>
            <p className="font-semibold text-[17px]">Fast Delivery</p>
            <span className="text-[#7d879c] text-[14px]">Start from $10</span>
          </div>
        </div>
        <div className="flex justify-center gap-4 items-center border-solid border-r border-[rgb(218, 225, 231)]">
          <i className="fa-solid fa-money-check-dollar text-[40px] w-[1em] h-[1em]" />
          <div>
            <p className="font-semibold text-[17px]">Money Guarantee</p>
            <span className="text-[#7d879c] text-[14px]">7 Days Back</span>
          </div>
        </div>
        <div className="flex justify-center gap-4 items-center border-solid border-r border-[rgb(218, 225, 231)]">
          <i className="fa-solid fa-clock-rotate-left text-[40px] w-[1em] h-[1em]" />
          <div>
            <p className="font-semibold text-[17px]">365 Days</p>
            <span className="text-[#7d879c] text-[14px]">For free return</span>
          </div>
        </div>
        <div className="flex justify-center gap-4 items-center">
          <i className="fa-solid fa-credit-card text-[40px] w-[1em] h-[1em]" />
          <div>
            <p className="font-semibold text-[17px]">Payment</p>
            <span className="text-[#7d879c] text-[14px]">Secure system</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
