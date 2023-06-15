export default function Line({ field, valueField, minValueField, onChangeValue, onChangeValueMin }: ILinesTaxForms) {
    return (
        <div className="w-full border-b-2 border-slate-200 h-12">
            <div className="flex hover:bg-green-simple/20 transition-all duration-500 w-full h-full text-xl my-auto">
                <div className="pl-4 w-6/12 flex justify-start my-auto">
                    <span className="flex justify-start">
                        {field}
                    </span>
                </div>
                <div className="flex justify-evenly w-6/12 my-auto space-x-6">
                    <input type="number" className="bg-slate-100 w-20 p-1 outline-none" value={valueField} onChange={onChangeValue}/>
                    <input type="number"className="bg-slate-100 w-20 p-1 outline-none" defaultValue={minValueField} onChange={onChangeValueMin}/>
                </div>
            </div>
        </div>
    )
}