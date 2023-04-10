function DescriptionProductDetail({ detail }: { detail: { description: string } }) {
  return (
    <div>
      <p className="text-[14px] text-[#2b3445]">{detail.description}</p>
    </div>
  );
}

export default DescriptionProductDetail;
