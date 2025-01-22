interface Props {
    amount: number | undefined;
    className?: string;
}

const PriceFormat = ({amount,className}: Props) => {
    const formationofprice = new  Number(amount).toLocaleString('en-US' ,{
        currency: 'USD',
        style:'currency',
        minimumFractionDigits: 2,
    
    });
  return (
   <span className={`text-sm font-semibold text-black ${className}`}>{formationofprice}</span>
   
  )
}

export default PriceFormat