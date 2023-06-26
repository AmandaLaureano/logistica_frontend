import { ILinesTaxForms } from "@/src/interfaces/app/generalidades";

export default function Line({ field, valueField, minValueField, onChangeValue, onChangeValueMin }: ILinesTaxForms) {
    return (
        <div className="w-full border-b-[1px] border-gray-line h-16">
            <div className="flex hover:bg-green-simple/20 transition-all duration-500 w-full h-full text-sm md:text-base my-auto">
                <div className="w-6/12 flex justify-start my-auto">
                    <span className="flex">
                        {field}
                    </span>
                </div>
                <div className="flex justify-evenly w-6/12 my-auto space-x-6">
                    <input type="number" className="bg-slate-100 w-16 lg:w-20 p-1 rounded-md outline-none" value={valueField} onChange={onChangeValue}/>
                    <input type="number"className="bg-slate-100 w-16 lg:w-20 p-1 rounded-md outline-none" defaultValue={minValueField} onChange={onChangeValueMin}/>
                </div>
            </div>
        </div>
    )
}