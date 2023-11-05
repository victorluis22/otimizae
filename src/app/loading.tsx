import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function Loading({}){
    return (
        <div className='flex justify-center items-center h-full'>
            <AiOutlineLoading3Quarters size={30} className="animate-spin"/>
        </div>
    );
}
