import clsx from 'clsx';
interface ButtonProps {
    name?: string;
    price?:number|string;
    customStyle?: string;
    style?:string; 
}



export const LayoutListed = (props: ButtonProps) => {
    const { name,price,customStyle,style } = props
    return (
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              {/*Metric Card*/}
              <div className={clsx(['bg-gradient-to-b rounded-lg shadow-xl p-5', customStyle])}> 
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div  className={clsx(['rounded-full p-5', style])} />
                  </div>
                  <div className="flex-1 text-right md:text-center">
                    <h2 className="font-bold uppercase text-gray-600">{name}</h2>
                    <p className="font-bold text-3xl"> {price} </p>
                  </div>
                </div>
              </div>
              {/*/Metric Card*/}
            </div>
        
    )
}